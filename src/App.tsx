import { useState, useEffect, useRef } from 'react';
import { ChatHeader } from './components/ChatHeader';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { TypingIndicator } from './components/TypingIndicator';
import { useChat } from './hooks/useChat';
import './index.css';

export default function App() {
  const { state, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  useEffect(() => {
    scrollToBottom()
  }, [state.messages]);

  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true)
    }
  }, [isInitialized]);

  const handleSendMessage = async (message: string) => {
    await sendMessage(message)
  };

  return (
    <div className="app-container">
      <div className="chat-container">
        <ChatHeader />
        
        <div className="messages-container">
          {state.messages.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon-large"
                >
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                </svg>
              </div>
              <h2 className="empty-state-title">Welcome to Product Inventory Assistant</h2>
              <p className="empty-state-subtitle">Ask me anything about your inventory, stock levels, or product information.</p>
              <div className="suggestion-chips">
                <button
                  onClick={() => handleSendMessage('What products do we have in stock?')}
                  className="suggestion-chip"
                >
                  What products do we have?
                </button>
                <button
                  onClick={() => handleSendMessage('Show me low stock items')}
                  className="suggestion-chip"
                >
                  Low stock items
                </button>
                <button
                  onClick={() => handleSendMessage('What are our best sellers?')}
                  className="suggestion-chip"
                >
                  Best sellers
                </button>
              </div>
            </div>
          ) : (
            <>
              {state.messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {state.isLoading && <TypingIndicator />}
            </>
          )}
          
          {state.error && (
            <div className="error-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="error-icon"
              >
                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              <span>{state.error}</span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <ChatInput
          onSendMessage={handleSendMessage}
          disabled={state.isLoading}
        />
      </div>
    </div>
  )
}