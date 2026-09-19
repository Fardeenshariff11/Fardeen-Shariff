'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { GlassCard } from '@/components/ui/glass-card';
import { SkillTag } from '@/components/ui/skill-tag';

const SKILLS = [
  {
    category: "Agentic AI & AI Agents",
    skills: ["Autonomous AI Agents", "Multi-Agent Systems", "Agent Orchestration", "Tool-Using Agents", "ReAct Pattern", "Planning & Reasoning Agents", "Human-in-the-Loop Agents"]
  },
  {
    category: "LLMs & Foundation Models",
    skills: ["GPT-4", "Google Gemini", "Claude", "LLaMA", "Mistral", "Prompt Engineering", "Fine-tuning", "RLHF", "Few-Shot & Zero-Shot Learning"]
  },
  {
    category: "RAG & Retrieval Systems",
    skills: ["LangChain", "LlamaIndex", "Vector Databases", "Pinecone", "ChromaDB", "Weaviate", "Hybrid Search", "Semantic Search", "Re-ranking"]
  },
  {
    category: "Generative AI Applications",
    skills: ["Chatbots & Conversational AI", "Content Generation", "Code Generation", "Text Summarization", "AI-Powered Search", "Knowledge Base Systems"]
  },
  {
    category: "ML & Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Transformers", "NLP", "Computer Vision", "Model Evaluation", "Experiment Tracking"]
  },
  {
    category: "Cloud & MLOps",
    skills: ["AWS", "Google Cloud Platform", "Azure", "Docker", "Kubernetes", "MLflow", "CI/CD for ML", "Model Serving"]
  },
  {
    category: "Programming & Frameworks",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "FastAPI", "Next.js", "React", "Node.js"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            AI & Technical Skills
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, groupIndex) => (
            <FadeIn key={group.category} delay={0.1 * groupIndex}>
              <GlassCard className="p-6 h-full">
                <h3 className="text-lg font-semibold text-accent-light mb-4 font-heading">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <SkillTag key={skill} name={skill} delay={0.05 * skillIndex} />
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
