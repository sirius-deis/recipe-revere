import { FC } from "react";
import { BsSend } from "react-icons/bs";
import styles from './chatInput.module.css'
import InputWithLabel from "../input/InputWithLabel";
import Button from "../button/Button";

const ChatInput: FC = () => {
  return <div className={styles.chatInput}>
    <InputWithLabel
      type="text"
      placeholder="Type a message..."
      isValid={true}
      className="mb-3"
    />
    <Button type="submit" className="btn btn-primary">
      <BsSend/>
    </Button>
  </div>
};

export default ChatInput;