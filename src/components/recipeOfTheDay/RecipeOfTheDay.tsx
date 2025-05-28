import { FC } from "react";
import { useQuery } from "@apollo/client";
import Loader from "../loader/Loader";
import RecipePreview from "../recipePreview/RecipePreview";
import { RECIPE_OF_THE_DAY } from "../../queries/queries";

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
    <>
      {
        data ? <RecipePreview
          id={data.recipe.url}
          label={data?.recipe.label}
          image={data?.recipe.image}
          avgRating={data?.averageRating}
          dietLabels={data?.recipe.dietLabels}
          btnTitle="Cook now"
        /> : <div>Something went wrong</div>
      }
    </>
  );
};

export default RecipeOfTheDay;
