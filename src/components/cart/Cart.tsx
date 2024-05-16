import { FC, ReactNode } from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

interface CartProps {
  title: string;
  icon: ReactNode;
  url: string;
}

const Cart: FC<CartProps> = ({ title, icon, url }) => {
  return (
    <Link to={url}>
      <article className={styles.cart}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
      </article>
    </Link>
  );
};

export default Cart;
