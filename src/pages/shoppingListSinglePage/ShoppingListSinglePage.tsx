import { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import styles from "./ShoppingListSinglePage.module.css";
import { GET_RECIPE } from "../../queries/queries";
import Loader from "../../components/loader/Loader";
import Row from "../../components/row/Row";
import Button from "../../components/button/Button";
import List from "../../components/list/List";
import { IngredientProps } from "../../components/ingredient/Ingredient";
import CheckboxWithLabel from "../../components/checkbox/CheckboxWithLabel";

const ShoppingListSinglePage: FC = () => {
  const { recipeId } = useParams();
  const [factor, setFactor] = useState(1);
  const [servings, setServings] = useState(0);
  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { id: recipeId },
    onCompleted: (data) => {
      setServings(data.recipe.recipe.yield);
    },
  });

  const changeServings = (dir: number) => {
    if (servings === 1 && dir === -1) {
      return;
    }
    setServings((prevState) => {
      return prevState + dir;
    });
    setFactor(servings / data.recipe.yield);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    //TODO: add error handler
  }
  return (
    <div>
      <h1>data.recipe.label</h1>
      <div className={styles["image-container"]}>
        <img src={data.recipe.image} alt={`Prepared ${data.recipe.label}`} />
        <Link to={`/recipe/${recipeId}`}>
          <Button>Go to recipe</Button>
        </Link>
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
        {data.recipe.ingredients.map(
          ({ weight, food }: IngredientProps, i: number) => (
            <CheckboxWithLabel
              labelText={`${weight * factor}} of ${food}`}
              checked={data.checks[i][food]}
            />
          )
        )}
      </List>
    </div>
  );
};

export default ShoppingListSinglePage;
