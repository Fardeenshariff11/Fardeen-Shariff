'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenChat: () => void;
}

export function Navbar({ onOpenChat }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.7);
      if (window.scrollY <= window.innerHeight * 0.7) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-50 bg-base/80 backdrop-blur-xl border-b border-white/5"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-heading font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light"
            >
              FS
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-sm text-white/60 hover:text-white transition-colors font-body"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onOpenChat}
                className="hidden sm:flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent-light hover:bg-accent/30 rounded-lg px-4 py-2 text-sm transition-colors font-body"
              >
                Ask Fardeen AI
              </button>

              <button
                className="md:hidden text-white/70 hover:text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {isMobileMenuOpen ? (
                    <path d="M18 6 6 18M6 6l12 12"/>
                  ) : (
                    <><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-white/5 bg-base/95 backdrop-blur-xl overflow-hidden"
              >
                <div className="px-6 py-4 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      onOpenChat();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex justify-center items-center bg-accent/20 border border-accent/30 text-accent-light hover:bg-accent/30 rounded-lg px-4 py-2 text-sm transition-colors w-full mt-2"
                  >
                    Ask Fardeen AI
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
