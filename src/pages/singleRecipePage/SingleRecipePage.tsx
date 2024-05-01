import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_RECIPE = gql`
  query getRecipe($id: String) {
    recipe(id: $id) {
      recipe {
        url
        label
        image
        source
        dietLabels
        healthLabels
        cautions
        ingredientLines
        calories
        totalWeight
        totalTime
        cuisineType
        mealType
        dishType
      }
      reviews {
        _id
        userId
        review
        rating
      }
      averageRating
      amountOfReviews
    }
  }
`;

const SingleRecipePage: FC = () => {
  const { recipeId } = useParams();
  return <section></section>;
};

export default SingleRecipePage;
