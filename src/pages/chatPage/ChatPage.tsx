import { useQuery } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router-dom";
import styles from './ChatPage.module.css'
import { GET_CHAT } from "../../queries/queries";
import Loader from "../../components/loader/Loader";
import MessageGroup from "../../components/messageGroup/MessageGroup";
import ErrorBox from "../../components/errorBox/ErrorBox";
import ChatInput from "../../components/chatInput/chatInput";
import { MessageProps } from "../../types/types";

const groupMessage = (messages: MessageProps[]): Array<MessageProps[]> => {
  const grouped: Array<MessageProps[]> = [];
  let groupedIndex = 0;
  for (let i = 0; i < messages.length; i++) {
    if (grouped[groupedIndex] && grouped[groupedIndex][0].sender != messages[i].sender) {
      groupedIndex++;
    }
    if (!grouped[i]) {
      grouped[i] = [];
    }
    grouped[groupedIndex].push(messages[i]);
  }
  return grouped;
}


const ChatPage: FC = () => {
  const { userId } = useParams();
  const { data, loading, error } = useQuery(GET_CHAT, { variables: { chatId: userId } });
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <ErrorBox message={error.message} />
  }

  const groupedMessages: Array<MessageProps[]> = groupMessage(data.messages);
  return <div className={styles.chat}>
    <div className={styles['status-bar']}>
      <div className={styles['img-container']}>
        <img src={data.user.picture} alt={`${data.user.name} picture`} />
      </div>
      <h1>Chat with {data.user.name}</h1>
      {data.user.lastSeen && <p>Last seen: {data.user.lastSeen}</p>}
    </div>
    <div className={styles['chat-screen']}>
      {groupedMessages.map(messagesGroup => {
        return <MessageGroup messages={messagesGroup} />;
      })}

    </div>
    <ChatInput />
  </div>
}

export default ChatPage;