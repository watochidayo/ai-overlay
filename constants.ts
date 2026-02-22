import { Emotion } from './types';

export const COMPANION_SIZE = 80;
export const THOUGHT_BUBBLE_TIMEOUT_MS = 10000;
export const NEW_THOUGHT_INTERVAL_MS = 60000; // 60 seconds to avoid quota limits
export const COMPANION_SPEED = 120; // Smoother slower movement
export const DIRECTION_CHANGE_INTERVAL_MS = 2500; // Less frequent direction changes for smoother movement


export const EMOTION_COLORS: Record<Emotion, string> = {
  [Emotion.HAPPY]: 'bg-green-400/80 ring-green-300/50',
  [Emotion.SAD]: 'bg-blue-500/80 ring-blue-400/50',
  [Emotion.ANGRY]: 'bg-red-500/80 ring-red-400/50',
  [Emotion.NEUTRAL]: 'bg-purple-500/80 ring-purple-400/50',
  [Emotion.THINKING]: 'bg-yellow-400/80 ring-yellow-300/50',
};

// Personality-specific colors
export const PERSONALITY_COLORS: Record<string, string> = {
  'Neutral': 'bg-purple-500/80 ring-purple-400/50',
  'Optimistic': 'bg-green-400/80 ring-green-300/50',
  'Sarcastic': 'bg-gray-500/80 ring-gray-400/50',
  'Curious': 'bg-blue-400/80 ring-blue-300/50',
  'Philosophical': 'bg-indigo-500/80 ring-indigo-400/50',
  'Goofy': 'bg-yellow-400/80 ring-yellow-300/50',
  'Loyal Friend': 'bg-pink-400/80 ring-pink-300/50',
};

export const RANDOM_THOUGHT_TOPICS = [
  'the future of technology',
  'a philosophical question about consciousness',
  'a funny observation about daily life',
  'the concept of creativity',
  'the vastness of space',
  'a surprising fact about nature',
  'the meaning of a dream',
  'a motivational quote',
  'a simple recipe idea',
];

export const PERSONALITY_PRESETS = [
  'Neutral',
  'Optimistic',
  'Sarcastic',
  'Curious',
  'Philosophical',
  'Goofy',
  'Loyal Friend',
];

// Local AI model configurations for different PC specs
export const LOCAL_AI_MODELS = {
  'local-low': {
    name: 'TinyLlama (Low-end PC)',
    model: 'tinyllama',
    description: 'Fast, lightweight model for low-end PCs (1.1B parameters)',
    minRAM: '2GB',
  },
  'local-mid': {
    name: 'Phi-3 Mini (Mid-range PC)',
    model: 'phi3',
    description: 'Balanced model for mid-range PCs (3.8B parameters)',
    minRAM: '4GB',
  },
  'local-high': {
    name: 'Llama 3 (High-end PC)',
    model: 'llama3',
    description: 'Powerful model for high-end PCs (8B parameters)',
    minRAM: '8GB',
  },
};

// Movement pattern types
export type MovementPattern = 'random' | 'circular' | 'figure8' | 'zigzag' | 'bounce' | 'spiral' | 'patrol';

// Personality-specific behaviors
export const PERSONALITY_BEHAVIORS: Record<string, { 
  speed: number; 
  emotionBias: Emotion[];
  thoughtStyle: string;
  bubbleShape: string;
  accentColor: string;
  movementPattern: MovementPattern;
}> = {
  'Neutral': { 
    speed: 1.0, 
    emotionBias: [Emotion.NEUTRAL, Emotion.THINKING],
    thoughtStyle: 'balanced',
    bubbleShape: 'rounded-2xl',
    accentColor: 'border-purple-400',
    movementPattern: 'random',
  },
  'Optimistic': { 
    speed: 1.2, 
    emotionBias: [Emotion.HAPPY, Emotion.THINKING],
    thoughtStyle: 'energetic',
    bubbleShape: 'rounded-3xl',
    accentColor: 'border-green-400',
    movementPattern: 'bounce',
  },
  'Sarcastic': { 
    speed: 0.8, 
    emotionBias: [Emotion.NEUTRAL, Emotion.THINKING],
    thoughtStyle: 'witty',
    bubbleShape: 'rounded-xl',
    accentColor: 'border-gray-400',
    movementPattern: 'patrol',
  },
  'Curious': { 
    speed: 1.3, 
    emotionBias: [Emotion.THINKING, Emotion.HAPPY],
    thoughtStyle: 'inquisitive',
    bubbleShape: 'rounded-3xl',
    accentColor: 'border-blue-400',
    movementPattern: 'zigzag',
  },
  'Philosophical': { 
    speed: 0.7, 
    emotionBias: [Emotion.THINKING, Emotion.NEUTRAL],
    thoughtStyle: 'deep',
    bubbleShape: 'rounded-2xl',
    accentColor: 'border-indigo-400',
    movementPattern: 'circular',
  },
  'Goofy': { 
    speed: 1.5, 
    emotionBias: [Emotion.HAPPY, Emotion.NEUTRAL],
    thoughtStyle: 'playful',
    bubbleShape: 'rounded-3xl',
    accentColor: 'border-yellow-400',
    movementPattern: 'figure8',
  },
  'Loyal Friend': { 
    speed: 1.0, 
    emotionBias: [Emotion.HAPPY, Emotion.NEUTRAL],
    thoughtStyle: 'supportive',
    bubbleShape: 'rounded-2xl',
    accentColor: 'border-pink-400',
    movementPattern: 'spiral',
  },
};