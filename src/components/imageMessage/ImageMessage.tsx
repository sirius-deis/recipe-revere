import { FC } from "react";
import styles from './ImageMessage.module.css'

interface IImageMessage {
  src: string;
  desc: string;
  [x: string]: any;
}

const ImageMessage: FC<IImageMessage> = ({ src, desc }) => {
  return (
    <div className={styles['image-container']}>
      <img src={src} alt={desc} />
    </div>
  )
}

export default ImageMessage;