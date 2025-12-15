'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Amina Hassan',
      avatar: '👩‍🌾',
      lastMessage: 'Thanks for the dairy farming tips!',
      time: '2 min ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'David Omondi',
      avatar: '👨‍🌾',
      lastMessage: 'When is the next cooperative meeting?',
      time: '1 hour ago',
      unread: 0,
      online: true
    },
    {
      id: 3,
      name: 'Grace Mwangi',
      avatar: '👩‍🌾',
      lastMessage: 'The pest diagnosis tool really helped!',
      time: '3 hours ago',
      unread: 1,
      online: false
    },
    {
      id: 4,
      name: 'Peter Njoroge',
      avatar: '👨‍🌾',
      lastMessage: 'Can you share your fertilizer schedule?',
      time: '1 day ago',
      unread: 0,
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'other',
      text: 'Hi John! I saw your post about dairy farming. Very impressive results!',
      time: '10:30 AM'
    },
    {
      id: 2,
      sender: 'me',
      text: 'Thank you! It took a lot of work but the AI nutrition planner really helped.',
      time: '10:32 AM'
    },
    {
      id: 3,
      sender: 'other',
      text: 'I\'m thinking of starting dairy farming too. Any tips for beginners?',
      time: '10:35 AM'
    },
    {
      id: 4,
      sender: 'me',
      text: 'Sure! Start with good quality breeds and focus on proper nutrition. The FARMAI feed planner is excellent.',
      time: '10:37 AM'
    },
    {
      id: 5,
      sender: 'other',
      text: 'Thanks for the dairy farming tips!',
      time: '10:40 AM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/social" className="text-green-600 hover:text-green-700">
              ← Back to Feed
            </Link>
            <h1 className="text-xl font-bold">💬 Messages</h1>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              + New Message
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
          <div className="flex h-full">
            {/* Conversations List */}
            <div className="w-1/3 border-r flex flex-col">
              {/* Search */}
              <div className="p-4 border-b">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedChat(conv.id)}
                    className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 border-b ${
                      selectedChat === conv.id ? 'bg-green-50' : ''
                    }`}
                  >
                    <div className="relative">
                      <span className="text-3xl">{conv.avatar}</span>
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{conv.name}</span>
                        <span className="text-xs text-gray-500">{conv.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <span className="ml-2 px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">👩‍🌾</span>
                  <div>
                    <div className="font-semibold">Amina Hassan</div>
                    <div className="text-sm text-green-600">● Online</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">📞</button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">📹</button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">ℹ️</button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === 'me'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <div
                        className={`text-xs mt-1 ${
                          msg.sender === 'me' ? 'text-green-100' : 'text-gray-500'
                        }`}
                      >
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex gap-3">
                  <button className="p-3 hover:bg-gray-100 rounded-full">
                    📎
                  </button>
                  <button className="p-3 hover:bg-gray-100 rounded-full">
                    📷
                  </button>
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-3 border rounded-lg"
                  />
                  <button className="p-3 hover:bg-gray-100 rounded-full">
                    😊
                  </button>
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

