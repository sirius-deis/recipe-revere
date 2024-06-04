import { gql, useQuery } from "@apollo/client";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./ShopListPage.module.css";
import Loader from "../../components/loader/Loader";
import List from "../../components/list/List";
import RecipePreview from "../../components/recipePreview/RecipePreview";
import useOnScreen from "../../hooks/useOnScreen";

const GET_SHOPPING_LIST = gql`
  query GetShoppingList($page: Int) {
    getShoppingList(page: $page) {
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
  const firstFetch = useRef(true);
  const [currentPage, setCurrentPage] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);
  const [recipes, setRecipes] = useState<Recipe[] | []>([]);
  const { loading, error } = useQuery(GET_SHOPPING_LIST, {
    variables: { page: currentPage },
    onCompleted(data) {
      firstFetch.current &&= false;

      setRecipes((currentState) => {
        return [...currentState, ...data];
      });
    },
  });
  if (firstFetch && loading) {
    return <Loader />;
  }

  useEffect(() => {
    setCurrentPage((currentState) => currentState + 1);
  }, [isIntersecting]);

  return (
    <div>
      <div className={styles.heading}>
        <h1>Shopping list</h1>
      </div>
      <section className={styles.container}>
        <List direction="horizontal">
          {recipes.map(({ url, label, image }) => {
            return (
              <RecipePreview
                ref={ref}
                key={url}
                btnTitle="&#8250;"
                image={image}
                id={url}
                label={label}
                withHeart={false}
                direction="horizontal"
              ></RecipePreview>
            );
          })}
        </List>
        {!firstFetch && loading && <Loader />}
      </section>
    </div>
  );
};

export default ShopListPage;
