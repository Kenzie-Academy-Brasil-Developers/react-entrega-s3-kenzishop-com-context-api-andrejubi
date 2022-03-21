import Banner from "../../utils/banner.jpeg";
import CardShop from "../CardShop";
import {
  ContainerMainShop,
  ContainerDivShop,
  ImgBanner,
  ContainerProductsShop,
  TitleProducts,
} from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../providers/products";

const Shop = () => {
  const { Products } = useContext(ProductsContext);

  console.log(Products);

  return (
    <ContainerMainShop>
      <ContainerDivShop>
        <ImgBanner src={Banner} alt="Banner" />
        <div>
          <TitleProducts>Produtos</TitleProducts>
          <ContainerProductsShop>
            {Products.map((item, index) => {
              return (
                <CardShop
                  key={index}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  item={item}
                />
              );
            })}
          </ContainerProductsShop>
        </div>
      </ContainerDivShop>
    </ContainerMainShop>
  );
};

export default Shop;
