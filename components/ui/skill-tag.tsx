'use client';

import { motion } from 'framer-motion';

interface SkillTagProps {
  name: string;
  delay?: number;
}

export function SkillTag({ name, delay = 0 }: SkillTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm cursor-default hover:bg-accent/20 hover:shadow-[0_0_10px_rgba(124,58,237,0.3)] transition-all"
    >
      {name}
    </motion.div>
  );
}
