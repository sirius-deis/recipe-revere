export interface MessageProps {
  _id?: string;
  message: string;
  sender: {_id: string};
  timestamp: string;
  isRead?: boolean;
}
export interface MessageGroupProps {
  messages: Array<MessageProps>;
}