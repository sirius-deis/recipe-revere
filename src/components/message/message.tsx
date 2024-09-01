import { FC } from "react";
import styles from './message.module.css'

interface MessageProps {
  sender: any;
  message: string;
  timestamp: string;
  isRead?: boolean;
  onClick?: () => void;
}

const Message:FC<MessageProps> = ({sender, message, timestamp}) => {
  return <div className={styles['message-container']}>
      <span className={styles.message}>{message}</span>
      <span className={styles.time}>{timestamp}</span>
  </div>
}

export default Message;