import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_RECIPES = gql`
  query GetRecipes($query: String, $page: Int) {
    getRecipes(query: $query, page: $page) {
      recipe {
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
  const { loading, error, data } = useQuery(GET_RECIPES, {
    variables: {
      query: searchParams.get("query"),
      page: currentPage,
    },
  });
  console.log(searchParams.get("query"));
  return (
    <div>
      <div>
        <h1>Search Results For:</h1>
      </div>
    </div>
  );
};

export default SearchResultsPage;
