import React from 'react';

// Function to randomly select an image from assets
function getRandomImage() {
  const images = [
    'image.jpg',
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];

  // Randomly pick an image
  const randomIndex = Math.floor(Math.random() * images.length);
  return require(`../assets/${images[randomIndex]}`);  // Corrected path
}

function AboutUs() {
  const randomImage = getRandomImage(); // Get the random image

  return (
    <section className="about-us py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        
        {/* Overview Section */}
        <div className="row mb-5">
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p>
              At Ujuzi Vijana, our mission is to empower young people by providing them with the skills and knowledge they need to thrive in today’s fast-changing world. We believe that every young person deserves the opportunity to unlock their potential and achieve success in their chosen fields.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Our Vision</h3>
            <p>
              Our vision is to create a community of skilled young individuals who are equipped to tackle challenges, lead with confidence, and contribute to the betterment of society. We aim to bridge the gap between education and industry by offering practical, hands-on learning experiences.
            </p>
          </div>
        </div>

        {/* Random Image Section */}
        <div className="mb-5 text-center">
          <h3>Inspiring Image</h3>
          <img src={randomImage} alt="Ujuzi Vijana Inspiration" className="img-fluid" />
        </div>

        {/* Impact Statement Section */}
        <div className="mb-5">
          <h3>Impact</h3>
          <p>
            Since our inception, Ujuzi Vijana has trained over 1,000 young people across various disciplines. Our programs have helped many individuals secure internships, employment, and even start their own businesses. Here are a few success stories from our graduates:
          </p>
          <ul>
            <li>Over 300 young people placed in internships</li>
            <li>50+ successful startup ventures launched</li>
            <li>98% of our trainees report a significant improvement in their employability</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="team">
          <h3>Our Team</h3>
          <div className="row">
            {/* Example Team Member */}
            <div className="col-md-4 mb-4">
              <div className="card">
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
              <div className="card">
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
