'use client';

import { useState, useRef, useEffect } from 'react';
import { aiService, AIMessage } from '@/lib/ai-service';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      role: 'assistant',
      content: 'Hello! I am FARMAI Assistant. I can help you with crops, livestock, pests, diseases, weather, and market information. You can type, speak, or send photos. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'sw', name: 'Swahili' },
    { code: 'ha', name: 'Hausa' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'am', name: 'Amharic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'pt', name: 'Português' },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() && !selectedImage) return;

    const userMessage: AIMessage = {
      role: 'user',
      content: input,
      timestamp: new Date(),
      language: selectedLanguage,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      let response = '';

      if (selectedImage) {
        // Image analysis
        const analysis = await aiService.analyzeImage(selectedImage, 'disease', {
          userQuery: input,
          language: selectedLanguage,
        });
        
        response = `**Diagnosis:** ${analysis.diagnosis}\n\n**Confidence:** ${(analysis.confidence * 100).toFixed(0)}%\n\n**Severity:** ${analysis.severity.toUpperCase()}\n\n**Recommendations:**\n${analysis.recommendations.map((r, i) => `${i + 1}. ${r}`).join('\n')}`;
        
        setSelectedImage(null);
      } else {
        // Text chat
        response = await aiService.chat([...messages, userMessage]);
      }

      const assistantMessage: AIMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Text-to-speech for response (using browser API)
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(response);
        utterance.lang = selectedLanguage;
        // Uncomment to enable auto-speech
        // window.speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: AIMessage = {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const text = await aiService.voiceToText(audioBlob, selectedLanguage);
        setInput(text);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Recording error:', error);
      alert('Could not access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* AI Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div>
                <h3 className="font-bold">FARMAI Assistant</h3>
                <p className="text-xs opacity-90">AI-Powered Agricultural Advisor</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-lg">
              ✕
            </button>
          </div>

          {/* Language Selector */}
          <div className="p-2 bg-gray-50 border-b">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full p-2 text-sm border rounded-lg"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => speakMessage(msg.content)}
                      className="mt-2 text-xs opacity-70 hover:opacity-100 flex items-center gap-1"
                    >
                      🔊 Listen
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Image Preview */}
          {selectedImage && (
            <div className="p-2 bg-blue-50 border-t flex items-center justify-between">
              <span className="text-sm text-blue-700">📷 Image selected</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex gap-2 mb-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageSelect}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                title="Upload Image"
              >
                📷
              </button>
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`p-2 rounded-lg ${
                  isRecording ? 'bg-red-500 animate-pulse' : 'bg-purple-500 hover:bg-purple-600'
                } text-white`}
                title={isRecording ? 'Stop Recording' : 'Voice Input'}
              >
                🎤
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || (!input.trim() && !selectedImage)}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

