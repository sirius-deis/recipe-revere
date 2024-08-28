import { FC } from "react";
import styles from './message.module.css'

interface MessageProps {
  sender: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  isMine?: boolean;
  onClick?: () => void;
}

const Message:FC<MessageProps> = ({sender, message, timestamp, isMine}) => {
  return <div className={styles['message-container']}>
      {!isMine && <span className={styles.sender}>(sender)</span>}
      <span className={styles.message}>{message}</span>
      <span className={styles.time}>{timestamp}</span>
  </div>
}

export default Message;