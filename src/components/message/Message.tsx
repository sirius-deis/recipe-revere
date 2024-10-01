import { FC } from "react";
import styles from './Message.module.css'
import { MessageProps, types } from "../../types/types";
import TextMessage from "../textMessage/TextMessage";
import MessageInfo from "../messageInfo/MessageInfo";

const Message: FC<MessageProps> = ({ message, timestamp, isRead = false, type, src }) => {
  return <div className={styles['message-container']}>
    <TextMessage message={message} />
    <MessageInfo timestamp={timestamp} isRead={isRead} />
  </div>
}

export default Message;