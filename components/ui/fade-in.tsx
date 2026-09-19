'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const getVariants = () => {
    switch (direction) {
      case 'up': return { y: 20, x: 0 };
      case 'down': return { y: -20, x: 0 };
      case 'left': return { y: 0, x: 20 };
      case 'right': return { y: 0, x: -20 };
      case 'none': return { y: 0, x: 0 };
      default: return { y: 20, x: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getVariants() }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
