import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audio = formData.get('audio') as Blob;
    const language = formData.get('language') as string || 'en';

    if (!audio) {
      return NextResponse.json(
        { error: 'No audio provided' },
        { status: 400 }
      );
    }

    // TODO: Integrate with actual speech-to-text service
    // Options: OpenAI Whisper, Google Speech-to-Text, Azure Speech, etc.
    
    // Mock response for now
    const mockTranscriptions: Record<string, string> = {
      en: 'My crops are showing yellow spots on the leaves',
      sw: 'Mazao yangu yana madoa ya manjano kwenye majani',
      ha: 'Amfanin gona na suna nuna tabo rawaya akan ganye',
      yo: 'Awọn irugbin mi n ṣafihan awọn aami ofeefee lori awọn ewe',
      am: 'የእኔ ሰብሎች በቅጠሎች ላይ ቢጫ ነጠብጣቦች እያሳዩ ነው',
      hi: 'मेरी फसलों की पत्तियों पर पीले धब्बे दिख रहे हैं',
    };

    const text = mockTranscriptions[language] || mockTranscriptions.en;

    return NextResponse.json({
      text,
      language,
      confidence: 0.92,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Voice to Text Error:', error);
    return NextResponse.json(
      { error: 'Failed to process audio' },
      { status: 500 }
    );
  }
}

