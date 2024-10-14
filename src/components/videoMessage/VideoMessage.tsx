import { FC } from "react";

const VideoMessage: FC<{ src: string }> = ({ src }) => {
  return <div>
    <video src={src} data-testid="video"></video>
  </div>
}

export default VideoMessage;