import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import { forgetPassword } from "../../actions/profile";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const [email, setEmail] = useState(" ");
  const { message, error } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  return (
    <section className="forgetPassword">
      <div className="container">
        <h1 className="main-heading">Forget Password</h1>

        <form onSubmit={submitHandler}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <button className="btn" type="submit">
            Send Reset Link
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
