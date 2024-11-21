// import React from "react";

// function Hero() {
//   return (
//     <section className="hero">
//       <h2>Empowering Youth Through Skill Development</h2>
//       <p>Join Ujuzi Vijana and gain the skills to shape your future.</p>
//       <a href="#get-involved" className="cta-button">Start Learning</a>
//     </section>
//   );
// }

// export default Hero;
import React from 'react';
import heroImage from '../assets/image6.jpg';  // Make sure this image exists

function Hero() {
  return (
    <section className="hero d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', height: '100vh' }}>
      <div className="text-center text-white">
        <h1>Welcome to Ujuzi Vijana</h1>
        <p>Empowering the youth with skills for a brighter future</p>
        <a href="programs" className="btn btn-primary btn-lg">Start Learning</a>
      </div>
    </section>
  );
}

export default Hero;
