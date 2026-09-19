'use client';

import { FadeIn } from '@/components/ui/fade-in';

const MILESTONES = [
  {
    title: "Pioneering Agentic AI & Multi-Agent Systems",
    description: "Designing and building autonomous AI agent systems — multi-agent orchestration, tool-using agents, and human-in-the-loop workflows for complex enterprise use cases."
  },
  {
    title: "Advanced Generative AI & LLM Applications",
    description: "Building production-grade generative AI applications including conversational AI systems, RAG pipelines, and AI-powered decision support tools using state-of-the-art foundation models."
  },
  {
    title: "Deepened Focus on LLMs & RAG Systems",
    description: "Specialized in large language model applications and retrieval-augmented generation — building knowledge systems that ground AI responses in real data to minimize hallucination."
  },
  {
    title: "ML Engineering & Production Systems",
    description: "Developed end-to-end machine learning pipelines, from data processing and model training to deployment and monitoring in cloud environments."
  },
  {
    title: "Foundation in AI & Software Engineering",
    description: "Built a strong foundation in programming, algorithms, and core AI/ML concepts — establishing the engineering skills that underpin everything since."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Professional Journey
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-accent/30 to-transparent" />

          <div className="space-y-14">
            {MILESTONES.map((milestone, index) => (
              <FadeIn key={milestone.title} delay={0.15 * index}>
                <div className="relative flex gap-8 group">
                  {/* Timeline Dot */}
                  <div className="relative shrink-0 flex items-start pt-1.5">
                    <div className="w-[22px] h-[22px] rounded-full border-2 border-accent/50 bg-base flex items-center justify-center group-hover:border-accent transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(124,58,237,0.6)] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.8)] transition-all" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pb-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-accent-light transition-colors font-heading">
                      {milestone.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed font-body">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
