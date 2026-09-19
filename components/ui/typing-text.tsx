'use client';

import { useState, useEffect, useRef } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingText({ text, speed = 50, className = '', onComplete }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let currentIndex = 0;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let timeoutId: NodeJS.Timeout;

    const typeNextChar = () => {
      if (currentIndex < text.length) {
        const randomFrames = 3;
        let currentFrame = 0;
        
        const animateChar = () => {
          if (currentFrame < randomFrames) {
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            setDisplayedText(text.slice(0, currentIndex) + randomChar);
            currentFrame++;
            timeoutId = setTimeout(animateChar, speed / 3);
          } else {
            setDisplayedText(text.slice(0, currentIndex + 1));
            currentIndex++;
            timeoutId = setTimeout(typeNextChar, speed);
          }
        };
        
        animateChar();
      } else {
        setIsTyping(false);
        if (onCompleteRef.current) onCompleteRef.current();
      }
    };

    timeoutId = setTimeout(typeNextChar, speed);

    return () => clearTimeout(timeoutId);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
}
