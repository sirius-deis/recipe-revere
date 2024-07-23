import { FC, useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styles from "./SingleRecipePage.module.css";
import Row from "../../components/row/Row";
import Loader from "../../components/loader/Loader";
import Button from "../../components/button/Button";
import Ingredient, {
  IngredientProps,
} from "../../components/ingredient/Ingredient";
import List from "../../components/list/List";
import { GET_RECIPE } from "../../queries/queries";

const SingleRecipePage: FC = () => {
  const { recipeId } = useParams();
  const [factor, setFactor] = useState(1);
  const [servings, setServings] = useState(0);
  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { id: recipeId },
    onCompleted: (data) => {
      setServings(data.recipe.recipe.yield);
    },
  });
  if (loading) {
    return <Loader />;
  }

  if (error) {
    //TODO: add error handler
  }

  const changeServings = (dir: number) => {
    if (servings === 1 && dir === -1) {
      return;
    }
    setServings((prevState) => {
      return prevState + dir;
    });
    setFactor(servings / data.recipe.yield);
  };

  return (
    <section>
      <h1>{data.recipe.label}</h1>
      <Row>
        <div>{data.recipe.totalTime}</div>
        <div></div>
        <div>{data.recipe.yield}</div>
      </Row>
      <div className={styles["image-container"]}>
        <img src={data.recipe.image} alt={`Prepared ${data.recipe.label}`} />
      </div>
      <Row>
        <h2>Ingredients</h2>
        <div>
          {servings} servings
          <Button onClick={() => changeServings(+1)} size="sm">
            +
          </Button>
          <Button onClick={() => changeServings(-1)} size="sm">
            -
          </Button>
        </div>
      </Row>
      <List>
        {data.recipe.ingredients.map((ingredient: IngredientProps) => (
          <Ingredient {...ingredient} factor={factor} />
        ))}
      </List>
    </section>
  );
};

export default SingleRecipePage;
