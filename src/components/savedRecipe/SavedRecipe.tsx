import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./SavedRecipe.module.css";

interface SavedRecipeProps {
  imgUrl: string;
  title: string;
  url: string;
}

const SavedRecipe: FC<SavedRecipeProps> = ({ imgUrl, title, url }) => {
  return (
    <article className={styles.container}>
      <div className={styles["image-container"]}>
        <img src={imgUrl} alt={title} className={styles.img} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <Link to={url} target="_blank" rel="noreferrer" className={styles.link}>
        Details
      </Link>
    </article>
  );
};

export default SavedRecipe;
