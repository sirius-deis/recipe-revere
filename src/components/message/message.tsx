import { FC } from "react";

interface MessageProps {
  sender: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  onClick?: () => void;
}

const Message:FC<MessageProps> = () => {
  return <div></div>
}

export default Message;