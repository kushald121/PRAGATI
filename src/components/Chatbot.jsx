import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(
        `https://corsproxy.io/?https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(
          input
        )}&botname=HelperBot&ownername=Shadab&user=12345`
      );

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.message };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Sorry, something went wrong.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col max-sm:w-full">
          {/* Header */}
          <div className="bg-orange-500 text-white p-4 flex justify-between items-center rounded-t-2xl">
            <h2 className="font-semibold text-lg">Chatbot</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold hover:text-gray-200"
            >
              ×
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                  msg.sender === 'bot'
                    ? 'bg-green-200 text-gray-800 text-left'
                    : 'bg-orange-500 text-white ml-auto text-right'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-sm text-gray-500 italic">Bot is typing...</div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t flex bg-white rounded-b-2xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-orange-500"
            />
            <button
              onClick={sendMessage}
              className="bg-orange-500 hover:bg-green-500 text-white px-4 rounded-r-lg transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
