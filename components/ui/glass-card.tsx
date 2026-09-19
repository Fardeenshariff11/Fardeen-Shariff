'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 ${
        hover ? 'hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
