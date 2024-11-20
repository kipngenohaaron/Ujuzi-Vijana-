// import React from "react";

// function GetInvolved() {
//   return (
//     <section id="get-involved">
//       <h2>Get Involved</h2>
//       <div className="cta">
//         <a href="#volunteer" className="cta-button">Volunteer</a>
//         <a href="#donate" className="cta-button">Donate Now</a>
//       </div>
//     </section>
//   );
// }

// export default GetInvolved;
import React from 'react';

function GetInvolved() {
  return (
    <section className="get-involved py-5">
      <div className="container text-center">
        <h2>Get Involved</h2>
        <p>There are many ways to make a difference. Join us in empowering young people and helping them develop the skills they need for a brighter future!</p>

        <div className="row">
          {/* Volunteer Section */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Volunteer</h5>
                <p className="card-text">Donate your time and skills to help young people succeed. Whether in person or online, your time can make a huge impact.</p>
                <a href="#volunteer" className="btn btn-primary">Sign Up to Volunteer</a>
              </div>
            </div>
          </div>

          {/* Donate Section */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Donate</h5>
                <p className="card-text">Your contributions fund scholarships, training materials, and more. Every donation helps young people achieve their dreams.</p>
                <a href="#donate" className="btn btn-primary">Donate Now</a>
              </div>
            </div>
          </div>

          {/* Partnership/Sponsorship Section */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Partnerships</h5>
                <p className="card-text">We are always looking for partners who share our mission. Get in touch to discuss potential collaborations and sponsorship opportunities.</p>
                <a href="#partnership" className="btn btn-primary">Become a Partner</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;
