import { FC } from "react";
import { useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import SavedRecipe from "../savedRecipe/SavedRecipe";
import List from "../list/List";
import { GET_SAVED_RECIPES } from "../../queries/queries";
import ErrorBox from "../errorBox/ErrorBox";

const SavedRecipeList = () => {
  const { loading, error, data } = useQuery(GET_SAVED_RECIPES);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorBox message={error.message} />;
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
              _id={recipe.url}
            />
          )
        )}
      </List>
    </section>
  );
};

export default SavedRecipeList;
