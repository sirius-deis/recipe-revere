import { FC, ReactNode } from "react";
import styles from "./CartList.module.css";
import Cart from "../cart/Cart";
import List from "../list/List";

interface CartGroupProps {
  carts: Array<{
    title: string;
    icon: ReactNode;
    url: string;
  }>;
}

const CartGroup: FC<CartGroupProps> = ({ carts }) => {
  return (
    <div>
      <List>
        {carts.map((cart, i) => (
          <Cart key={i} {...cart} />
        ))}
      </List>
    </div>
  );
};

export default CartGroup;
