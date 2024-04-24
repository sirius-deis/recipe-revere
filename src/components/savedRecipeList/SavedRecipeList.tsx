import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import Loader from "../loader/Loader";

const GET_SAVED_RECIPES = gql`
  query getSavedRecipes {
    recipes {
      url: String!
      label: String
      image: String
    }
  }
`;

const SavedRecipeList: FC = () => {
  const { loading, error, data } = useQuery(GET_SAVED_RECIPES);
  return <section></section>;
};

export default SavedRecipeList;
