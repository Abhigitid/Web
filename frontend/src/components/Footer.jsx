import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid-three-cols">
        <div className="owner">
          <p>© 2024 All Rights Reserved</p>
        </div>
        <div className="developer">
          <p>
            Designed & Developed by <span>Abhishek</span>
          </p>
        </div>
        <div className="terms">
          <p>
            <Link to="#">Terms of Use</Link> |{" "}
            <Link to="#">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
