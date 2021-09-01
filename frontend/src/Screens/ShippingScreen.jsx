import React, { useState } from "react";
import ShippingTag from "../Components/ShippingTag";
import { useDispatch, useSelector } from "react-redux";
import { cartSaveShippingAddress } from "../redux/actions/cartActions";

function ShippingScreen(props) {
  const { userInfo } = useSelector((state) => state.userSignInReducer);
  if (!userInfo) {
    props.history.push("/signin");
  }
  const { shippingAddress } = useSelector((state) => state.cartReducers);
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      cartSaveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push("/payment");
  };
  return (
    <div>
      <ShippingTag step1 step2 />
      <form onSubmit={submitHandler} className="form">
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            required={true}
            placeholder={"Enter full name"}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            required={true}
            placeholder={"Enter Address"}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            required={true}
            placeholder={"Enter City"}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="postalCode">PostalCode</label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            required={true}
            placeholder={"Enter PostalCode"}
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            required={true}
            placeholder={"Enter Country"}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>
        <div>
          <button type={"submit"} className={"primary"}>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShippingScreen;
