import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fardeen Shariff — AI Engineer Portfolio',
  description:
    'Portfolio of Fardeen Shariff, an AI & Generative AI focused engineer. Explore projects in Agentic AI, LLMs, RAG systems, and more. Chat with an AI version of Fardeen powered by Google Gemini.',
  keywords: [
    'AI Engineer',
    'Generative AI',
    'Agentic AI',
    'LLM',
    'RAG',
    'Portfolio',
    'Fardeen Shariff',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-base text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
