
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
