import React, {useEffect, useState} from 'react';
import Product from "../Components/Product";
import axios from "axios";

function HomeScreen(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const {result} = await axios.get('/api')
            console.log(result)
            setProducts(result)
        }
        fetchData()
    }, [])

    return (
        <div className="row center">
            {
                products.map((product) => (
                    <Product key={product._id} product={product}/>
                ))
            }
        </div>
    );
}

export default HomeScreen;