'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { GlassCard } from '@/components/ui/glass-card';

export function Education() {
  return (
    <section id="education" className="py-32 px-6 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Education
          </h2>
          
          <GlassCard className="p-8 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent-light">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-6 text-accent-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 font-heading">
                Bachelor of Technology
              </h3>
              <p className="text-white/70 mb-4">
                Computer Science
              </p>
              <p className="text-white/50 italic text-sm">
                Update with your institution
              </p>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
