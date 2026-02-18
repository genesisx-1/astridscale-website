
import { ReactNode } from 'react';

export type Page = 'home' | 'voice-receptionist' | 'lead-generation' | 'text-messaging' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  slug: Page;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
