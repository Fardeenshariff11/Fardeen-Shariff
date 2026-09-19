'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { GlassCard } from '@/components/ui/glass-card';

const PROJECTS = [
  {
    title: "Campaign Decision Assistant",
    description: "AI decision-support API that retrieves evidence from multiple data sources and generates evidence-backed recommendations for human review. Uses a deterministic pipeline with LLM synthesis — retrieval, conflict detection, and claim validation are all handled programmatically.",
    tags: ["Python", "FastAPI", "OpenAI", "Pydantic", "Deterministic Pipeline"]
  },
  {
    title: "Agentic RAG System",
    description: "Autonomous AI agent system with retrieval-augmented generation that plans, reasons, and executes multi-step research tasks. Features tool-using agents with dynamic source selection, re-ranking, and self-reflection for improved answer quality.",
    tags: ["LangChain", "GPT-4", "ChromaDB", "ReAct Agent", "Python"]
  },
  {
    title: "Multi-Agent Orchestration Platform",
    description: "Multi-agent system where specialized AI agents collaborate to solve complex tasks — each agent has distinct expertise and tools, coordinated through an orchestration layer handling task decomposition and result synthesis.",
    tags: ["Python", "LangGraph", "OpenAI", "Agent Framework", "AsyncIO"]
  },
  {
    title: "Enterprise Knowledge Base with RAG",
    description: "Production-grade RAG system for enterprise document Q&A. Implements hybrid search combining dense vector retrieval with sparse keyword matching, cross-encoder re-ranking, and citation-grounded responses.",
    tags: ["LlamaIndex", "Pinecone", "OpenAI", "FastAPI", "React"]
  },
  {
    title: "AI Portfolio with Voice Interface",
    description: "This very portfolio — featuring a Gemini-powered conversational AI that answers questions about my work, voice input/output using browser-native speech APIs, and an animated AI avatar with reactive states.",
    tags: ["Next.js", "Gemini API", "Framer Motion", "TypeScript", "Web Speech API"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Featured Projects
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.title} delay={0.1 * index}>
              <GlassCard className="p-6 h-full flex flex-col group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent-light transition-colors font-heading">
                    {project.title}
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-accent-light transition-colors shrink-0 mt-1 ml-2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </div>
                
                <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/20 text-accent-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
