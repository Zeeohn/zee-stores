import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = ({ footerBanner }) => {
  return (
    <div className="footer-container">
      <p>
        Made with <span style={{ color: "red" }}>❤</span> by{" "}
        <a
          href="https://wa.me/message/ACG6T4NMBL2EE1"
          target="_blank"
          rel="noreferrer"
        >
          <span
            style={{
              color: "green",
              textDecoration: "underline",
              fontWeight: "500",
            }}
          >
            Z-CODES
          </span>
        </a>
        . All rights reserved &copy; 2023-{new Date().getFullYear()}.
      </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
