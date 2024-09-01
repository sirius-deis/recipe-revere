import { FC, useContext } from "react"
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
  sender: string;
}

const MessageGroup: FC<MessageGroupProps> = ({messages, sender}) => {
  return <div>
    {messages.map(message => <Message key={message._id} {...message}/>)}
  </div>
}

export default MessageGroup;