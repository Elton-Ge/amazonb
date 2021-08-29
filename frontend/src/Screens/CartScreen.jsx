import React, {useEffect} from 'react';
import {addToCart, removeFromCart} from "../redux/actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import MessageBox from "../Components/MessageBox";
import {Link} from "react-router-dom";

function CartScreen(props) {
    const cart = useSelector(state => state.cartReducers)
    const {cartItems} = cart
    const dispatch = useDispatch()
    const productId = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1

    // const {cartList, addToCart} = props;
    // useEffect(() => {
    //     if (productId) {
    //         addToCart(productId, qty)
    //     }
    // }, [addToCart, productId, qty])

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (product) => {
        // return undefined;
        dispatch(removeFromCart(product))
    }

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping")
    }

    return (
        <div className={"row top"}>
            <div className={'col-2'}>
                <h1>Shopping cart</h1>
                {
                    cartItems.length === 0 ?
                        <MessageBox>Cart is Empty <Link to={"/"}>Go Shopping</Link> </MessageBox> : (
                            <ul>
                                {
                                    cartItems.map((item) => (
                                        <li key={item.product}>
                                            <div className="row">
                                                <div>
                                                    <img src={item.image} alt={item.name} className={"small"}/>
                                                </div>
                                                <div className={"min-30"}>
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </div>
                                                <div>
                                                    <select value={item.qty} onChange={(e) => {
                                                        dispatch(addToCart(item.product, Number(e.target.value)))
                                                    }}>
                                                        {
                                                            [...Array(item.countInStock).keys()].map((x) => (
                                                                <option key={x + 1}
                                                                        value={x + 1}>{x + 1}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div>${item.price}</div>
                                                <div>
                                                    <button onClick={() => (
                                                        removeFromCartHandler(item.product)
                                                    )}>Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                }
            </div>
            <div className="col-1">
                <div className={"card card-body"}>
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({
                                cartItems.reduce((a, c) => (
                                    a + c.qty
                                ), 0)
                            }) items : $ {
                                cartItems.reduce((a, c) => a + c.qty * c.price, 0)
                            }
                            </h2>
                        </li>
                        <li>
                            <button onClick={checkoutHandler} className={"primary block"}
                                    disabled={cartItems.length === 0}>Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;

// export default connect((state) => ({
//     cartList: state.cartReducers
// }), {addToCart})(CartScreen);