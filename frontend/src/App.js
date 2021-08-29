import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import {useSelector} from "react-redux";

function App() {
    const cart = useSelector(state => state.cartReducers)
    const {cartItems} = cart
    return (
        <div className="grid-container">
            <header className="row">
                <div>
                    <Link to="/" className="brand">Amazonb</Link>
                </div>
                <div>
                    <Link to="/cart">Cart {
                        cartItems.length > 0 && (<span className={"badge"}>{cartItems.length}</span>)
                    }</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            </header>
            <main>
                <Switch>
                    <Route path={"/cart/:id?"} component={CartScreen}/>
                    <Route path={"/product/:id"} component={ProductScreen}/>
                    <Route path={"/"} component={HomeScreen} exact/>
                </Switch>
            </main>
            <footer className="row center">
                All rights reserved.
            </footer>
        </div>
    );
}

export default App;
