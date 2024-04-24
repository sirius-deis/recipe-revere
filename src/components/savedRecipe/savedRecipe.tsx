import { FC } from "react";
import styles from "./savedRecipe.module.css";

interface SavedRecipeProps {
  imgUrl: string;
  title: string;
  url: string;
}

const SavedRecipe: FC<SavedRecipeProps> = ({ imgUrl, title, url }) => {
  return <article className={}></article>;
};

export default SavedRecipe;
