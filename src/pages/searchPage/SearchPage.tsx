import { FC } from "react";
import Search from "../../components/search/Search";
import Accordion from "../../components/accordion/Accordion";

const SearchPage: FC = () => {
  return (
    <div>
      <h1>Search</h1>
      <Search placeholderText="Ex.: Veggie Burger" />
      <h2>Filter by</h2>
      <Accordion title="Categories"></Accordion>
      <Accordion title="Diet"></Accordion>
      <Accordion title="Meal Type"></Accordion>
    </div>
  );
};

export default SearchPage;
