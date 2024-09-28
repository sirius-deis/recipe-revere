export interface MessageProps {
  _id?: string;
  message: string;
  sender: { _id: string, picture: string };
  timestamp: number;
  isRead?: boolean;
}
export interface MessageGroupProps {
  messages: Array<MessageProps>;
}

export interface IMessageInfo {
  timestamp: number;
  isRead: boolean;
  [x: string]: any;
}