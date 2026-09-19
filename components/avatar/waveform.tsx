'use client';

import { motion } from 'framer-motion';

interface WaveformProps {
  isActive: boolean;
  className?: string;
  barWidth?: string;
}

export function Waveform({ isActive, className, barWidth = 'w-1' }: WaveformProps) {
  const bars = [
    { id: 1, duration: 0.4, maxHeights: [16, 24, 12, 32, 16] },
    { id: 2, duration: 0.6, maxHeights: [20, 12, 28, 16, 20] },
    { id: 3, duration: 0.3, maxHeights: [32, 16, 24, 12, 32] },
    { id: 4, duration: 0.5, maxHeights: [12, 28, 16, 24, 12] },
    { id: 5, duration: 0.7, maxHeights: [24, 16, 32, 12, 24] },
  ];

  return (
    <div className={['flex items-end justify-center gap-1 h-8', className].filter(Boolean).join(' ')}>
      {bars.map((bar) => (
        <motion.div
          key={bar.id}
          className={`${barWidth} rounded-full bg-violet-400`}
          initial={{ height: 4 }}
          animate={{
            height: isActive ? bar.maxHeights : 4,
          }}
          transition={{
            height: isActive
              ? {
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: bar.duration,
                  ease: 'easeInOut',
                }
              : {
                  duration: 0.3,
                  ease: 'easeOut',
                },
          }}
        />
      ))}
    </div>
  );
}
