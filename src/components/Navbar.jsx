import React from "react";

const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          {" "}
          Mr. Chips{" "}
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>

            <li>
              <a href="#favorites" className="nav__link">
                Favorites
              </a>
            </li>

            <li>
              <a href="#care" className="nav__link">
                Care
              </a>
            </li>

            <li>
              <a href="#products" className="nav__link">
                Products
              </a>
            </li>

            <li>
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>

          {/* Close Button */}
          <div className="nav__close" id="nav-close">
            <i className="ri-close-large-line"></i>
          </div>

          <div className="nav__social">
            <a
              href="https://github.com/zainmaqsood07/"
              target="_blank"
              className="nav__social-link"
              rel="noopener noreferrer"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/zainmaqsood2004/"
              target="_blank"
              className="nav__social-link"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/zaain_maqsood/"
              target="_blank"
              className="nav__social-link"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-apps-2-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
