import { FC } from "react";
import styles from './Ingredient.module.css'

interface Ingredient {
    quantity: number,
    measure: string,
    food: string,
    weight: number,
    foodId: string,
    image: string,
    factor: number
}

const Ingredient: FC<Ingredient> = ({food, measure, quantity, weight, factor}) => {
    return <li className={styles.list}>
        <span>{food}</span>
        <span>{weight}</span>
    </li>
}

export default Ingredient;