// import React from "react";

// function About() {
//   return (
//     <section id="about">
//       <h2>About Us</h2>
//       <p>
//         We are a non-profit dedicated to providing youth with skills that will
//         help them thrive in the modern workforce.
//       </p>

//       <div className="impact">
//         <h3>Our Impact</h3>
//         <p>
//           Thousands of youth trained, with success stories from entrepreneurs,
//           tech experts, and artists.
//         </p>
//       </div>

//       <div className="team">
//         <h3>Meet Our Team</h3>
//         <div className="team-member">
//           <img src="/team-member1.jpg" alt="Team Member 1" />
//           <h4>John Doe</h4>
//           <p>Founder & Executive Director</p>
//         </div>
//         <div className="team-member">
//           <img src="/team-member2.jpg" alt="Team Member 2" />
//           <h4>Jane Smith</h4>
//           <p>Program Manager</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
import React from 'react';
import './AboutUs.css';  // Make sure to import the CSS file for styles

function AboutUs() {
  return (
    <section className="about-us py-5">
      <div className="container">
        <h2 className="text-center mb-4 animate__animated animate__fadeIn">About Us</h2>
        
        {/* Overview Section */}
        <div className="row mb-5">
          <div className="col-md-6">
            <h3 className="animate__animated animate__fadeInLeft">Our Mission</h3>
            <p className="animate__animated animate__fadeInLeft">
              At Ujuzi Vijana, our mission is to empower young people by providing them with the skills and knowledge they need to thrive in today’s fast-changing world. We believe that every young person deserves the opportunity to unlock their potential and achieve success in their chosen fields.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="animate__animated animate__fadeInRight">Our Vision</h3>
            <p className="animate__animated animate__fadeInRight">
              Our vision is to create a community of skilled young individuals who are equipped to tackle challenges, lead with confidence, and contribute to the betterment of society. We aim to bridge the gap between education and industry by offering practical, hands-on learning experiences.
            </p>
          </div>
        </div>

        {/* Impact Statement Section */}
        <div className="impact-section mb-5">
          <h3 className="animate__animated animate__zoomIn">Impact</h3>
          <p>
            Since our inception, Ujuzi Vijana has trained over 1,000 young people across various disciplines. Our programs have helped many individuals secure internships, employment, and even start their own businesses. Here are a few success stories from our graduates:
          </p>
          <ul className="animate__animated animate__fadeInUp">
            <li>Over 300 young people placed in internships</li>
            <li>50+ successful startup ventures launched</li>
            <li>98% of our trainees report a significant improvement in their employability</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="team">
          <h3 className="animate__animated animate__fadeIn">Our Team</h3>
          <div className="row">
            {/* Example Team Member */}
            <div className="col-md-4 mb-4">
              <div className="card animate__animated animate__zoomIn">
                <img src="team-member1.jpg" alt="Team Member" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">Co-founder and CEO</p>
                  <p>
                    John is passionate about empowering young people through education and skill development. With over 10 years of experience in the education sector, John has successfully led various initiatives aimed at reducing youth unemployment.
                  </p>
                </div>
              </div>
            </div>

            {/* Another Example Team Member */}
            <div className="col-md-4 mb-4">
              <div className="card animate__animated animate__zoomIn">
                <img src="team-member2.jpg" alt="Team Member" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Program Manager</p>
                  <p>
                    Jane is an expert in program management and has been instrumental in designing and overseeing training programs that equip young people with critical digital and entrepreneurial skills.
                  </p>
                </div>
              </div>
            </div>

            {/* More team members can be added similarly */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
