import { FC, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { AudioVisualizer } from 'react-audio-visualize';
import Button from "../button/Button";

interface IAudioMessage {
  src: string;
  [x: string]: any;
}

const AudioMessage: FC<IAudioMessage> = ({ src }) => {
  const [isListening, setIsListening] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);
  const visualizerRef = useRef<HTMLCanvasElement>(null);


  const toggleAudio = () => {
    setIsListening((prevState) => !prevState);
    if (isListening) {
      ref.current?.play();
    }
    else {
      ref.current?.pause();
    }
  };

  return <div>
    <audio src={src} ref={ref}></audio>
    <Button size="sm" rounded onClick={toggleAudio}>
      {isListening ? <FaPlay /> : <FaPause />}
    </Button>
    {
      src && <AudioVisualizer ref={visualizerRef} blob={null} width={500} height={75} barWidth={1} gap={0} />
    }
  </div>
}

export default AudioMessage;