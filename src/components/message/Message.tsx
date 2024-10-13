import { FC } from "react";
import styles from './Message.module.css'
import { MessageProps, types } from "../../types/types";
import TextMessage from "../textMessage/TextMessage";
import MessageInfo from "../messageInfo/MessageInfo";
import ImageMessage from "../imageMessage/ImageMessage";
import Panel from "../panel/Panel";
import AudioMessage from "../audioMessage/audioMessage";

const Message: FC<MessageProps> = ({ message, timestamp, isRead = false, type, src }) => {
  return <div className={styles['message-container']}>
    <Panel withBorder>
      <TextMessage message={message} />
      <MessageInfo timestamp={timestamp} isRead={isRead} />
      {type === types.image && <ImageMessage src={src} />}
      {type === types.audio && <AudioMessage src={src} />}
    </Panel>
  </div>
}

export default Message;