import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartMaster from "../pages/CartMaster";
import Home from "../pages/home/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/carrinho">
          <CartMaster />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
