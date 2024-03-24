import { FC } from "react";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./RecipeOfTheDay.module.css";
import Row from "../row/Row";
import Col from "../column/Col";
import Button from "../button/Button";

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
  return (
    <article className={styles.recipe}>
      <div className={styles["image-container"]}>
        <img className={styles.img} src={image} alt="A prepared recipe" />
        <div className={styles.rating}>
          <FaStar />
          {ratingAvg}
        </div>
        <div className={styles.liked}>
          <Button bg="icon">
            <FaHeart />
          </Button>
        </div>
      </div>
      <div className={styles.desc}>
        <Row>
          <Col>
            <h3>{title}</h3>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
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
