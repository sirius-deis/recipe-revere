import { FC, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { AudioVisualizer } from 'react-audio-visualize';
import Button from "../button/Button";
import fetchData from "../../utils/fetchData";
import useFetch from "../../hooks/useFetch";

interface IAudioMessage {
  src: string;
  [x: string]: any;
}

const AudioMessage: FC<IAudioMessage> = ({ src }) => {
  const [isListening, setIsListening] = useState(false);
  const visualizerRef = useRef<HTMLCanvasElement>(null);
  const [audioMessage, isLoading, error] = useFetch(src, {}, "blob");

  const blobUrl = URL.createObjectURL(audioMessage);
  const audio = new Audio(blobUrl)


  const toggleAudio = () => {
    setIsListening((prevState) => !prevState);
    if (isListening) {
      audio.play();
    }
    else {
      audio.pause();
    }
  };

  return <div>
    <Button size="sm" rounded onClick={toggleAudio}>
      {isListening ? <FaPlay /> : <FaPause />}
    </Button>
    {
      src && <AudioVisualizer ref={visualizerRef} blob={audioMessage} width={500} height={75} barWidth={1} gap={0} />
    }
  </div>
}

export default AudioMessage;