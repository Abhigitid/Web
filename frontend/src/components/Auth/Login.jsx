import React, { useState } from "react";
import LoginImg from "../../assets/Images/login-img.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <section className="login">
      <div className="container">
        <div className="login-page grid grid-two-cols">
          <div className="login-image">
            <div className="login-text">
              <p className="text">Nice to see you again</p>
              <h1 className="main-heading">Welcome Back</h1>
            </div>
            <figure>
              <img src={LoginImg} alt="lopginimg" width={"100%"} />
            </figure>
          </div>
          <div className="login-form">
            <h1 className="sub-heading">Login</h1>
            <form onSubmit={submitHandler} className="form">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  required
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter Password"
                />
              </div>
              <button className="btn button" type="submit">
                Login
              </button>
              <div className="forget-link">
                <Link to="/forgetPassword">Forget Password?</Link>
              </div>
              <p className="login-text">
                Not Register? <a href="/Register">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
