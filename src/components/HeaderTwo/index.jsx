import React from "react";

function HeaderTwo() {
  return (
    <div className="second-header">
      <div className="container second-header-wrapper">
        <img src="/logo.png" alt="logo" className="logo-img" />
        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#products">Produits</a>
          </li>
          <li>
            <a href="#aboutus">A propos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTwo;
