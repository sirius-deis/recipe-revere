import { gql, useQuery } from "@apollo/client";
import { FC, useState } from "react";
import Loader from "../../components/loader/Loader";

const GET_SHOPPING_LIST = gql`
  query GetShoppingList {
    getShoppingList {
      recipe {
        url
        label
        image
      }
    }
  }
`;

type Recipe = {
  url: string;
  label: string;
  image: string;
};

const ShopListPage: FC = () => {
  const [recipes, setRecipes] = useState<Recipe[] | []>([]);
  const { loading, error } = useQuery(GET_SHOPPING_LIST, {
    onCompleted(data) {
      setRecipes((currentState) => {
        return [...currentState, ...data];
      });
    },
  });
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h1>Shopping list</h1>
    </div>
  );
};

export default ShopListPage;
