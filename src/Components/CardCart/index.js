import {
  ContainerCardCart,
  ImageCardCart,
  PriceCardCart,
  NameCardCart,
} from "./style";

const CardCart = (props) => {
  const { name, price, image } = props;

  return (
    <ContainerCardCart>
      <ImageCardCart src={image} alt={name} />
      <NameCardCart>{name}</NameCardCart>
      <PriceCardCart>R${price.toFixed(2)}</PriceCardCart>
    </ContainerCardCart>
  );
};

export default CardCart;
