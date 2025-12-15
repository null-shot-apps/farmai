// AI Service Integration Layer
// Handles text, voice, and image AI interactions

export interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  language?: string;
}

export interface AIImageAnalysis {
  diagnosis: string;
  confidence: number;
  recommendations: string[];
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface AIVoiceConfig {
  language: string;
  accent?: string;
  speed?: number;
}

class AIService {
  private apiEndpoint = process.env.NEXT_PUBLIC_AI_API_ENDPOINT || '/api/ai';
  
  // Text-based AI Chat
  async chat(messages: AIMessage[], context?: Record<string, any>): Promise<string> {
    try {
      const response = await fetch(`${this.apiEndpoint}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, context }),
      });
      
      if (!response.ok) throw new Error('AI chat failed');
      
      const data = await response.json() as { response: string };
      return data.response;
    } catch (error) {
      console.error('AI Chat Error:', error);
      return 'I apologize, but I am having trouble connecting right now. Please try again.';
    }
  }

  // Image Analysis (Pest/Disease/Livestock Diagnosis)
  async analyzeImage(
    imageFile: File,
    type: 'pest' | 'disease' | 'livestock' | 'soil',
    additionalInfo?: Record<string, any>
  ): Promise<AIImageAnalysis> {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('type', type);
      if (additionalInfo) {
        formData.append('context', JSON.stringify(additionalInfo));
      }

      const response = await fetch(`${this.apiEndpoint}/analyze-image`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Image analysis failed');

      return await response.json();
    } catch (error) {
      console.error('Image Analysis Error:', error);
      return {
        diagnosis: 'Unable to analyze image at this time',
        confidence: 0,
        recommendations: ['Please try again or consult with an expert'],
        severity: 'medium',
      };
    }
  }

  // Voice to Text (Speech Recognition)
  async voiceToText(audioBlob: Blob, language: string = 'en'): Promise<string> {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob);
      formData.append('language', language);

      const response = await fetch(`${this.apiEndpoint}/voice-to-text`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Voice recognition failed');

      const data = await response.json() as { text: string };
      return data.text;
    } catch (error) {
      console.error('Voice to Text Error:', error);
      return '';
    }
  }

  // Text to Voice (Speech Synthesis)
  async textToVoice(text: string, config: AIVoiceConfig): Promise<Blob | null> {
    try {
      const response = await fetch(`${this.apiEndpoint}/text-to-voice`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, ...config }),
      });

      if (!response.ok) throw new Error('Voice synthesis failed');

      return await response.blob();
    } catch (error) {
      console.error('Text to Voice Error:', error);
      return null;
    }
  }

  // Multilingual Translation
  async translate(text: string, fromLang: string, toLang: string): Promise<string> {
    try {
      const response = await fetch(`${this.apiEndpoint}/translate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, fromLang, toLang }),
      });

      if (!response.ok) throw new Error('Translation failed');

      const data = await response.json() as { translation: string };
      return data.translation;
    } catch (error) {
      console.error('Translation Error:', error);
      return text;
    }
  }

  // Crop Recommendation AI
  async recommendCrops(params: {
    location: string;
    soilType: string;
    season: string;
    farmSize: number;
    budget?: number;
  }): Promise<any> {
    try {
      const response = await fetch(`${this.apiEndpoint}/recommend-crops`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });

      if (!response.ok) throw new Error('Crop recommendation failed');

      return await response.json();
    } catch (error) {
      console.error('Crop Recommendation Error:', error);
      return { crops: [], error: 'Unable to generate recommendations' };
    }
  }

  // Livestock Health AI
  async diagnoseLivestock(params: {
    species: string;
    symptoms: string[];
    image?: File;
    age?: number;
    breed?: string;
  }): Promise<any> {
    try {
      const formData = new FormData();
      formData.append('species', params.species);
      formData.append('symptoms', JSON.stringify(params.symptoms));
      if (params.image) formData.append('image', params.image);
      if (params.age) formData.append('age', params.age.toString());
      if (params.breed) formData.append('breed', params.breed);

      const response = await fetch(`${this.apiEndpoint}/diagnose-livestock`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Livestock diagnosis failed');

      return await response.json();
    } catch (error) {
      console.error('Livestock Diagnosis Error:', error);
      return { diagnosis: 'Unable to diagnose', recommendations: [] };
    }
  }
}

export const aiService = new AIService();


