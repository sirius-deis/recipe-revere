import { FC, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
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
  return (
    <div>
      <div>
        <h1>Search Results For:</h1>
        <p>{query}</p>
      </div>
      <section>
        <List>
          {fetchedData.map(
            ({ recipe: { url, label, image }, averageRating }, index) => {
              if (fetchedData.length - 1 <= index) {
                return (
                  <RecipePreview
                    id={url}
                    label={label}
                    image={image}
                    avgRating={averageRating}
                    btnTitle="Details"
                  />
                );
              }
              return (
                <RecipePreview
                  ref={ref}
                  id={url}
                  label={label}
                  image={image}
                  avgRating={averageRating}
                  btnTitle="Details"
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
