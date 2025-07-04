import { FC, forwardRef } from "react";
import styles from "./RecipePreview.module.css";
import Panel from "../panel/Panel";
import { FaHeart, FaStar } from "react-icons/fa";
import Button from "../button/Button";
import Row from "../row/Row";
import Col from "../column/Col";
import { Link } from "react-router-dom";

interface RecipeReviewProps {
  recipe: {
    id: string;
    label: string;
    image: string;
    dietLabels?: string[]
  };
  avgRating?: number;
  btnTitle: string;
  withHeart?: boolean;
  direction?: "vertical" | "horizontal"
}

const RecipePreview = forwardRef<HTMLDivElement, RecipeReviewProps>(
  (
    {
      recipe: {
        id,
        label,
        image,
        dietLabels,
      },
      avgRating,
      btnTitle,
      withHeart = true,
    },
    ref
  ) => {
    return (
      <Panel withShadow withBorder>
        <div className={styles["recipe-container"]}>
          <div
            className={styles["image-container"]}
            style={{ backgroundImage: `url(${image})` }}
            ref={ref}
            data-testid="img"
          >
            {avgRating && (
              <div className={styles.rating}>
                <FaStar />
                {avgRating}
              </div>
            )}
            {withHeart && (
              <div className={styles.liked}>
                <Button bg="icon" size="sm" rounded>
                  <FaHeart />
                </Button>
              </div>
            )}
          </div>
          <div className={styles.desc}>
            <Row inlineStyles={{ justifyContent: "space-between", gap: "0.7rem" }}>
              <Col inlineStyles={{ gap: "0.5rem", wrap: "wrap", maxWidth: "65%" }}>
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
        </div>
      </Panel>
    );
  }
);

export default RecipePreview;
