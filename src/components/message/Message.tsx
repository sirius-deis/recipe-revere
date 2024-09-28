import { FC } from "react";
import styles from './Message.module.css'
import { MessageProps } from "../../types/types";

const formatTime = (timestamp: number) => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

const Message: FC<MessageProps> = ({ sender, message, timestamp }) => {
  return <div className={styles['message-container']}>
    <span className={styles.message}>{message}</span>
    <span className={styles.time}>{formatTime(timestamp)}</span>
  </div>
}

export default Message;