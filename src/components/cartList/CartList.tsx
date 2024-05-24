import { FC, ReactNode } from "react";
import styles from "./CartList.module.css";
import Cart from "../cart/Cart";

interface CartGroupProps {
  carts: Array<{
    title: string;
    icon: ReactNode;
    url: string;
  }>;
}

const CartGroup: FC<CartGroupProps> = ({ carts }) => {
  return (
    <div className={styles["cart-group"]}>
      {carts.map((cart, i) => (
        <Cart key={i} {...cart} />
      ))}
    </div>
  );
};

export default CartGroup;
