import { FC, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styles from './SingleRecipePage.module.css'
import Row from "../../components/row/Row";
import Loader from "../../components/loader/Loader";
import Button from "../../components/button/Button";
import IngredientsList from "../../components/ingredientsList/IngredientsList";

const GET_RECIPE = gql`
  query getRecipe($id: String) {
    recipe(id: $id) {
      recipe {
        url
        label
        image
        source
        yield
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
  const [factor, setFactor] = useState(1)
  const [servings, setServings] = useState(0)
  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { id: recipeId },
    onCompleted: (data) => {
      setServings(data.recipe.recipe.yield)
    },
  });
  if(loading) {
    return <Loader />;
  }

  const changeServings = (dir: number) => {
    if(servings === 1 && dir === -1) {
      return;
    }
    setServings((prevState) => {
      return prevState + dir;
    })
    setFactor(servings / data.recipe.recipe.yield)
  }

  return (
    <section>
      <h1>{data.label}</h1>
      <Row>
        <div>{data.totalTime}</div>
        <div></div>
        <div>{data.recipe.yield}</div>
      </Row>
      <div className={styles['image-container']}>
        <img src={data.recipe.image} alt={`Prepared ${data.recipe.label}`} />
      </div>
      <Row>
        <h2>Ingredients</h2>
        <div>
          {servings} servings
          <Button clickHandler={() => changeServings(+1)}>+</Button>
          <Button clickHandler={() => changeServings(-1)}>-</Button>
        </div>
      </Row>
      <IngredientsList ingredients={data.recipe.ingredients} factor={factor} />
    </section>
  );
};

export default SingleRecipePage;
