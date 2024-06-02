import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./RecipeOfTheDay.module.css";
import Row from "../row/Row";
import Col from "../column/Col";
import Button from "../button/Button";
import Loader from "../loader/Loader";
import Panel from "../panel/Panel";

const RECIPE_OF_THE_DAY = gql`
  query GetRecipe($tags: [String]) {
    getRecipe(tags: $tags) {
      recipe {
        label
        image
        dietLabels
        healthLabels
        totalTime
      }
      averageRating
    }
  }
`;

const RecipeOfTheDay: FC = () => {
  const { loading, error, data } = useQuery(RECIPE_OF_THE_DAY, {
    variables: {
      tags: "RECIPE OF THE DAY",
    },
  });
  if (loading) {
    return <Loader />;
  }
  if (error) {
    //TODO: add error img
  }
  return (
    <Panel>
      <div
        className={styles["image-container"]}
        style={{ backgroundImage: `url(${data?.recipe.image})` }}
      >
        <div className={styles.rating}>
          <FaStar />
          {data?.averageRating}
        </div>
        <div className={styles.liked}>
          <Button bg="icon" size="sm" style={{ padding: "0.8rem" }} rounded>
            <FaHeart />
          </Button>
        </div>
      </div>
      <div className={styles.desc}>
        <Row inlineStyles={{ justifyContent: "space-between" }}>
          <Col inlineStyles={{ gap: "0.5rem" }}>
            <h3 className={styles.title}>{data?.recipe.label}</h3>
            <ul className={styles.tags}>
              {data?.recipe.dietLabels.map((tag: string) => (
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
    </Panel>
  );
};

export default RecipeOfTheDay;
