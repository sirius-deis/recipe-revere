import { useQuery } from "@apollo/client";
import { FC } from "react";
import { GET_RECIPES } from "../../queries/queries";
import ColumnList from "../columnList/columnList";
import Loader from "../loader/Loader";
import ErrorBox from "../errorBox/ErrorBox";
import RecipePreview from "../recipePreview/RecipePreview";

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

  const dataToRender = data?.getRecipes.map((item: any) => <RecipePreview {...item}></RecipePreview>)

  return <section>
    <ColumnList items={dataToRender} numberOfColumns={colN} />
  </section>
}

export default RecipeList;