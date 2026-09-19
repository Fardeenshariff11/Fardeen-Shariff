'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { GlassCard } from '@/components/ui/glass-card';

export function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            About Me
          </h2>
        </FadeIn>
        
        <GlassCard hover={false} className="p-8 md:p-12 space-y-6 text-lg text-white/80 font-body leading-relaxed">
          <FadeIn delay={0.2}>
            <p>
              I&apos;m an AI and Generative AI focused engineer with a deep passion for building intelligent systems that solve real-world problems. My work spans large language models, agentic AI systems, autonomous agents, retrieval-augmented generation, and production-grade ML pipelines.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p>
              I thrive at the intersection of cutting-edge AI research and practical engineering — turning complex AI capabilities into reliable, scalable products. I bring strong, hands-on professional experience in AI and Generative AI, and I&apos;m constantly exploring the frontier of what&apos;s possible with autonomous AI agents and multi-agent systems.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p>
              Whether it&apos;s designing multi-agent orchestration platforms, building RAG-powered knowledge systems, or crafting AI decision-support tools, I focus on creating AI that&apos;s grounded, trustworthy, and genuinely useful.
            </p>
          </FadeIn>
        </GlassCard>
      </div>
    </section>
  );
}
