import { FC, forwardRef } from "react";
import styles from "./recipePreview.module.css";
import Panel from "../panel/Panel";
import { FaHeart, FaStar } from "react-icons/fa";
import Button from "../button/Button";
import Row from "../row/Row";
import Col from "../column/Col";
import { Link } from "react-router-dom";

interface RecipeReviewProps {
  id: string;
  label: string;
  image: string;
  avgRating?: number;
  dietLabels?: string[];
  btnTitle: string;
  withHeart?: boolean;
  direction?: "vertical" | "horizontal";
}

const RecipePreview = forwardRef<HTMLDivElement, RecipeReviewProps>(
  (
    {
      id,
      label,
      image,
      avgRating,
      dietLabels,
      btnTitle,
      withHeart = true,
      direction = "vertical",
    },
    ref
  ) => {
    return (
      <Panel withShadow direction={direction}>
        <div
          className={styles["image-container"]}
          style={{ backgroundImage: `url(${image})` }}
          ref={ref}
        >
          {avgRating && (
            <div className={styles.rating}>
              <FaStar />
              {avgRating}
            </div>
          )}
          {withHeart && (
            <div className={styles.liked}>
              <Button bg="icon" size="sm" style={{ padding: "0.8rem" }} rounded>
                <FaHeart />
              </Button>
            </div>
          )}
        </div>
        <div className={styles.desc}>
          <Row inlineStyles={{ justifyContent: "space-between" }}>
            <Col inlineStyles={{ gap: "0.5rem" }}>
              <h3 className={styles.title}>{label}</h3>
              {dietLabels && (
                <ul className={styles.tags}>
                  {dietLabels.map((tag: string) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </Col>
            <Col>
              <Link to={`/recipe/${id}`}>
                <Button bg="action" size="sm">
                  {btnTitle}
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Panel>
    );
  }
);

export default RecipePreview;
