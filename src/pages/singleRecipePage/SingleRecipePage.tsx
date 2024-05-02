import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Row from "../../components/row/Row";

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
        ingredients {
          text
          quantity
          measure
          food
          weight
          foodId
        }
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
  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { id: recipeId },
  });
  return (
    <section>
      <h1>{data.label}</h1>
      <Row>
        <div>{data.totalTime}</div>
        <div></div>
        <div></div>
      </Row>
    </section>
  );
};

export default SingleRecipePage;
