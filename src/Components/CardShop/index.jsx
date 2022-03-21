import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import {
  ImgProductCard,
  ContainerCard,
  PriceCard,
  ButtonCard,
  NameCard,
} from "./style";

const CardShop = (props) => {
  const { name, price, image, item } = props;
  const { addToCart } = useContext(CartContext);

  return (
    <ContainerCard>
      <ImgProductCard src={image} alt={name}></ImgProductCard>
      <NameCard>{name}</NameCard>
      <PriceCard>R${price.toFixed(2)}</PriceCard>
      <ButtonCard onClick={() => addToCart(item)}>
        Adicionar ao carrinho
      </ButtonCard>
    </ContainerCard>
  );
};

export default CardShop;
