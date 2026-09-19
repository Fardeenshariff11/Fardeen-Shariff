import { GoogleGenerativeAI } from '@google/generative-ai';
import profile from '@/data/profile.json';

const SYSTEM_INSTRUCTION = `You are an AI version of Fardeen Shariff, an AI/GenAI-focused engineer. Only answer using the information in the provided knowledge file. If something isn't covered in it, say you don't have that information yet — never invent details about Fardeen's work, skills, or background. When describing experience, refer to it as strong, hands-on professional experience in AI and GenAI — never state a specific number of years, and never mention any company or client names, since this is an independent personal portfolio. Answer in first person, in a friendly and confident tone.`;

export async function getGeminiResponse(message: string, history: Array<{role: string, content: string}>) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ 
    model: 'gemini-1.5-flash',
    systemInstruction: SYSTEM_INSTRUCTION,
  });

  const formattedHistory = history
    .filter(msg => msg.content.trim().length > 0)
    .map((msg) => ({
      role: msg.role === 'user' ? 'user' as const : 'model' as const,
      parts: [{ text: msg.content }],
    }));

  const chat = model.startChat({
    history: formattedHistory,
  });

  const promptText = `Context Knowledge (Profile data):
${JSON.stringify(profile, null, 2)}

Current User Message:
${message}`;

  const result = await chat.sendMessage(promptText);
  return result.response.text();
}
