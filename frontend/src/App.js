import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import { useDispatch, useSelector } from "react-redux";
import SignInScreen from "./Screens/SignInScreen";
import { signout } from "./redux/actions/userActions";
import RegisterScreen from "./Screens/RegisterScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentMethodScreen from "./Screens/PaymentMethodScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";

function App() {
  const cartasd = useSelector((state) => state.cartReducers);
  const { cartItems } = cartasd;
  const { userInfo } = useSelector((state) => state.userSignInReducer);
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link to="/" className="brand">
            Amazonb
          </Link>
        </div>
        <div>
          <Link to="/cart">
            Cart{" "}
            {cartItems.length > 0 && (
              <span className={"badge"}>{cartItems.length}</span>
            )}
          </Link>
          {userInfo ? (
            <div className={"dropdown"}>
              <Link to="#">
                {userInfo.name}
                <i className={"fa fa-caret-down"} />
              </Link>
              <ul className={"dropdown-content"}>
                <Link to={"#signout"} onClick={signoutHandler}>
                  Sign out
                </Link>
              </ul>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </div>
      </header>
      <main>
        <Switch>
          <Route path={"/cart/:id?"} component={CartScreen} />
          <Route path={"/product/:id"} component={ProductScreen} />
          <Route path={"/signin"} component={SignInScreen} />
          <Route path={"/register"} component={RegisterScreen} />
          <Route path={"/shipping"} component={ShippingScreen} />
          <Route path={"/payment"} component={PaymentMethodScreen} />
          <Route path={"/placeorder"} component={PlaceOrderScreen} />
          <Route path={"/"} component={HomeScreen} exact />
        </Switch>
      </main>
      <footer className="row center">All rights reserved.</footer>
    </div>
  );
}

export default App;
