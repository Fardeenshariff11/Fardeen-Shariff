'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '@/hooks/use-chat';
import { useSpeechSynthesis } from '@/hooks/use-speech-synthesis';
import { useSpeechRecognition } from '@/hooks/use-speech-recognition';
import { AiAvatar } from '@/components/avatar/ai-avatar';
import { ChatMessage } from './chat-message';
import { ChatInput } from './chat-input';

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const { messages, isLoading, sendMessage } = useChat();
  const { speak, stop: stopSpeaking, isSpeaking } = useSpeechSynthesis();
  const { 
    isListening, 
    transcript, 
    startListening, 
    stopListening, 
    isSupported: isMicSupported,
    resetTranscript 
  } = useSpeechRecognition();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [lastSpokenIndex, setLastSpokenIndex] = useState(-1);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (messages.length > 0 && !isLoading) {
      const lastMessage = messages[messages.length - 1];
      const lastIndex = messages.length - 1;
      if (lastMessage.role === 'assistant' && lastIndex > lastSpokenIndex) {
        speak(lastMessage.content);
        setLastSpokenIndex(lastIndex);
      }
    }
  }, [messages, isLoading, speak, lastSpokenIndex]);

  let avatarState: 'idle' | 'listening' | 'talking' = 'idle';
  if (isListening) avatarState = 'listening';
  else if (isSpeaking) avatarState = 'talking';

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    stopSpeaking();
    stopListening();
    resetTranscript();
    await sendMessage(text);
  };

  const handleMicToggle = () => {
    if (isListening) {
      stopListening();
      if (transcript.trim()) {
        handleSend(transcript);
      }
    } else {
      stopSpeaking();
      resetTranscript();
      startListening();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[480px] z-50 bg-base-light/95 backdrop-blur-2xl border-l border-white/10 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <AiAvatar state={avatarState} size="sm" />
                <h3 className="font-heading font-semibold text-lg text-white">
                  Chat with Fardeen AI
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              {messages.length === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <p className="text-sm max-w-[250px] font-body">
                    Hi! I&apos;m Fardeen&apos;s AI assistant. Ask me anything about his skills, experience, or projects.
                  </p>
                </div>
              )}
              
              {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg} />
              ))}
              
              {isLoading && (
                <ChatMessage 
                  message={{ role: 'assistant', content: '' }} 
                  isLoading={true} 
                />
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <ChatInput 
              onSend={handleSend}
              isLoading={isLoading}
              isListening={isListening}
              isMicSupported={isMicSupported}
              onMicToggle={handleMicToggle}
              transcript={transcript}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
