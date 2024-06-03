import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "../../components/loader/Loader";
import List from "../../components/list/List";
import RecipePreview from "../../components/recipePreview/recipePreview";

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
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const query = searchParams.get("query");
  const { loading, error, data } = useQuery(GET_RECIPES, {
    variables: {
      query,
      page: currentPage,
    },
  });
  if (loading) {
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
          {data.getRecipes.map(
            ({
              recipe: { url, label, image },
              averageRating,
            }: {
              recipe: { url: string; label: string; image: string };
              averageRating: number;
            }) => (
              <RecipePreview
                id={url}
                label={label}
                image={image}
                avgRating={averageRating}
                btnTitle="Details"
              />
            )
          )}
        </List>
      </section>
    </div>
  );
};

export default SearchResultsPage;
