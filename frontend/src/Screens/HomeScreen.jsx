import React from 'react';
import Product from "../Components/Product";
import data from '../data'

function HomeScreen(props) {
    return (
        <div className="row center">
            {
                data.products.map((product) => (
                    <Product key={product._id} product={product}/>
                ))
            }
        </div>
    );
}

export default HomeScreen;