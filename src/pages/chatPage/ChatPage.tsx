import { useQuery } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router-dom";
import styles from './ChatPage.module.css'
import { GET_MESSAGES } from "../../queries/queries";
import Loader from "../../components/loader/Loader";
import MessageGroup from "../../components/messageGroup/messageGroup";
import ErrorBox from "../../components/errorBox/ErrorBox";
import ChatInput from "../../components/chatInput/chatInput";

interface MessageProps {
  _id: string;
message: string;
sender: any
timestamp: string;
isRead: boolean;
}

const groupMessage = (messages: MessageProps[]): Array<MessageProps[]> => {
  const grouped: Array<MessageProps[]> = [];
  let groupedIndex = 0;
  for(let i = 0; i < messages.length; i++) {
    if(grouped[groupedIndex] && grouped[groupedIndex][0].sender != messages[i].sender) {
      groupedIndex++;
    }
    if(!grouped[i]) {
      grouped[i] = [];
    }
    grouped[groupedIndex].push(messages[i]);
  }
  return grouped;
}


const ChatPage: FC = () => {
  const {userId} = useParams();
  const {data, loading, error} = useQuery(GET_MESSAGES, {variables: {userId}});
  if(loading) {
    return <Loader/>
  }
  if(error) {
    return <ErrorBox message={error.message}/>
  }

  const groupedMessages: Array<MessageProps[]> = groupMessage(data.messages);
  return <div className={styles.chat}>
    <div className={styles['chat-screen']}>
      {groupedMessages.map(messagesGroup => {
        return <MessageGroup messages={messagesGroup} />;
      })}
      
    </div>
    <ChatInput/>
  </div>
}

export default ChatPage;