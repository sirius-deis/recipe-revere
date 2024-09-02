import { FC, useContext } from "react"
import styles from './messageGroup.module.css'
import Message from "../message/message";


interface MessageProps {
  _id: string;
  message: string;
  sender: any
  timestamp: string;
  isRead: boolean;
  isMine: boolean;
}
interface MessageGroupProps {
  messages: Array<MessageProps>;
}

const MessageGroup: FC<MessageGroupProps> = ({messages}) => {
  return <div className={styles['message-group']}>
    {messages.map(message => <Message key={message._id} {...message}/>)}
  </div>
}

export default MessageGroup;