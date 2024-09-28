import { FC } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";

interface IMessageInfo {
  timestamp: number;
  isRead: boolean;
  [x: string]: any;
}

const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

const MessageInfo: FC<IMessageInfo> = ({ timestamp, isRead, isSend }) => {
  return (
    <div>
      <span>{formatTime(timestamp)}</span>
      <span>
        {isRead && <IoCheckmarkDoneOutline />}
        {!isRead && isSend && <IoCheckmarkOutline />}
      </span>
    </div>
  )
}

export default MessageInfo;