import { FC, useContext } from "react"
import styles from './MessageGroup.module.css'
import Message from "../message/Message";
import { UserContext } from "../../store/userContext";
import { MessageGroupProps } from "../../types/types";


const MessageGroup: FC<MessageGroupProps> = ({ messages }) => {
  const { user } = useContext(UserContext);
  return <div className={`${styles['message-group']} ${messages[0].sender._id === user?._id ? styles.mine : ''}`}>
    {messages.map(message => <Message key={message._id} {...message} />)}
  </div>
}

export default MessageGroup;