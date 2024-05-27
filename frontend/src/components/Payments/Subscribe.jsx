import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../store/store";
import { buySubscription } from "../../actions/user";
import axios from "axios";
import toast from "react-hot-toast";
import logo from "../../assets/Images/ant.png";

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const { error, subscriptionId } = useSelector((state) => state.subscription);
  const { error: courseError } = useSelector((state) => state.course);
  const subscribeHandler = async () => {
    const {
      data: { key },
    } = await axios.get(`${server}/razorPayKey`);
    setKey(key);
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (courseError) {
      toast.error(courseError);
      dispatch({ type: "clearError" });
    }
    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: "Web_dev",
          description: "Get Access To All Premium Content",
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentVerification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: "",
          },
          notes: {
            address: "Web_dev online learning platform",
          },
          theme: {
            color: "#5c6e58",
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    error,
    courseError,
    user.name,
    user.email,
    key,
    subscriptionId,
  ]);

  return (
    <section className="subscribe">
      <div className="container">
        <h1 className="main-heading">Welcome</h1>
        <div className="subscribe-card">
          <div className="pack-name">
            <h3>Premium Pack - INR 199</h3>
          </div>
          <div className="subscribe-content">
            <h3>Join Premium Pack and Get Access to all Content</h3>
            <h2>INR-199 Only</h2>
            <button onClick={subscribeHandler} className="btn">
              Buy Now
            </button>
          </div>
          <div className="card-footer">
            <h3>Full Refund on Cancellation</h3>
            <h6>*Terms & conditions apply</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
