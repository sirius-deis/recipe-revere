import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./RecipeOfTheDay.module.css";
import Row from "../row/Row";
import Col from "../column/Col";
import Button from "../button/Button";
import Loader from "../loader/Loader";

const RECIPE_OF_THE_DAY = gql`
  GET_RECIPE($tags: [String]!) {
    getRecipe(tags: $tags) {
      url
      label
      image
      source
      dietLabels
      healthLabels
      cautions
      ingredientLines
      calories
      totalWeigh
      totalTime
      cuisineType
      mealType
      dishType
    }
  }
`;

interface RecipeOfTheDayProps {
  ratingAvg: number;
  title: string;
  tags: string[];
  image: string;
}

const RecipeOfTheDay: FC<RecipeOfTheDayProps> = ({
  ratingAvg,
  title,
  tags,
  image,
}) => {
  const { loading, error, data } = useQuery(RECIPE_OF_THE_DAY, {
    variables: {
      tags: "RECIPE OF THE DAY",
    },
  });
  if (loading) {
    return <Loader />;
  }
  return (
    <article className={styles.recipe}>
      <div
        className={styles["image-container"]}
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <img className={styles.img} src={image} alt="A prepared recipe" /> */}
        <div className={styles.rating}>
          <FaStar />
          {ratingAvg}
        </div>
        <div className={styles.liked}>
          <Button
            bg="icon"
            size="sm"
            inlineStyles={{ padding: "0.8rem" }}
            rounded
          >
            <FaHeart />
          </Button>
        </div>
      </div>
      <div className={styles.desc}>
        <Row inlineStyles={{ justifyContent: "space-between" }}>
          <Col inlineStyles={{ gap: "0.5rem" }}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.tags}>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <Button bg="action" size="sm">
              Cook now
            </Button>
          </Col>
        </Row>
      </div>
    </article>
  );
};

export default RecipeOfTheDay;
