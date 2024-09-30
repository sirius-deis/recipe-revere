import { FC } from "react";

const ImageMessage: FC<{ src: string, desc: string }> = ({ src, desc }) => {
  return (
    <div>
      <img src={src} alt={desc} />
    </div>
  )
}

export default ImageMessage;