import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Rating from "../Components/Rating";
import {connect} from "react-redux";
import {detailProducts, listProducts} from "../redux/actions/productActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

function ProductScreen(props) {
    const {productDetail, detailProducts} = props;
    const productId = props.match.params.id
    const {loading, error, product} = productDetail
    useEffect(() => (
        detailProducts(productId)
    ), [detailProducts, productId])
    const [qty, setQty] = useState(1);
    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }

    return (
        <>
            {
                loading ? <LoadingBox/> : !!error ? <MessageBox variant={'danger'} children={error}/> :
                    <div>
                        <Link to="/">Back to result</Link>
                        <div className={"row top"}>
                            <div className="col-2">
                                <img
                                    className="large"
                                    src={product.image}
                                    alt={product.name}
                                />
                            </div>
                            <div className="col-1">
                                <ul>
                                    <li>
                                        <h1>{product.name}</h1>
                                    </li>
                                    <li>
                                        <Rating
                                            rating={product.rating}
                                            numReviews={product.numReviews}
                                        />
                                    </li>
                                    <li>Price : ${product.price}</li>
                                    <li>
                                        Description:
                                        <p>{product.description}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className={"col-1"}>
                                <div className="card card-body">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div>Price</div>
                                                <div className="price">${product.price}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div>Status</div>
                                                <div>{
                                                    product.countInStock > 0 ?
                                                        <span className="success">In Stock</span> :
                                                        <span className="danger">Unavailable</span>
                                                }</div>
                                            </div>
                                        </li>
                                        {
                                            product.countInStock > 0 && (
                                                <>
                                                    <li>
                                                        <div className="row">
                                                            <div>Qty</div>
                                                            <div>
                                                                <select name="" id="" value={qty}
                                                                        onChange={event => setQty(event.target.value)}>
                                                                    {
                                                                        [...Array(product.countInStock).keys()].map((x) => (
                                                                            <option key={x + 1}
                                                                                    value={x + 1}>{x + 1}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button onClick={addToCartHandler}
                                                                className={"primary block"}>Add to Cart
                                                        </button>
                                                    </li>
                                                </>
                                            )
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

// export default ProductScreen;
export default connect((state) => ({
    productList: state.listProductsReducers,
    productDetail: state.detailProductsReducers
}), {listProducts, detailProducts})(ProductScreen);