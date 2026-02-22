import { FunctionCall, FunctionResponsePart } from "@google/genai";

export enum Emotion {
  HAPPY = 'happy',
  SAD = 'sad',
  ANGRY = 'angry',
  NEUTRAL = 'neutral',
  THINKING = 'thinking',
}

export interface Thought {
  thought: string;
  emotion: Emotion;
}

export interface Position {
  x: number;
  y: number;
}

export type AIProvider = 'gemini' | 'openai' | 'anthropic' | 'local-low' | 'local-mid' | 'local-high';

export interface Settings {
  baseColor: string;
  autoHideThought: boolean;
  personality: string;
  aiSource: AIProvider;
  soundEnabled: boolean;
  // Companion movement speed multiplier in pixels/sec. Optional to preserve backward compatibility.
  companionSpeed?: number;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'tool';
  content: string;
  functionCalls?: FunctionCall[];
  functionResponses?: FunctionResponsePart[];
}
