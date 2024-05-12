import { FC } from "react";
import Search from "../../components/search/Search";
import Accordion from "../../components/accordion/Accordion";
import RangeSlider from "../../components/rangeSlider/RangeSlider";

const SearchPage: FC = () => {
  return (
    <div>
      <h1>Search</h1>
      <Search placeholderText="Ex.: Veggie Burger" />
      <h2>Filter by</h2>
      <Accordion title="Categories"></Accordion>
      <Accordion title="Diet"></Accordion>
      <Accordion title="Meal Type"></Accordion>
      <Accordion title="Calories">
        <RangeSlider min={1} max={900} onChange={() => {}} />
      </Accordion>
    </div>
  );
};

export default SearchPage;
