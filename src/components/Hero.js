import React from "react";
import heroImage from "./assets/hero-image.jpg";  // Import the image

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <h1>Welcome to Ujuzi Vijana!</h1>
    </div>
  );
}

export default Hero;
