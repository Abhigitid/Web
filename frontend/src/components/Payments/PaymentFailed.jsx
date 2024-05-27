import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <section className="paymentfailed">
      <div className="container">
        <h1 className="main-heading">Payment Failed</h1>
        <div>
          <MdError size={"7rem"} color="red" />
          <p> Payment Failed</p>
          <Link to="/subscribe">Try Again</Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentFailed;
