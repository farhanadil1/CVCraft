import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-28 bg-page flex flex-col items-center px-6 md:px-20 py-16 text-gray-800">
        <h1 className="text-4xl md:text-5xl font-head head-gradient mb-6 text-center">
          About CVCraft
        </h1>

        <p className="max-w-3xl text-paragraph text-lg md:text-xl text-center leading-relaxed mb-8">
          <span className="font-semibold text-primary">CVCraft</span> is a
          modern, minimal, and intuitive online CV/resume builder designed to
          help users create professional resumes effortlessly. Our goal is to
          make CV creation simple, aesthetic, and ATS-friendly for all job
          seekers.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
          <div className="bg-white p-6 rounded-xl shadow-3d-light hover:shadow-lg transition">
            <h2 className="font-head text-xl head-gradient mb-3">Features</h2>
            <ul className="list-disc list-inside text-paragraph space-y-1">
              <li>Multiple modern resume templates</li>
              <li>Live preview while editing</li>
              <li>Download as PDF or print directly</li>
              <li>ATS-friendly and professional layouts</li>
              <li>Responsive and mobile-friendly design</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-3d-light hover:shadow-lg transition">
            <h2 className="font-head text-xl head-gradient mb-3">
              Why CVCraft?
            </h2>
            <ul className="list-disc list-inside text-paragraph space-y-1">
              <li>Fast and easy to use for anyone</li>
              <li>Customizable sections and templates</li>
              <li>Minimalist design with modern aesthetics</li>
              <li>Save time and get noticed by recruiters</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
