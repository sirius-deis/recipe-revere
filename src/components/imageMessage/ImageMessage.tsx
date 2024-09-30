import { FC } from "react";

interface IImageMessage {
  src: string;
  desc: string;
  [x: string]: any;
}

const ImageMessage: FC<IImageMessage> = ({ src, desc }) => {
  return (
    <div>
      <img src={src} alt={desc} />
    </div>
  )
}

export default ImageMessage;