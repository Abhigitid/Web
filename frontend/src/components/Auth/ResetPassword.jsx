import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../actions/profile";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const { message, error } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/login");
    }
  }, [dispatch, error, message, navigate]);

  return (
    <section className="resetPassword forgetPassword">
      <div className="container">
        <h1 className="main-heading">Reset Password</h1>
        <form onSubmit={submitHandler}>
          <input
            type="password"
            required
            id="password"
            value={password}
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">
            Reset Pssword
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
