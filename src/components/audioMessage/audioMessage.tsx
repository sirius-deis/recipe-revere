import { FC, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { AudioVisualizer } from 'react-audio-visualize';
import { FaDownload, FaStop } from "react-icons/fa6";
import Button from "../button/Button";
import useFetch from "../../hooks/useFetch";

interface IAudioMessage {
  src: string;
  [x: string]: any;
}

const AudioMessage: FC<IAudioMessage> = ({ src }) => {
  const [isListening, setIsListening] = useState(false);
  const visualizerRef = useRef<HTMLCanvasElement>(null);
  const [audioMessage, isLoading, error, abort] = useFetch(src, {}, "blob");

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

  const downloadAudio = () => {
    if (isLoading) {
      abort();
    }
  }

  return <div>
    {
      !audioMessage && <Button size="sm" rounded onClick={downloadAudio}>
        {!isLoading ? <FaDownload /> : <FaStop />}
      </Button>
    }
    {
      audioMessage && <Button size="sm" rounded onClick={toggleAudio}>
        {isListening ? <FaPlay /> : <FaPause />}
      </Button>
    }
    {
      src && <AudioVisualizer ref={visualizerRef} blob={audioMessage} width={500} height={75} barWidth={1} gap={0} />
    }
  </div>
}

export default AudioMessage;