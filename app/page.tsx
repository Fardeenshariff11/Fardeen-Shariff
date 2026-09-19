'use client';

import { useState } from 'react';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';
import { Navbar } from '@/components/nav/navbar';
import { ChatPanel } from '@/components/chat/chat-panel';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="relative">
      <Navbar onOpenChat={() => setIsChatOpen(true)} />
      
      <Hero onOpenChat={() => setIsChatOpen(true)} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center">
        <p className="text-sm text-white/30 font-body">
          Built with Next.js, Framer Motion & Google Gemini AI
        </p>
      </footer>
      
      <ChatPanel 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </main>
  );
}
