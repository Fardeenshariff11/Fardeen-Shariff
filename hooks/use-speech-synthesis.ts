'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const isMutedRef = useRef(false);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;
      
      const loadVoices = () => {
        const voices = synthRef.current?.getVoices() || [];
        const preferredVoice = voices.find((v) => v.name.includes('Google') && v.lang.startsWith('en')) 
          || voices.find((v) => v.lang.startsWith('en-US'))
          || voices.find((v) => v.lang.startsWith('en')) 
          || voices[0];
        if (preferredVoice) {
          voiceRef.current = preferredVoice;
        }
      };

      loadVoices();
      if (synthRef.current?.onvoiceschanged !== undefined) {
        synthRef.current.onvoiceschanged = loadVoices;
      }
    }
  }, []);

  const stop = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      if (next) {
        stop();
      }
      return next;
    });
  }, [stop]);

  const speak = useCallback(
    (text: string) => {
      if (isMutedRef.current || !synthRef.current || typeof window === 'undefined') return;

      stop();

      const utterance = new SpeechSynthesisUtterance(text);
      if (voiceRef.current) {
        utterance.voice = voiceRef.current;
      }
      utterance.rate = 0.95;
      utterance.pitch = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      synthRef.current.speak(utterance);
    },
    [stop]
  );

  const speakWelcome = useCallback(() => {
    const welcomeText = "Welcome to Fardeen Shariff's Portfolio. I'm an AI and Generative AI focused engineer with strong hands-on experience building intelligent systems — from large language model applications and agentic AI systems, to retrieval-augmented generation and production ML pipelines. I specialize in building autonomous AI agents and multi-agent systems. Feel free to explore my work, or click Ask Fardeen AI to chat with me.";
    speak(welcomeText);
  }, [speak]);

  return { speak, stop, isSpeaking, speakWelcome, isMuted, toggleMute };
}
