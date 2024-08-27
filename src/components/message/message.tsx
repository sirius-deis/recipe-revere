import { FC } from "react";

interface MessageProps {
  sender: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  isMine?: boolean;
  onClick?: () => void;
}

const Message:FC<MessageProps> = ({sender, message, timestamp, isMine}) => {
  return <div className="">
    <div className="">
      {!isMine && <span className="">(sender)</span>}
      <span className="">{message}</span>
      <span className="">{timestamp}</span>
    </div>
  </div>
}

export default Message;