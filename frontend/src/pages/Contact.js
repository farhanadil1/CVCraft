import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-28 bg-page flex flex-col items-center px-6 md:px-20 py-16">
        <h1 className="text-4xl md:text-5xl font-head head-gradient mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-paragraph text-center mb-12 max-w-2xl">
          Have questions or feedback about{" "}
          <span className="font-semibold text-primary">CVCraft</span>? Reach out
          using the form below or via our contact info. We’d love to hear from
          you!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl w-full">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-paragraph">
              <FiMail className="text-primary w-6 h-6" />
              <span>support@cvcraft.com</span>
            </div>
            <div className="flex items-center gap-3 text-paragraph">
              <FiPhone className="text-primary w-6 h-6" />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center gap-3 text-paragraph">
              <FiMapPin className="text-primary w-6 h-6" />
              <span>Kolkata, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-3d-light"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-accent transition"
            >
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
