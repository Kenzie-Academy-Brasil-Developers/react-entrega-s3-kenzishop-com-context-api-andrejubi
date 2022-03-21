import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import CardCart from "../CardCart";
import {
  ContainerCart,
  ContainerProductsCart,
  CardCartMaps,
  PriceCartTotal,
} from "./style";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <ContainerCart>
      <PriceCartTotal>
        Preço Total: R${cart.reduce((a, b) => a + b.price, 0).toFixed(2)}
      </PriceCartTotal>
      <ContainerProductsCart>
        <CardCartMaps>
          {cart.map((item, index) => {
            console.log(item);
            return (
              <CardCart
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </CardCartMaps>
      </ContainerProductsCart>
    </ContainerCart>
  );
};
export default Cart;
