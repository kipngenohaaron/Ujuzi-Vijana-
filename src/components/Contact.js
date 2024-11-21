import React, { useState } from 'react'; // Ensure useState is imported

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a backend or email service
    setIsSubmitted(true); // Show confirmation message
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <section className="contact py-5">
      <div className="container">
        <h2 className="text-center">Contact Us</h2>

        {isSubmitted && (
          <div className="alert alert-success text-center" role="alert">
            Thank you for reaching out! We will get back to you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control input-animation"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control input-animation"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control input-animation"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-animation">Send Message</button>
        </form>

        <div className="mt-4">
          <h4>Find Us On</h4>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2 social-btn">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2 social-btn">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2 social-btn">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
