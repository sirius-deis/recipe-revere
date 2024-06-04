import { FC, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styles from "./SearchResultsPage.module.css";
import Loader from "../../components/loader/Loader";
import List from "../../components/list/List";
import RecipePreview from "../../components/recipePreview/RecipePreview";
import useOnScreen from "../../hooks/useOnScreen";

type FetchedDataType = {
  recipe: { url: string; label: string; image: string };
  averageRating: number;
};

const GET_RECIPES = gql`
  query GetRecipes($query: String, $page: Int) {
    getRecipes(query: $query, page: $page) {
      recipe {
        url
        label
        image
      }
      averageRating
    }
  }
`;

const SearchResultsPage: FC = () => {
  const firstFetch = useRef(true);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchedData, setFetchedData] = useState<FetchedDataType[] | []>([]);
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);
  const query = searchParams.get("query");

  const { loading, error } = useQuery(GET_RECIPES, {
    variables: {
      query,
      page: currentPage,
    },
    onCompleted: (data) => {
      firstFetch.current &&= false;

      setFetchedData((currentState) => {
        return [...currentState, ...data];
      });
    },
  });

  useEffect(() => {
    setCurrentPage((currentState) => currentState + 1);
  }, [isIntersecting]);

  if (firstFetch && loading) {
    return <Loader />;
  }

  if (error) {
    throw new Error("This feature is not supported");
  }
  return (
    <div>
      <div className={styles.heading}>
        <h1>Search Results For:</h1>
        <p>{query}</p>
      </div>
      <section className={styles.container}>
        <List direction="horizontal">
          {fetchedData.map(
            ({ recipe: { url, label, image }, averageRating }, index) => {
              return (
                <RecipePreview
                  id={url}
                  label={label}
                  image={image}
                  avgRating={averageRating}
                  btnTitle="Details"
                  key={url}
                  ref={fetchedData.length - 1 <= index ? null : ref}
                />
              );
            }
          )}
        </List>
        {!firstFetch && loading && <Loader />}
      </section>
    </div>
  );
};

export default SearchResultsPage;
