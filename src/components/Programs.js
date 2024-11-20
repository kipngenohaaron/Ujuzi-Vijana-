import React from "react";

function Programs() {
  return (
    <section id="programs">
      <h2>Our Programs</h2>
      <div className="programs-list">
        <div className="program">
          <img src="/tech-program.jpg" alt="Technical Skills Program" />
          <h3>Technical Skills</h3>
          <p>Learn coding, web development, and digital literacy.</p>
          <a href="#program-details" className="cta-button">
            Learn More
          </a>
        </div>
        <div className="program">
          <img src="/entrepreneurship-program.jpg" alt="Entrepreneurship Program" />
          <h3>Entrepreneurship</h3>
          <p>Develop business ideas and learn to launch your own company.</p>
          <a href="#program-details" className="cta-button">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Programs;
