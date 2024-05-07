import { FC } from "react";
import styles from './IngredientsList.module.css'
import Ingredient from "../ingredient/Ingredient";

interface IngredientsList {
    ingredients: Array<{
        quantity: number,
        measure: string,
        food: string,
        weight: number,
        foodId: string,
        image: string
    }>
    factor: number
}

const IngredientsList: FC<IngredientsList> = ({ingredients, factor}) => {
    
    return <ul className={styles.list}>
        {ingredients.map(ingredient => <Ingredient {...ingredient} factor={factor}/>)}
    </ul>
}

export default IngredientsList;