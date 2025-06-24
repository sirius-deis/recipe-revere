import { FC } from "react";
import { useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import RecipePreview from "../recipePreview/RecipePreview";
import { RECIPE_OF_THE_DAY } from "../../queries/queries";
import ErrorBox from "../errorBox/ErrorBox";

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
    return <ErrorBox message={error.message} />;
  }
  if (!data) {
    return <div>Something went wrong</div>
  }
  const { getRecipe } = data;
  return (
    <>
      <RecipePreview
        recipe={{
          id: getRecipe?.recipe.url, label: getRecipe?.recipe.label,
          image: getRecipe?.recipe.image, dietLabels: getRecipe?.recipe.dietLabels
        }}

        avgRating={getRecipe?.averageRating}
        btnTitle="Cook now"
      />
    </>
  );
};

export default RecipeOfTheDay;
