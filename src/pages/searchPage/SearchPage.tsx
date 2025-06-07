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
import CartList from "../../components/cartList/CartList";

interface Cart {
  title: string;
  icon: ReactNode;
  url: string;
}

const categories: Cart[] = [
  {
    title: "Vegetarian",
    icon: <FaLeaf />,
    url: "/search-results?category=vegetarian",
  },
  {
    title: "Vegan",
    icon: <FaSeedling />,
    url: "/search-results?category=vegan",
  },
  {
    title: "One-pot meals",
    icon: <PiCookingPotFill />,
    url: "/search-results?category=one-pot",
  },
  {
    title: "Snacks",
    icon: <FaIceCream />,
    url: "/search-results?category=snacks",
  },
  {
    title: "Desserts",
    icon: <FaCookieBite />,
    url: "/search-results?category=desserts",
  },
  {
    title: "Meat",
    icon: <GiChickenLeg />,
    url: "/search-results?category=meat",
  },
];

const diet: Cart[] = [
  {
    title: "Balanced",
    icon: <FaScaleBalanced />,
    url: "/search-results?diet=balanced",
  },
  {
    title: "High Fiber",
    icon: <GiAppleSeeds />,
    url: "/search-results?diet=high-fiber",
  },
  {
    title: "High protein",
    icon: <FaBottleWater />,
    url: "/search-results?diet=high-protein",
  },
  {
    title: "Low carb",
    icon: <FaSourcetree />,
    url: "/search-results?diet=low-carb",
  },
  {
    title: "Low fat",
    icon: <FaThermometer />,
    url: "/search-results?diet=low-fat",
  },
  {
    title: "Low sodium",
    icon: <FaCompress />,
    url: "/search-results?diet=low-sodium",
  },
];

const mealType: Cart[] = [
  {
    title: "Breakfast",
    icon: <MdBreakfastDining />,
    url: "/search-results?mealType=breakfast",
  },
  {
    title: "Dinner",
    icon: <MdDinnerDining />,
    url: "/search-results?mealType=dinner",
  },
  {
    title: "Lunch",
    icon: <MdLunchDining />,
    url: "/search-results?mealType=lunch",
  },
  {
    title: "Snack",
    icon: <FaPizzaSlice />,
    url: "/search-results?mealType=snack",
  },
  {
    title: "Tea time",
    icon: <MdCoffee />,
    url: "/search-results?mealType=tea-time",
  },
];

const SearchPage: FC = () => {
  return (
    <div className="mt-1 d-flex g-1">
      <h1>Search</h1>
      <Search placeholder="Ex.: Veggie Burger" />
      <h2 className="mt-1">Filter by</h2>
      <Accordion title="Categories">
        <CartList carts={categories} />
      </Accordion>
      <Accordion title="Diet">
        <CartList carts={diet} />
      </Accordion>
      <Accordion title="Meal Type">
        <CartList carts={mealType} />
      </Accordion>
      <Accordion title="Calories">
        <RangeSlider min={1} max={900} onChange={() => { }} />
      </Accordion>
    </div>
  );
};

export default SearchPage;
