'use client';

import { motion } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatMessageProps {
  message: Message;
  isLoading?: boolean;
}

export function ChatMessage({ message, isLoading }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col w-full ${isUser ? 'items-end' : 'items-start'}`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 text-sm md:text-base leading-relaxed ${
          isUser
            ? 'bg-accent/20 text-white rounded-2xl rounded-br-md'
            : 'bg-white/5 border border-white/10 text-white/90 rounded-2xl rounded-bl-md'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center gap-1.5 h-6">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
              className="w-2 h-2 rounded-full bg-white/50"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
              className="w-2 h-2 rounded-full bg-white/50"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
              className="w-2 h-2 rounded-full bg-white/50"
            />
          </div>
        ) : (
          <div className="whitespace-pre-wrap">{message.content}</div>
        )}
      </div>
    </motion.div>
  );
}
