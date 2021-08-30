import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../redux/actions/userActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

function SignInScreen(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const { userInfo, loading, error } = useSelector(
    (state) => state.userSignInReducer
  );
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
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
          <h2>Sign-In</h2>
        </div>
        {loading && <LoadingBox />}
        {error && <MessageBox variant={"danger"} children={error} />}
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
          <button type="submit" className="button primary">
            Signin
          </button>
        </div>
        <div>New to amazonb?</div>
        <div>
          <Link
            to={
              // `/register?redirect=${redirect}`
              redirect === "/" ? "/register" : "/register?redirect=" + redirect
            }
            className="button secondary text-center"
          >
            Create your amazonb account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInScreen;
