import { FC, ReactNode } from "react";
import styles from "./Cart.module.css";

interface CartProps {
  title: string;
  icon: ReactNode;
}

const Cart: FC<CartProps> = ({ title, icon }) => {
  return (
    <article className={styles.cart}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.icon}>{icon}</div>
    </article>
  );
};

export default Cart;
