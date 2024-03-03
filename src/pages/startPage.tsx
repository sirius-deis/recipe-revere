import { FC } from "react";
import { Link } from "react-router-dom";
import StarterImg from "../assets/starterImg.png";
import Button from "../components/button/Button";

const StartPage: FC = () => {
  return (
    <div>
      <img src={StarterImg} alt="Image of a person that enjoy cooking" />
      <h1>CookUp</h1>
      <p>
        3000+ easy and delicious recipes from the best chefs from around the
        world
      </p>
      <Button>
        <Link to="/login">Get Started</Link>
      </Button>
    </div>
  );
};

export default StartPage;
