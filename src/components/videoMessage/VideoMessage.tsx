import { FC } from "react";

const VideoMessage: FC<{ src: string }> = ({ src }) => {
  return <div>
    <video src={src}></video>
  </div>
}

export default VideoMessage;