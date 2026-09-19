'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
            Let&apos;s Connect
          </h2>
          <p className="text-white/60 mb-12 font-body">
            Interested in AI collaboration? Let&apos;s talk.
          </p>
          
          <div className="flex items-center justify-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/fardeen-ahmed-903220382"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-white/70 hover:text-accent-light hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-accent/30 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </motion.a>
            
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-white/70 hover:text-accent-light hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-accent/30 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
