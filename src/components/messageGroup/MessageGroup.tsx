import { FC, useContext } from "react"
import { Link } from "react-router-dom";
import styles from './MessageGroup.module.css'
import Message from "../message/Message";
import { UserContext } from "../../store/userContext";
import { MessageGroupProps } from "../../types/types";

const MessageGroup: FC<MessageGroupProps> = ({ messages }) => {
  const { user } = useContext(UserContext);
  const sender = messages[0].sender
  const isOwn = sender._id === user?._id;
  return <div>
    <div className={`${styles['message-group']} ${isOwn ? styles.mine : ''}`}>
      {messages.map(message => <Message key={message._id} {...message} />)}
    </div>
    <Link to={`users/${sender._id}}`} className={`${!isOwn ? 'user-picture' : 'hidden'}`}>
      <img src={sender.picture} alt={`user with id ${sender._id}`} />
    </Link>
  </div>
}

export default MessageGroup;