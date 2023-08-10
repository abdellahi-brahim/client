export interface IMessage {
  content: string;
  type: 'user' | 'bot';
  timestamp: string;
}  