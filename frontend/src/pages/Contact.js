import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! (Demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative bg-page overflow-hidden">
      <Navbar />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 rounded-full blur-3xl opacity-40" />

      {/* HERO */}
      <section className="relative pt-36 pb-16 px-6 md:px-20 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm tracking-wide backdrop-blur">
          ✦ Get in touch
        </span>

        <h1 className="mt-8 text-4xl md:text-5xl font-head head-gradient max-w-3xl mx-auto">
          Let’s talk about your resume
        </h1>

        <p className="mt-8 text-paragraph text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Have questions or feedback about{" "}
          <span className="font-medium text-primary">CVCraft</span>?  
          Reach out anytime - we’re happy to help.
        </p>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse" />
      </div>

      {/* CONTENT */}
      <section className="relative py-20 px-6 md:px-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-head mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 text-paragraph">
              {[
                {
                  icon: <FiMail />,
                  text: "imfarhan712@gmail.com",
                },
                {
                  icon: <FiPhone />,
                  text: "+91 12345 67890",
                },
                {
                  icon: <FiMapPin />,
                  text: "Kolkata, India",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 transition"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 text-primary group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <span className="group-hover:translate-x-1 transition">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="group relative rounded-2xl border bg-white/70 backdrop-blur-xl p-8 transition-all duration-300 hover:shadow-xl"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <h3 className="relative font-head text-xl mb-6">
              Send us a message
            </h3>

            <div className="relative space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-primary transition"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-primary transition"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-gray-300 py-3 resize-none focus:outline-none focus:border-primary transition"
              />

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-accent transition"
              >
                <FiSend />
                Send message
              </button>
            </div>
          </form>

        </div>
      </section>

      {/* FOOTER LINE */}
      <section className="pb-10 text-center">
        <p className="text-muted text-sm tracking-wide">
          We usually respond within 24 hours
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
