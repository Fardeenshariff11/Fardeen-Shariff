import { NextResponse } from 'next/server';
import { getGroqResponse } from '@/lib/groq';

export async function POST(request: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'GROQ_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { message, history = [] } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await getGroqResponse(message, history);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { response: "I'm having trouble connecting right now. Please try again in a moment." },
      { status: 500 }
    );
  }
}
