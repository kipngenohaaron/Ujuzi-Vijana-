// import React from "react";

// function Header() {
//   return (
//     <header>
//       <div className="logo">
//         <img src="/logo.png" alt="Ujuzi Vijana Logo" />
//         <h1>Ujuzi Vijana</h1>
//       </div>
//       <nav>
//         <ul>
//           <li><a href="#about">About Us</a></li>
//           <li><a href="#programs">Programs</a></li>
//           <li><a href="#get-involved">Get Involved</a></li>
//           <li><a href="#contact">Contact Us</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Ujuzi Vijana
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/programs" className="nav-link">Programs</Link>
            </li>
            <li className="nav-item">
              <Link to="/get-involved" className="nav-link">Get Involved</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
