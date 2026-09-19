'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypingText } from '@/components/ui/typing-text';
import { ParticleField } from '@/components/ui/particle-field';
import { AiAvatar } from '@/components/avatar/ai-avatar';
import { useSpeechSynthesis } from '@/hooks/use-speech-synthesis';

interface HeroProps {
  onOpenChat: () => void;
}

export function Hero({ onOpenChat }: HeroProps) {
  const [avatarState, setAvatarState] = useState<'idle' | 'listening' | 'talking'>('idle');
  const [showContent, setShowContent] = useState(false);
  const [hasSpoken, setHasSpoken] = useState(false);
  
  const { speakWelcome, isSpeaking, isMuted, toggleMute } = useSpeechSynthesis();

  useEffect(() => {
    if (!hasSpoken) {
      const timer = setTimeout(() => {
        speakWelcome();
        setHasSpoken(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [hasSpoken, speakWelcome]);

  useEffect(() => {
    if (isSpeaking) {
      setAvatarState('talking');
    } else {
      setAvatarState('idle');
    }
  }, [isSpeaking]);

  const handleTypingComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      <ParticleField className="z-[1]" />
      
      {/* Mute button */}
      <button 
        onClick={toggleMute} 
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur transition-all text-white/70 hover:text-white"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        )}
      </button>
      
      <div className="z-10 flex flex-col items-center text-center w-full px-6 max-w-4xl">
        <AiAvatar state={avatarState} size="lg" className="mb-12" />
        
        <div className="min-h-[4rem] sm:min-h-[5rem] mb-6 flex items-center justify-center w-full">
          <TypingText 
            text="Welcome to Fardeen Shariff's Portfolio." 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight"
            speed={60}
            onComplete={handleTypingComplete}
          />
        </div>
        
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col items-center w-full"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl text-white/70 font-body mb-12 max-w-2xl font-light leading-relaxed">
                <span className="text-accent-light font-medium">AI & Generative AI Engineer</span>
                {' '}<span className="text-white/40">|</span>{' '}
                Agentic AI
                {' '}<span className="text-white/40">|</span>{' '}
                Building Intelligent Systems
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenChat}
                  className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all duration-300"
                >
                  Ask Fardeen AI
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const el = document.getElementById('about');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur text-white font-medium rounded-xl transition-all duration-300"
                >
                  Explore My Work
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
