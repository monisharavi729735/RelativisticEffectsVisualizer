import React, { useState } from 'react';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessageToAPI = async (message) => {
    try {
      const response = await fetch('http://localhost:8000/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: message,
          history: []
        }),
      });
      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      return data.answer;  // backend returns { answer: "..." }
    } catch (error) {
      console.error('Error communicating with chatbot API:', error);
      return 'Sorry, there was an error processing your question.';
    }
  };

  const handleSend = async () => {
    if (input.trim() === '') return;
    const userMessage = input.trim();

    // Add user's message first
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    // Call backend API to get bot response
    const botResponse = await sendMessageToAPI(userMessage);

    // Add bot's response
    setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    setLoading(false);
  };

  return (
    <div className="relative bg-white/10 rounded-xl border border-white/20 shadow-lg p-10 max-w-3xl h-[80vh] mx-auto px-8 mt-20">
      <div className="absolute inset-0 bg-white/10 opacity-70 rounded-xl"></div>
      <div className="relative z-10 text-center mb-6">
        <h2 className="text-3xl font-bold text-white">🤖 CosmoBot</h2>
        <p className="text-gray-300 text-sm mt-2">Your cosmic co-pilot</p>
      </div>

      <div className="relative z-10 h-[calc(100%-140px)] overflow-y-auto space-y-5 pr-2 text-base">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[70%] px-5 py-3 rounded-lg ${
              msg.sender === 'user'
                ? 'bg-blue-900 text-white self-end ml-auto'
                : 'bg-white/20 text-white'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="max-w-[70%] px-5 py-3 rounded-lg bg-white/20 text-white">
            Typing...
          </div>
        )}
      </div>

      <div className="relative z-10 mt-6 flex gap-3 text-base">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your question..."
          className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="px-6 py-3 bg-indigo-900 hover:bg-indigo-700 text-white rounded-lg 
                    shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f] transition-all duration-200 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;