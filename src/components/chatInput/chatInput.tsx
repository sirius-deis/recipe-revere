import { FC, useState } from "react";
import { BsSend } from "react-icons/bs";
import styles from './chatInput.module.css'
import InputWithLabel from "../input/InputWithLabel";
import Button from "../button/Button";

const ChatInput: FC = () => {
  const [message, setMessage] = useState('');
  return <div className={styles.chatInput}>
    <InputWithLabel
      type="text"
      placeholder="Type a message..."
      isValid={true}
      className="mb-3"
      value={message}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setMessage(e.target.value)
      }
    />
    <Button type="submit" className="btn btn-primary">
      <BsSend/>
    </Button>
  </div>
};

export default ChatInput;