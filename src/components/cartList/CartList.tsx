import { FC, ReactNode } from "react";
import Cart from "../cart/Cart";
import List from "../list/List";

interface CartListProps {
  carts: Array<{
    title: string;
    icon: ReactNode;
    url: string;
  }>;
}

const CartList: FC<CartListProps> = ({ carts }) => {
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

export default CartList;
