import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light text-center py-4">
      <p>© 2024 Ujuzi Vijana | All Rights Reserved</p>
      <div>
        <Link to="/get-involved" className="me-3">Get Involved</Link>
        <Link to="/contact" className="me-3">Contact Us</Link>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
