export enum types {
  text, image, audio, video
}

export interface MessageProps {
  _id?: string;
  message: string;
  sender: { _id: string, picture: string };
  timestamp: number;
  isRead?: boolean;
  type: types;
  src?: string;
}
export interface MessageGroupProps {
  messages: Array<MessageProps>;
}

export interface IMessageInfo {
  timestamp: number;
  isRead: boolean;
  [x: string]: any;
}