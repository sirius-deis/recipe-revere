import { FC } from "react";

interface RecipeListProps {
  colN?: number;
  query?: string;
  page?: number;
  tags?: string[]
}

const RecipeList: FC<RecipeListProps> = ({ colN = 1, query, page = 1, tags }) => {
  return <section></section>
}

export default RecipeList;