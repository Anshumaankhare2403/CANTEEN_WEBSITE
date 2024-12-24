import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!emailRegex.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!phoneRegex.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true); // Set loading state
    const formElement = e.target;

    // Submit to Google Apps Script
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzR6-r4sNQ0BVe8XhZs6pFjESaDWWMLsVOMSbhQ1V0uDAAd0wl626GWsilmDzYJvr4H/exec', {
        method: "POST",
        body: new FormData(formElement),
      });
      alert("Thank you for your message!");
    } catch (error) {
      alert("Oops! Something went wrong with the Google Apps Script submission.");
      console.error("Error!", error.message);
    }

    // Submit to Web3Forms
    try {
      const formDataObj = new FormData(formElement);
      formDataObj.append("access_key", "6c52e0fd-8e14-4a52-861e-fd0cebe1f0ee");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formDataObj)),
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
      } else {
        alert("Oops! Something went wrong with the Web3Forms submission.");
      }
    } catch (error) {
      alert("Oops! Something went wrong with the Web3Forms submission.");
      console.error("Error!", error.message);
    } finally {
      setLoading(false); // Reset loading state
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form fields
      setErrors({}); // Reset errors
    }
  };

  return (
    <div className="container pt-5" data-aos="fade-up" data-aos-duration="1000" id='contact'>
      <h1 className="text-center pb-3 pt-5">Contact Us</h1>
      <div className="row pt-2 border-bottom border-top border-3 pb-5" data-aos="fade-up" data-aos-duration="900">
        <div className="col-md">
          <div className="border-0 BForms pt-2 pb-3">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    placeholder="Enter Name"
                    className={`input-field ${errors.name ? 'is-invalid' : ''}`}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-describedby="nameError"
                  />
                  <label htmlFor="input-field" className="input-label">Name</label>
                  <span className="input-highlight"></span>
                  {errors.name && <p id="nameError" className="text-danger">{errors.name}</p>}
                </div>

                <div className="input-container">
                  <input
                    placeholder="Enter Email"
                    className={`input-field ${errors.email ? 'is-invalid' : ''}`}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-describedby="emailError"
                  />
                  <label htmlFor="input-field" className="input-label">Enter Email</label>
                  <span className="input-highlight"></span>
                  {errors.email && <p id="emailError" className="text-danger">{errors.email}</p>}
                </div>

                <div className="input-container">
                  <input
                    placeholder="Enter Phone No."
                    className={`input-field ${errors.phone ? 'is-invalid' : ''}`}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-describedby="phoneError"
                  />
                  <label htmlFor="input-field" className="input-label">Enter Phone No.</label>
                  <span className="input-highlight"></span>
                  {errors.phone && <p id="phoneError" className="text-danger">{errors.phone}</p>}
                </div>

                <div className="input-container">
                  <textarea
                    className={`input-field ${errors.message ? 'is-invalid' : ''}`}
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Enter Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-describedby="messageError"
                  ></textarea>
                  <label htmlFor="input-field" className="input-label">Enter Message</label>
                  <span className="input-highlight"></span>
                  {errors.message && <p id="messageError" className="text-danger">{errors.message}</p>}
                </div>

                <div className="d-flex justify-content-start ps-4">
                  <button className="mt-3 rounded button" type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md pt-5 pt-md-0" data-aos="fade-up" data-aos-duration="2500">
          <div className="rounded" style={{ width: '100%', height: '450px', overflow: 'hidden', position: 'relative' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9445599082073!2d73.88578847465146!3d18.486170270225198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb433f3a16e5%3A0xefbea874e52e00e5!2sFusion%20Spice%20Hospitality%20Services!5e0!3m2!1sen!2sin!4v1725172511647!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;