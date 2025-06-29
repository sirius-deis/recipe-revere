import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./SavedRecipe.module.css";
import Panel from "../panel/Panel";

interface SavedRecipeProps {
  imgUrl: string;
  title: string;
  _id: string;
}

const SavedRecipe: FC<SavedRecipeProps> = ({ imgUrl, title, _id }) => {
  return (
    <Panel centered withShadow>
      <div className={styles["image-container"]}>
        <img src={imgUrl} alt={title} className={styles.img} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <Link
        to={`/recipe/${_id}`}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        Details
      </Link>
    </Panel>
  );
};

export default SavedRecipe;
