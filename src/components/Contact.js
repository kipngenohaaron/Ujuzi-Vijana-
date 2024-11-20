// import React, { useState } from "react";

// function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form submitted:", { name, email });
//     // You would process the form data here (e.g., send to a server)
//   };

//   return (
//     <section id="contact">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit" className="cta-button">Submit</button>
//       </form>
//     </section>
//   );
// }

// export default Contact;
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a backend or email service
    alert('Your message has been sent!');
  };

  return (
    <section className="contact py-5">
      <div className="container">
        <h2 className="text-center">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        <div className="mt-4">
          <h4>Find Us On</h4>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
