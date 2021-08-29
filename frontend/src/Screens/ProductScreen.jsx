import React, {useEffect} from 'react';
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
                                        <li>
                                            <button className={"primary block"}>Add to Cart</button>
                                        </li>
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