import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router";
import { useContext, useState } from "react";
import {
  HeaderMenu,
  NameMenu,
  DivSearch,
  InputSearch,
  ButtonSearch,
  ContainerButtonShop,
} from "./style";
import { ProductsContext } from "../../providers/products";

function Menu(props) {
  const { Products } = useContext(ProductsContext);
  const history = useHistory();
  const { setProduct } = props;
  const [input, setInput] = useState("");

  const showProducts = (data) => {
    let arr = [];
    if (data.length === 0) {
      setProduct(Products);
    } else {
      Products.map((item) => {
        if (item.name.toLocaleLowerCase().includes(data.toLocaleLowerCase())) {
          arr.push(item);
        }
      });
      setProduct(arr);
    }
  };

  return (
    <HeaderMenu>
      <div>
        <NameMenu onClick={() => history.push("/")}>KenzieShop</NameMenu>
      </div>
      <DivSearch>
        <InputSearch
          type="text"
          placeholder="Buscar..."
          onChange={(event) => setInput(event.target.value)}
        />
        <ButtonSearch onClick={() => showProducts(input)}>
          <SearchIcon />
        </ButtonSearch>
      </DivSearch>

      <ContainerButtonShop>
        <div>
          <ShoppingCartIcon
            className="shoppingCartIcon"
            onClick={() => history.push("/carrinho")}
          />
        </div>
      </ContainerButtonShop>
    </HeaderMenu>
  );
}

export default Menu;
