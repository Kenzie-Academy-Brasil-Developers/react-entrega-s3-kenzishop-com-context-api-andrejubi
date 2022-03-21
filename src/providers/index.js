import { CartProvider } from "./cart/index.js";
import { ProductsProvider } from "./products/index.js";

const Provider = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>);
    </ProductsProvider>
  );
};

export default Provider;
