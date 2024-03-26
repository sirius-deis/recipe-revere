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
          <Button bg="icon">
            <FaHeart />
          </Button>
        </div>
      </div>
      <div className={styles.desc}>
        <Row inlineStyles={{ justifyContent: "space-between" }}>
          <Col>
            <h3 className="title">{title}</h3>
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
