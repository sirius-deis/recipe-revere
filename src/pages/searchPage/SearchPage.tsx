import { FC } from "react";
import Search from "../../components/search/Search";

const SearchPage: FC = () => {
  return <div>
    <h1>Search</h1>
    <Search placeholderText="Ex.: Veggie Burger"/>
    <h2>Filter by</h2>
  </div>;
};

export default SearchPage;
