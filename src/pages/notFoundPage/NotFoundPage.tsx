import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import Button from "../../components/button/Button";

const NotFoundPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Button size="sm" bg="main">
          <Link to="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
