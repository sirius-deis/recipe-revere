import { FC } from "react";
import { useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import RecipePreview from "../recipePreview/RecipePreview";
import { RECIPE_OF_THE_DAY } from "../../queries/queries";

const RecipeOfTheDay: FC = () => {
  const { loading, error, data } = useQuery(RECIPE_OF_THE_DAY, {
    variables: {
      tags: "RECIPE_OF_THE_DAY",
    },
  });
  if (loading) {
    return <Loader />;
  }
  if (error) {
    //TODO: add error img
  }
  const { getRecipe } = data;
  return (
    <>
      {
        data ? <RecipePreview
          id={getRecipe.recipe.url}
          label={getRecipe?.recipe.label}
          image={getRecipe?.recipe.image}
          avgRating={getRecipe?.averageRating}
          dietLabels={getRecipe?.recipe.dietLabels}
          btnTitle="Cook now"
        /> : <div>Something went wrong</div>
      }
    </>
  );
};

export default RecipeOfTheDay;
