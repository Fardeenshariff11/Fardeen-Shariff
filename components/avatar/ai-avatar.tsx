'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waveform } from './waveform';

interface AiAvatarProps {
  state: 'idle' | 'listening' | 'talking';
  size?: 'lg' | 'sm';
  className?: string;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function AiAvatar({
  state,
  size = 'lg',
  className,
  onMouseMove,
}: AiAvatarProps) {
  const isLg = size === 'lg';
  const containerSize = isLg ? 'w-48 h-48' : 'w-16 h-16';
  const iconSize = isLg ? 'w-24 h-24' : 'w-8 h-8';

  return (
    <div
      className={['relative flex flex-col items-center justify-center', className]
        .filter(Boolean)
        .join(' ')}
      onMouseMove={onMouseMove}
    >
      <div className={`relative flex items-center justify-center ${containerSize}`}>
        {/* Listening Rings */}
        <AnimatePresence>
          {state === 'listening' && (
            <>
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={`ring-${ring}`}
                  className="absolute inset-0 rounded-full border border-violet-500"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  exit={{ scale: 1, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: ring * 0.6,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Rotating gradient border ring */}
        <motion.div
          className="absolute inset-0 rounded-full p-[2px]"
          animate={
            state === 'talking'
              ? { rotate: 360, scale: [1, 1.05, 1] }
              : { rotate: 360, scale: 1 }
          }
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            background: 'conic-gradient(from 0deg, #7c3aed, #3b82f6, #7c3aed)',
          }}
        >
          {/* Inner dark circle */}
          <div className="w-full h-full rounded-full bg-[#05060a] flex items-center justify-center overflow-hidden relative">
            {/* Subtle radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/20 to-transparent" />
            
            {/* Abstract AI Face/Circuit SVG */}
            <motion.svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${iconSize} text-violet-400 relative z-10`}
              animate={
                state === 'idle'
                  ? { y: [0, -5, 0] }
                  : { y: 0 }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Hexagonal outer frame */}
              <path
                d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
                fillOpacity="0.1"
              />
              {/* Central circle */}
              <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" />
              {/* Eyes */}
              <circle cx="35" cy="45" r="3" fill="currentColor" />
              <circle cx="65" cy="45" r="3" fill="currentColor" />
              {/* Smile */}
              <path d="M40 65 Q50 75 60 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              {/* Circuit lines */}
              <path d="M50 25 L50 35 M30 75 L38 68 M70 75 L62 68 M25 50 L35 50 M75 50 L65 50" stroke="currentColor" strokeWidth="2" />
            </motion.svg>
          </div>
        </motion.div>
      </div>

      {/* Waveform below avatar for talking state (lg) */}
      <AnimatePresence>
        {state === 'talking' && isLg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -bottom-12"
          >
            <Waveform isActive={true} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Waveform for sm size */}
      <AnimatePresence>
        {state === 'talking' && !isLg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -bottom-6"
          >
            <Waveform isActive={true} className="h-4 gap-[2px]" barWidth="w-[2px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
