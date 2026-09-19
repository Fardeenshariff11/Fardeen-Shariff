'use client';

import { useState, useEffect, useRef } from 'react';

interface ChatInputProps {
  onSend: (text: string) => void;
  isLoading: boolean;
  isListening: boolean;
  isMicSupported: boolean;
  onMicToggle: () => void;
  transcript: string;
}

export function ChatInput({
  onSend,
  isLoading,
  isListening,
  isMicSupported,
  onMicToggle,
  transcript
}: ChatInputProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isListening && transcript) {
      setInput(transcript);
    }
  }, [transcript, isListening]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    onSend(input);
    setInput('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-white/10 flex items-center gap-2">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything..."
        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-accent/50 focus:outline-none transition-colors font-body"
        disabled={isLoading}
      />
      
      {isMicSupported && (
        <button
          onClick={onMicToggle}
          type="button"
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 relative transition-colors ${
            isListening ? 'bg-accent/20 text-accent-light' : 'bg-white/5 text-white/50 hover:text-white'
          }`}
        >
          {isListening && (
            <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
          )}
          <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" x2="12" y1="19" y2="22"/>
          </svg>
        </button>
      )}

      <button
        onClick={handleSend}
        disabled={!input.trim() || isLoading}
        className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-light transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </div>
  );
}
