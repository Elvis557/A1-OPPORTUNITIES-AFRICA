import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "🌍 Welcome to A1 Opportunities Africa! I'm here to help you with job opportunities, visa applications, and CV support. How can I assist you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const messagesEndRef = useRef(null);

  // Check if current page is homepage
  useEffect(() => {
    const checkHomePage = () => {
      const currentPath = window.location.pathname;
      // Show on homepage (root path) or if path is just "/"
      setIsHomePage(currentPath === '/' || currentPath === '' || currentPath === '/home');
    };

    // Check initially
    checkHomePage();

    // Listen for route changes (for React Router)
    const handleLocationChange = () => {
      checkHomePage();
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleLocationChange);
    
    // For React Router, you might also want to listen for route changes
    // This will work if you're using React Router
    const observer = new MutationObserver(() => {
      checkHomePage();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      observer.disconnect();
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Groq API Integration
 // Replace your sendMessage function with this improved version

const sendMessage = async (message) => {
  if (!message.trim()) return;

  const userMessage = { id: Date.now(), text: message, sender: 'user' };
  setMessages(prev => [...prev, userMessage]);
  setInputValue('');
  setIsLoading(true);

  try {
    const GROQ_API_KEY = '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';

    // Build conversation history for context
    const conversationHistory = messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    }));

    // Add current user message
    conversationHistory.push({
      role: 'user',
      content: message
    });

    const requestBody = {
      model: 'llama-3.1-8b-instant', // Try changing to 'mixtral-8x7b-32768' if this fails
      messages: [
        { 
          role: 'system', 
          content: "You are a helpful AI assistant for A1 Opportunities Africa. You help users with job applications, visa and travel inquiries, and CV improvement tips. Keep responses concise and professional. Respond in max of 4 lines. if the question isn't related to your stated functions respond "I can't assist with that request"." 
        },
        ...conversationHistory.slice(-5) // Only send last 5 messages for context
      ],
      max_tokens: 150, // Reduced from 200
      temperature: 0.7,
    };

    console.log('Sending request:', requestBody); // Debug log

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log('Response status:', response.status); // Debug log

    if (!response.ok) {
      const errorData = await response.text();
      console.error('API Error Details:', errorData); // This will show you exactly what's wrong
      throw new Error(`Groq API error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    console.log('API Response:', data); // Debug log

    const botResponse = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that.";

    const botMessage = { 
      id: Date.now() + 1, 
      text: botResponse, 
      sender: 'bot' 
    };
    setMessages(prev => [...prev, botMessage]);

  } catch (error) {
    console.error('Full Error Details:', error);
    
    // More specific error messages
    let errorText = "Sorry, I'm having trouble connecting.";
    if (error.message.includes('400')) {
      errorText = "There was an issue with the request format. Please try again.";
    } else if (error.message.includes('401')) {
      errorText = "API authentication failed. Please check the configuration.";
    } else if (error.message.includes('429')) {
      errorText = "Too many requests. Please wait a moment and try again.";
    }

    const errorMessage = { 
      id: Date.now() + 1, 
      text: errorText, 
      sender: 'bot' 
    };
    setMessages(prev => [...prev, errorMessage]);
  }

  setIsLoading(false);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Don't render anything if not on homepage
  if (!isHomePage) {
    return null;
  }

  return (
    <>
      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes slideIn {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .pulse-animation { animation: pulse 2s infinite; }
        .slide-in { animation: slideIn 0.3s ease-out; }
        .chat-scrollbar::-webkit-scrollbar { width: 6px; }
        .chat-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .chat-scrollbar::-webkit-scrollbar-thumb { background: #c1c1c1; border-radius: 10px; }
        .chat-scrollbar::-webkit-scrollbar-thumb:hover { background: #a8a8a8; }
      `}</style>

      {/* Chat Window */}
      {isOpen && (
        <div className="slide-in fixed bottom-32 right-4 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-2xl z-[1001] flex flex-col border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">A1 Opportunities Africa</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scrollbar">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2 max-w-xs">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3 bg-gray-100 rounded-lg rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSubmit}
                disabled={isLoading || !inputValue.trim()}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition-colors"
              >
                <Send className="w-4 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button - Positioned above WhatsApp widget */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-36 right-4 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-[1000] flex items-center justify-center ${!isOpen ? 'pulse-animation' : ''}`}
        title="Chat with A1 Opportunities Africa"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-9" />}
      </button>
    </>
  );
};

export default ChatWidget;
















