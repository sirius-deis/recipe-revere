import { FC } from "react";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import Button from "../button/Button";

interface IAudioMessage {
  src: string;
  [x: string]: any;
}

const AudioMessage: FC<IAudioMessage> = ({ src }) => {
  return <div>
    <audio src=""></audio>
    <Button size="sm" rounded>
      <FaPlay />
    </Button>
  </div>
}

export default AudioMessage;