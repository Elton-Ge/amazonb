import React, { useState } from "react";
import ShippingTag from "../Components/ShippingTag";
import { useDispatch, useSelector } from "react-redux";
import { cartSavePaymentMethod } from "../redux/actions/cartActions";

function PaymentMethodScreen(props) {
  const { shippingAddress } = useSelector((state) => state.cartReducers);
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    //TODO
    dispatch(cartSavePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <div>
      <ShippingTag step1 step2 step3 />
      <form onSubmit={submitHandler} className="form">
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id={"paypal"}
              name={"paymentMethod"}
              required
              checked
              value={"paypal"}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            />
            <label htmlFor="paypal">Paypal</label>
          </div>
          <div>
            <input
              type="radio"
              id={"stripe"}
              name={"paymentMethod"}
              required
              value={"stripe"}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            />
            <label htmlFor="stripe">Stripe</label>
          </div>
          <div>
            <button className="primary" type={"submit"}>
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethodScreen;
