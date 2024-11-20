import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Ujuzi Vijana Logo" />
        <h1>Ujuzi Vijana</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#get-involved">Get Involved</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
