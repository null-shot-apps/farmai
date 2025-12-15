# FARMAI AI Integration Setup Guide

## Overview
FARMAI uses AI for crop recommendations, pest diagnosis, livestock health analysis, and multilingual voice support.

## AI Providers Supported

### 1. OpenAI (Recommended)
- **Models**: GPT-4 Vision, GPT-4, GPT-3.5 Turbo
- **Best for**: Text chat, image analysis, multilingual support
- **Setup**:
  ```bash
  npm install openai
  ```
- **Environment**:
  ```
  AI_PROVIDER=openai
  OPENAI_API_KEY=sk-...
  OPENAI_MODEL=gpt-4-vision-preview
  ```

### 2. Google AI (Gemini)
- **Models**: Gemini Pro Vision, Gemini Pro
- **Best for**: Multilingual voice, image analysis
- **Setup**:
  ```bash
  npm install @google/generative-ai
  ```
- **Environment**:
  ```
  AI_PROVIDER=google
  GOOGLE_AI_API_KEY=...
  GOOGLE_AI_MODEL=gemini-pro-vision
  ```

### 3. Anthropic (Claude)
- **Models**: Claude 3 Opus, Claude 3 Sonnet
- **Best for**: Complex reasoning, detailed analysis
- **Setup**:
  ```bash
  npm install @anthropic-ai/sdk
  ```
- **Environment**:
  ```
  AI_PROVIDER=anthropic
  ANTHROPIC_API_KEY=...
  ANTHROPIC_MODEL=claude-3-opus-20240229
  ```

## Feature-Specific AI Services

### Text Chat AI
**Purpose**: Answer farmer questions about crops, livestock, weather, markets

**Implementation**:
- Uses conversation history for context
- Specialized prompts for agriculture domain
- Multilingual response generation

**API Endpoint**: `/api/ai/chat`

### Image Analysis AI
**Purpose**: Diagnose pests, diseases, livestock health from photos

**Implementation**:
- Vision models (GPT-4V, Gemini Pro Vision)
- Specialized agriculture image recognition
- Confidence scoring
- Treatment recommendations

**API Endpoint**: `/api/ai/analyze-image`

### Voice Processing
**Purpose**: Speech-to-text and text-to-speech in 9+ languages

**Implementation**:
- Browser Web Speech API (free, offline-capable)
- Google Cloud Speech-to-Text (premium)
- ElevenLabs TTS (premium, natural voices)

**API Endpoint**: `/api/ai/voice`

## Installation Steps

### 1. Install Dependencies
```bash
cd packages/farmai
npm install openai @google/generative-ai @anthropic-ai/sdk
```

### 2. Configure Environment
```bash
cp .env.example .env.local
# Edit .env.local with your API keys
```

### 3. Choose AI Provider
Edit `.env.local`:
```
AI_PROVIDER=openai  # or google, anthropic
```

### 4. Add API Keys
Get API keys from:
- OpenAI: https://platform.openai.com/api-keys
- Google AI: https://makersuite.google.com/app/apikey
- Anthropic: https://console.anthropic.com/

### 5. Test AI Services
```bash
npm run dev
# Visit http://localhost:3000
# Click AI Assistant button (bottom-right)
# Test text, voice, and image features
```

## Offline & Low-Bandwidth Support

### SMS/USSD Fallback
For areas with no internet:
- SMS-based queries: Send text to shortcode
- USSD menu: Dial *123# for basic features
- Cached AI responses for common questions

### Offline AI Models
For complete offline support:
- TensorFlow.js models (lightweight)
- ONNX Runtime (mobile-optimized)
- Pre-trained agriculture models

**Setup**:
```bash
npm install @tensorflow/tfjs @tensorflow/tfjs-react-native
```

## Multilingual Support

### Supported Languages
1. English
2. Swahili (Kenya, Tanzania, Uganda)
3. Hausa (Nigeria, Niger)
4. Yoruba (Nigeria)
5. Amharic (Ethiopia)
6. Hindi (India)
7. Spanish (Latin America)
8. French (West Africa)
9. Portuguese (Brazil, Mozambique)

### Voice Recognition
- Browser Web Speech API (free)
- Google Cloud Speech-to-Text (premium)

### Text-to-Speech
- Browser Speech Synthesis (free)
- ElevenLabs (premium, natural voices)
- Google Cloud TTS (premium)

## Agriculture-Specific AI Training

### Custom Model Training
For better accuracy, train models on:
- Local crop varieties
- Regional pests and diseases
- Local weather patterns
- Market price data

### Data Sources
- Government agriculture databases
- Research institutions
- Farmer-submitted data
- Satellite imagery
- Weather APIs

## Cost Optimization

### Free Tier Options
- Browser Web Speech API (voice)
- Gemini Pro (free tier available)
- Cached responses for common queries

### Paid Tier Recommendations
- OpenAI GPT-4: $0.01-0.03 per request
- Google Gemini Pro: $0.00025 per image
- Anthropic Claude: $0.015 per 1K tokens

### Cost Reduction Strategies
1. Cache common queries
2. Use smaller models for simple tasks
3. Batch image processing
4. Implement rate limiting
5. Use free tiers for development

## Security & Privacy

### Data Protection
- End-to-end encryption for farmer data
- No storage of sensitive images
- GDPR/CCPA compliance
- Local processing when possible

### API Key Security
- Never commit API keys to git
- Use environment variables
- Rotate keys regularly
- Implement rate limiting

## Monitoring & Analytics

### Track AI Performance
- Response accuracy
- User satisfaction ratings
- Language usage statistics
- Feature adoption rates

### Error Handling
- Fallback to simpler models
- Graceful degradation
- User-friendly error messages
- Automatic retry logic

## Next Steps

1. ✅ Choose AI provider
2. ✅ Add API keys to `.env.local`
3. ✅ Test AI Assistant features
4. ⏳ Train custom agriculture models
5. ⏳ Implement SMS/USSD fallback
6. ⏳ Deploy to production
7. ⏳ Monitor usage and optimize

## Support

For AI integration issues:
- Check API key validity
- Verify network connectivity
- Review error logs
- Test with different providers
- Contact support team

---

**FARMAI AI System** - Empowering farmers with intelligent agriculture technology

