import { FC } from "react";
import { useParams } from "react-router-dom";

const SingleRecipePage: FC = () => {
  const { recipeId } = useParams();
  return <section></section>;
};

export default SingleRecipePage;
