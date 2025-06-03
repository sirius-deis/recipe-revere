import { useQuery } from "@apollo/client";
import { FC } from "react";
import { GET_RECIPES } from "../../queries/queries";
import ColumnList from "../columnList/columnList";
import Loader from "../loader/Loader";
import ErrorBox from "../errorBox/ErrorBox";

interface RecipeListProps {
  colN?: number;
  query?: string;
  page?: number;
  tags?: string[]
}

const RecipeList: FC<RecipeListProps> = ({ colN = 1, query, page = 1, tags }) => {
  const { data, loading, error } = useQuery(GET_RECIPES, {
    variables: { query, page, tags }
  })

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return <section>
    <ColumnList items={data?.getRecipes} numberOfColumns={colN} />
  </section>
}

export default RecipeList;