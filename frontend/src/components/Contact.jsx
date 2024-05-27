import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  IoCallOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoMailOutline,
  IoMapOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../actions/other";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { error, message: stateMessage } = useSelector((state) => state.other);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, stateMessage]);
  return (
    <section className="contact">
      <div className="container ">
        <div className="contact-page grid grid-two-cols">
          <div className="contact-info">
            <h1 className="sub-heading">Get In Touch</h1>
            <div className="social">
              <div className="icons">
                <div className="icon">
                  <IoMapOutline />

                  <span>
                    SA 6/117 SRI NAGAR COLONY PAHARIAY VARANASI 221007
                  </span>
                </div>
                <div className="icon">
                  <IoCallOutline />

                  <span>+91 7080566307</span>
                </div>
                <div className="icon">
                  <IoMailOutline />

                  <span>csengineer.97@gmail.com</span>
                </div>
              </div>

              <div className="social-icons">
                <IoLogoFacebook />
                <IoLogoYoutube />
                <IoLogoInstagram />
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h1 className="sub-heading">Drop Me A Line</h1>
            <form onSubmit={submitHandler} className="form">
              <div>
                <input
                  required
                  type="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
