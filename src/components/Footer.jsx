import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <a href="#" className="footer__logo">
          Mr. Chips
        </a>

        <div className="footer__content grid">
          <a href="#" className="footer__link">
            Terms & Agreements
          </a>
          <a href="#" className="footer__link">
            Privacy Policy
          </a>

          <span className="footer__copy">
            &#169; All Rights Reserved By Mr. Chips
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
