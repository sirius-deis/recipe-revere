import { FC } from "react";

const TextMessage: FC<{ message: string }> = ({ message }) => {
  return <p>{message}</p>
}

export default TextMessage