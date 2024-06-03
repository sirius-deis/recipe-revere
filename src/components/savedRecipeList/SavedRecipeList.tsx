import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import SavedRecipe from "../savedRecipe/SavedRecipe";
import List from "../list/List";

const GET_SAVED_RECIPES = gql`
  query getSavedRecipes {
    recipes {
      url: String
      label: String
      image: String
    }
  }
`;

const SavedRecipeList: FC = () => {
  const { loading, error, data } = useQuery(GET_SAVED_RECIPES);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    throw new Error("This feature is not supported");
  }
  return (
    <section>
      <List direction="horizontal">
        {data.recipes.map(
          (recipe: { url: string; label: string; image: string }) => (
            <SavedRecipe
              key={recipe.url}
              imgUrl={recipe.image}
              title={recipe.label}
              id={recipe.url}
            />
          )
        )}
      </List>
    </section>
  );
};

export default SavedRecipeList;
