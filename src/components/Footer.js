
// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-light text-center py-4">
//       <p>© 2024 Ujuzi Vijana | All Rights Reserved</p>
//       <div>
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer bg-light text-center py-4">
      <p>© 2024 Ujuzi Vijana | All Rights Reserved</p>
      <div className="footer-links">
        <Link to="/about" className="footer-link me-3">About Us</Link>
        <Link to="/get-involved" className="footer-link me-3">Get Involved</Link>
        <Link to="/contact" className="footer-link me-3">Contact Us</Link>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link me-3">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link me-3">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link me-3">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;