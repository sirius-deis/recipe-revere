import { useQuery } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { GET_MESSAGES } from "../../queries/queries";
import Loader from "../../components/loader/Loader";
import MessageGroup from "../../components/messageGroup/messageGroup";
import ErrorBox from "../../components/errorBox/ErrorBox";


interface MessageProps {
    _id: string;
  message: string;
  sender: any
  timestamp: string;
  isRead: boolean;
  isMine: boolean;
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

  const groupedMessages: MessageProps[] = []
  return <div>
    <div>
      <MessageGroup messages={groupedMessages} />
    </div>
  </div>
}

export default ChatPage;