import { FC } from "react";
import styles from "./Ingredient.module.css";

interface Ingredient {
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodId: string;
  image: string;
  factor: number;
}

const Ingredient: FC<Ingredient> = ({
  food,
  measure,
  quantity,
  weight,
  factor,
}) => {
  return (
    <div className={styles.ingredient}>
      <span>{food}</span>
      <span>{weight * factor}</span>
    </div>
  );
};

export default Ingredient;
