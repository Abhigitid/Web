import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { Link, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const reference = useSearchParams()[0].get("reference");
  return (
    <section className="paymentsuccess">
      <div className="container">
        <h1 className="main-heading">Welcome to Premium Pack</h1>

        <div className="payment-success-card">
          <div className="payment-card-header">
            <h3>Payment Successful</h3>
          </div>
          <div className="payment-successful-content">
            <h3>
              Congratulations you are a pro menmber. You have access to all
              premium courses.
            </h3>
            <CiCircleCheck size={"7rem"} color="green" />
            <Link to="/profile">Go to Profile</Link>
            <h3>
              Ref:{"  "}
              {reference}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
