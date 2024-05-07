import { FC } from "react";

interface IngredientsList {
    ingredients: Array<{
        quantity: number,
        measure: string,
        food: string,
        weight: number,
        foodId: string,
        image: string
    }>
}

const IngredientsList: FC<IngredientsList> = ({ingredients}) => {
    
    return <ul>

    </ul>
}

export default IngredientsList;