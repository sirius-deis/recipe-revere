import { FC, useContext } from "react"
import styles from './messageGroup.module.css'
import Message from "../message/message";
import { UserContext } from "../../store/userContext";


interface MessageProps {
  _id: string;
  message: string;
  sender: {_id: string};
  timestamp: string;
  isRead: boolean;
}
interface MessageGroupProps {
  messages: Array<MessageProps>;
}

const MessageGroup: FC<MessageGroupProps> = ({messages}) => {
  const { user } = useContext(UserContext);
  return <div className={`${styles['message-group']} ${messages[0].sender._id === user?._id ? styles.mine : ''}`}>
    {messages.map(message => <Message key={message._id} {...message}/>)}
  </div>
}

export default MessageGroup;