import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import RecipePreview from "../recipePreview/recipePreview";

const RECIPE_OF_THE_DAY = gql`
  query GetRecipe($tags: [String]) {
    getRecipe(tags: $tags) {
      recipe {
        url
        label
        image
        dietLabels
        healthLabels
        totalTime
      }
      averageRating
    }
  }
`;

const RecipeOfTheDay: FC = () => {
  const { loading, error, data } = useQuery(RECIPE_OF_THE_DAY, {
    variables: {
      tags: "RECIPE OF THE DAY",
    },
  });
  if (loading) {
    return <Loader />;
  }
  if (error) {
    //TODO: add error img
  }
  return (
    <RecipePreview
      id={data.recipe.url}
      label={data?.recipe.label}
      image={data?.recipe.image}
      avgRating={data?.averageRating}
      dietLabels={data?.recipe.dietLabels}
      btnTitle="Cook now"
    />
  );
};

export default RecipeOfTheDay;
