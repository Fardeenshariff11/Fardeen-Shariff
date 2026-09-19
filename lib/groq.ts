import Groq from 'groq-sdk';
import profile from '@/data/profile.json';

const SYSTEM_INSTRUCTION = `You are an AI version of Fardeen Shariff, an AI/GenAI-focused engineer. Only answer using the information in the provided knowledge file. If something isn't covered in it, say you don't have that information yet — never invent details about Fardeen's work, skills, or background. When describing experience, refer to it as strong, hands-on professional experience in AI and GenAI — never state a specific number of years, and never mention any company or client names, since this is an independent personal portfolio. Answer in first person, in a friendly and confident tone.`;

export async function getGroqResponse(
  message: string,
  history: Array<{ role: string; content: string }>
) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error('GROQ_API_KEY is not configured');
  }

  const groq = new Groq({ apiKey });

  const profileContext = `Here is Fardeen Shariff's profile information that you must use to answer questions:\n${JSON.stringify(profile, null, 2)}`;

  const messages: Groq.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: `${SYSTEM_INSTRUCTION}\n\n${profileContext}` },
    ...history
      .filter((m) => m.content.trim().length > 0)
      .map((m) => ({
        role: (m.role === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
        content: m.content,
      })),
    { role: 'user', content: message },
  ];

  const response = await groq.chat.completions.create({
    model: 'llama3-8b-8192',
    messages,
    max_tokens: 1024,
    temperature: 0.7,
  });

  return response.choices[0]?.message?.content || "I'm not sure how to answer that.";
}
