import { FC, ReactNode } from "react";
import {
  FaLeaf,
  FaSeedling,
  FaIceCream,
  FaCookieBite,
  FaScaleBalanced,
  FaBottleWater,
  FaThermometer,
  FaCompress,
  FaSourcetree,
  FaPizzaSlice,
} from "react-icons/fa6";
import { PiCookingPotFill } from "react-icons/pi";
import { GiChickenLeg, GiAppleSeeds } from "react-icons/gi";
import {
  MdBreakfastDining,
  MdDinnerDining,
  MdLunchDining,
  MdCoffee,
} from "react-icons/md";
import Search from "../../components/search/Search";
import Accordion from "../../components/accordion/Accordion";
import RangeSlider from "../../components/rangeSlider/RangeSlider";
import CartGroup from "../../components/cartGroup/CartGroup";

interface Cart {
  title: string;
  icon: ReactNode;
}

const categories: Cart[] = [
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

const diet: Cart[] = [
  { title: "Balanced", icon: <FaScaleBalanced /> },
  { title: "Hight Fiber", icon: <GiAppleSeeds /> },
  { title: "Hight protein", icon: <FaBottleWater /> },
  {
    title: "Low carb",
    icon: <FaSourcetree />,
  },
  { title: "Low fat", icon: <FaThermometer /> },
  { title: "Low sodium", icon: <FaCompress /> },
];

const mealType: Cart[] = [
  {
    title: "Breakfast",
    icon: <MdBreakfastDining />,
  },
  {
    title: "Dinner",
    icon: <MdDinnerDining />,
  },
  {
    title: "Lunch",
    icon: <MdLunchDining />,
  },
  {
    title: "Snack",
    icon: <FaPizzaSlice />,
  },
  {
    title: "Tea time",
    icon: <MdCoffee />,
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
      <Accordion title="Diet">
        <CartGroup carts={diet} />
      </Accordion>
      <Accordion title="Meal Type">
        <CartGroup carts={mealType} />
      </Accordion>
      <Accordion title="Calories">
        <RangeSlider min={1} max={900} onChange={() => {}} />
      </Accordion>
    </div>
  );
};

export default SearchPage;
