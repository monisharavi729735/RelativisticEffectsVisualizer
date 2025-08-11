import React, { useState } from 'react';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
  };

  return (
    <div className="relative bg-white/10 rounded-xl border border-white/20 shadow-lg p-10 max-w-3xl h-[80vh] mx-auto px-8 mt-20">
        <div class="absolute inset-0 bg-white/10 opacity-70 rounded-xl"></div>

        {/* Title & Tagline */}
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold text-white">🤖 CosmoBot</h2>
          <p className="text-gray-300 text-sm mt-2">Your cosmic co-pilot</p>
        </div>

        {/* Chat Window */}
        <div className="relative z-10 h-[calc(100%-140px)] overflow-y-auto space-y-5 pr-2 text-base">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] px-5 py-3 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-blue-900 text-white self-end ml-auto'
                  : 'bg-white/20 text-white'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="relative z-10 mt-6 flex gap-3 text-base">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="px-6 py-3 bg-indigo-900 hover:bg-indigo-700 text-white rounded-lg 
                      shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f] transition-all duration-200"
          >
            Send
          </button>
        </div>
      </div>

  );
};

export default ChatbotPage;
