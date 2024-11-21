import React from 'react';  
import { Link, useLocation } from 'react-router-dom';  

function Header() {  
  const location = useLocation();  

  return (  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">  
      <div className="container">  
        <Link to="/" className="navbar-brand logo">  
          Ujuzi Vijana  
        </Link>  
        <button   
          className="navbar-toggler"   
          type="button"   
          data-bs-toggle="collapse"   
          data-bs-target="#navbarNav"   
          aria-controls="navbarNav"   
          aria-expanded="false"   
          aria-label="Toggle navigation">  
          <span className="navbar-toggler-icon"></span>  
        </button>  
        <div className="collapse navbar-collapse" id="navbarNav">  
          <ul className="navbar-nav ms-auto">  
            <li className="nav-item">  
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>  
            </li>  
            <li className="nav-item">  
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>  
            </li>  
            <li className="nav-item">  
              <Link to="/programs" className={`nav-link ${location.pathname === '/programs' ? 'active' : ''}`}>Programs</Link>  
            </li>  
            <li className="nav-item">  
              <Link to="/get-involved" className={`nav-link ${location.pathname === '/get-involved' ? 'active' : ''}`}>Get Involved</Link>  
            </li>  
            <li className="nav-item">  
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>  
            </li>  
          </ul>  
        </div>  
      </div>  
    </nav>  
  );  
}  

export default Header;