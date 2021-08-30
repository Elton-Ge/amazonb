import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { register } from "../redux/actions/userActions";

function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const { userInfo, loading, error } = useSelector(
    (state) => state.userRegisterReducer
  );
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password and confirmPassword are not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <form onSubmit={submitHandler} className={"form"}>
        <div>
          <h2>Create Account</h2>
        </div>
        {loading && <LoadingBox />}
        {error && <MessageBox variant={"danger"} children={error} />}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="button primary">
            Register
          </button>
        </div>
        <div>Already hava an account?</div>
        <div>
          <Link
            to={
              // `/signin?redirect=${redirect}`
              redirect === "/" ? "/register" : "/register?redirect=" + redirect
            }
            className="button secondary text-center"
          >
            Sign-In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;
