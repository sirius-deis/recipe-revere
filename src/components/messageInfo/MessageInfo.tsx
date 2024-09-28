import { FC } from "react";
import styles from './MessageInfo.module.css'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IMessageInfo } from "../../types/types";

const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

const MessageInfo: FC<IMessageInfo> = ({ timestamp, isRead, isSend }) => {
  return (
    <div className={styles['message-info']}>
      <span className={styles.timestamp}>{formatTime(timestamp)}</span>
      <span className={styles['read-status']}>
        {isRead && <IoCheckmarkDoneOutline data-testid="read-icon" />}
        {!isRead && isSend && <IoCheckmarkOutline data-testid="send-icon" />}
      </span>
    </div>
  )
}

export default MessageInfo;