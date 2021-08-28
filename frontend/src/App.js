import React from "react";
import {Route, Switch} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
    return (
        <div className="grid-container">
            <header className="row">
                <div>
                    <a href="" className="brand">Amazonb</a>
                </div>
                <div>
                    <a href="">Cart</a>
                    <a href="">Order</a>
                </div>
            </header>
            <main>
                <Switch>
                    <Route path={"/product/:id"} component={ProductScreen}/>
                    <Route path={"/"} component={HomeScreen}/>
                </Switch>
            </main>
            <footer className="row center">
                All rights reserved.
            </footer>
        </div>
    );
}

export default App;
