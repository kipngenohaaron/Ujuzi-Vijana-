// import React from "react";

// function Programs() {
//   return (
//     <section id="programs">
//       <h2>Our Programs</h2>
//       <div className="programs-list">
//         <div className="program">
//           <img src="/tech-program.jpg" alt="Technical Skills Program" />
//           <h3>Technical Skills</h3>
//           <p>Learn coding, web development, and digital literacy.</p>
//           <a href="#program-details" className="cta-button">
//             Learn More
//           </a>
//         </div>
//         <div className="program">
//           <img src="/entrepreneurship-program.jpg" alt="Entrepreneurship Program" />
//           <h3>Entrepreneurship</h3>
//           <p>Develop business ideas and learn to launch your own company.</p>
//           <a href="#program-details" className="cta-button">
//             Learn More
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Programs;
import React from 'react';

function Programs() {
  return (
    <section className="programs py-5" id="programs">
      <div className="container">
        <h2 className="text-center mb-4">Our Programs</h2>
        <div className="row">
          {/* Program 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/tech-program.jpg" className="card-img-top" alt="Tech Program" />
              <div className="card-body">
                <h5 className="card-title">Technical Skills</h5>
                <p className="card-text">Learn programming, web development, and more.</p>
                <a href="/programs" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          {/* Program 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/entrepreneurship-program.jpg" className="card-img-top" alt="Entrepreneurship Program" />
              <div className="card-body">
                <h5 className="card-title">Entrepreneurship</h5>
                <p className="card-text">Start your own business with the right tools.</p>
                <a href="/programs" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          {/* Program 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/digital-literacy.jpg" className="card-img-top" alt="Digital Literacy Program" />
              <div className="card-body">
                <h5 className="card-title">Digital Literacy</h5>
                <p className="card-text">Master digital tools for a better future.</p>
                <a href="/programs" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
