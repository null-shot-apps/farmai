import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { messages: any[]; context?: Record<string, any> };
    const { messages } = body;

    // TODO: Integrate with actual AI service (OpenAI, Anthropic, Google AI, etc.)
    // For now, returning mock response
    
    const lastMessage = messages[messages.length - 1];
    const userQuery = lastMessage.content.toLowerCase();

    // Simple rule-based responses (replace with actual AI)
    let response = '';

    if (userQuery.includes('pest') || userQuery.includes('disease')) {
      response = 'I can help you identify pests and diseases. Please describe the symptoms you are seeing, or upload a photo for better diagnosis.';
    } else if (userQuery.includes('crop') || userQuery.includes('plant')) {
      response = 'I can recommend the best crops for your farm based on your location, soil type, and season. What information can you provide?';
    } else if (userQuery.includes('livestock') || userQuery.includes('animal')) {
      response = 'I can help with livestock health, feeding, and breeding. What specific issue are you facing with your animals?';
    } else if (userQuery.includes('weather') || userQuery.includes('rain')) {
      response = 'I can provide weather forecasts and climate alerts for your area. What is your location?';
    } else {
      response = 'I am FARMAI, your agricultural assistant. I can help with crops, livestock, pests, diseases, weather, and market information. How can I assist you today?';
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('AI Chat Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}


