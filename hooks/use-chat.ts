'use client';

import { useState, useCallback } from 'react';

export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: [...messages, userMessage],
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      const assistantMessage: ChatMessage = { role: 'assistant', content: data.response };
      setMessages((prev) => [...prev, assistantMessage]);
      return data.response as string;
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = { 
        role: 'assistant', 
        content: "I'm having trouble connecting right now. Please try again." 
      };
      setMessages((prev) => [...prev, errorMessage]);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return { messages, sendMessage, isLoading, clearMessages };
}
