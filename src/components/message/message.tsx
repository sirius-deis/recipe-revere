import { FC } from "react";
import styles from './message.module.css'
import { MessageProps } from "../../types/types";

const Message:FC<MessageProps> = ({sender, message, timestamp}) => {
  return <div className={styles['message-container']}>
      <span className={styles.message}>{message}</span>
      <span className={styles.time}>{timestamp}</span>
  </div>
}

export default Message;