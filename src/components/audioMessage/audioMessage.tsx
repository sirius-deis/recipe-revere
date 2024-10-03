import { FC, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import Button from "../button/Button";

interface IAudioMessage {
  src: string;
  [x: string]: any;
}

const AudioMessage: FC<IAudioMessage> = ({ src }) => {
  const [isListening, setIsListening] = useState(false);

  return <div>
    <audio src={src}></audio>
    <Button size="sm" rounded onClick={() => setIsListening(!isListening)}>
      {isListening ? <FaPlay /> : <FaPause />}
    </Button>
  </div>
}

export default AudioMessage;