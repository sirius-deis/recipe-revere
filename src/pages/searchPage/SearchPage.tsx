import { FC, ReactNode } from "react";
import { FaLeaf, FaSeedling, FaIceCream, FaCookieBite } from "react-icons/fa6";
import { PiCookingPotFill } from "react-icons/pi";
import { GiChickenLeg } from "react-icons/gi";
import Search from "../../components/search/Search";
import Accordion from "../../components/accordion/Accordion";
import RangeSlider from "../../components/rangeSlider/RangeSlider";
import CartGroup from "../../components/cartGroup/CartGroup";

const categories: { title: string; icon: ReactNode }[] = [
  {
    title: "Vegetarian",
    icon: <FaLeaf />,
  },
  {
    title: "Vegan",
    icon: <FaSeedling />,
  },
  {
    title: "One-pot meals",
    icon: <PiCookingPotFill />,
  },
  {
    title: "Snacks",
    icon: <FaIceCream />,
  },
  {
    title: "Desserts",
    icon: <FaCookieBite />,
  },
  {
    title: "Meat",
    icon: <GiChickenLeg />,
  },
];

const SearchPage: FC = () => {
  return (
    <div>
      <h1>Search</h1>
      <Search placeholderText="Ex.: Veggie Burger" />
      <h2>Filter by</h2>
      <Accordion title="Categories">
        <CartGroup carts={categories} />
      </Accordion>
      <Accordion title="Diet"></Accordion>
      <Accordion title="Meal Type"></Accordion>
      <Accordion title="Calories">
        <RangeSlider min={1} max={900} onChange={() => {}} />
      </Accordion>
    </div>
  );
};

export default SearchPage;
