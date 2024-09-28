import { FC } from "react";
import styles from './Message.module.css'
import { MessageProps } from "../../types/types";
import MessageInfo from "../messageInfo/MessageInfo";

const Message: FC<MessageProps> = ({ message, timestamp, isRead = false }) => {
  return <div className={styles['message-container']}>
    <span className={styles.message}>{message}</span>
    <MessageInfo timestamp={timestamp} isRead={isRead} />
  </div>
}

export default Message;