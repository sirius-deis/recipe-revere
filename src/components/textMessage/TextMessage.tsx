import { FC } from "react";
import styles from './TextMessage.module.css'

const TextMessage: FC<{ message: string }> = ({ message }) => {
  return <p className={styles['text-message']}>{message}</p>
}

export default TextMessage