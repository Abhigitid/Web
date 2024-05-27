import React from "react";
import NotPage from "../assets/Images/404.png";

const NotFound = () => {
  return (
    <div className="notFound">
      <img src={NotPage} alt="notFound" />

      <div className="text">
        <h1 className="main-heading">Page Not Found</h1>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <h1>
          <a href="/">~ Go to Homepage ~</a>
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
