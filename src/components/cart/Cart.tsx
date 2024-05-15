import { FC, ReactNode } from "react";
import styles from "./Cart.module.css";

interface CartProps {
  title: string;
  icon: ReactNode;
}

const Cart: FC<CartProps> = ({ title, icon }) => {
  return (
    <article className={styles.cart}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
    </article>
  );
};

export default Cart;
