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
