import React from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {

  const handleSubscribe = () => {
    toast.success("Subscribed Sucessfuly")
  }
  return (
    <div className="mt-20 px-4 sm:px-8 md:px-20">
      <Toaster position="top-center" />
      {/* Centered container with max-width */}
      <div className="mx-auto max-w-6xl">
        {/* Top section with logo & social icons */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-6 border-b border-gray-300">
          <div className="flex items-center gap-3">
            <img
              src="./logo.png"
              alt="CVCraft"
              className="h-10 w-auto cursor-pointer"
              draggable={false}
            />
            <Link to={`/`}>
              <h1 className="text-xl mt-2 font-bold font-head text-gradient cursor-pointer">
                CVCraft
              </h1>
            </Link>
          </div>
          <div className="flex gap-3 text-primary flex-wrap">
            <a href="https://x.com/?lang=en-in" target="_blank" rel="noreferrer" className="transform hover:scale-125 transition-transform duration-300">
              <AiFillTwitterCircle size={36} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="transform hover:scale-125 transition-transform duration-300">
              <TbBrandLinkedinFilled size={36} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="transform hover:scale-125 transition-transform duration-300">
              <FaFacebook size={36} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="transform hover:scale-125 transition-transform duration-300">
              <RiInstagramFill size={36} />
            </a>
          </div>
        </div>

        {/* Newsletter & Links */}
        <div className="mt-12 flex flex-col lg:flex-row gap-12">
          {/* Newsletter */}
          <div className="lg:w-2/5 flex flex-col gap-4">
            <h1 className="font-para font-bold text-2xl">Stay Updated</h1>
            <p className="font-para text-paragraph text-sm font-medium">
              Join our Newsletter to stay up-to-date on features and releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-3xl border border-gray-300 py-2.5 px-4 w-full sm:flex-1 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-2 font-semibold font-para text-sm text-white bg-primary rounded-3xl shadow-md hover:bg-accent2 transition-colors duration-300 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </div>
            <p className="font-para text-paragraph text-xs font-medium mt-4">
              By subscribing you agree with our Privacy Policy and provide consent to receive updates.
            </p>
          </div>

          {/* Footer Links */}
          <div className="lg:w-3/5 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { title: "Resume", links: ["Create Resume", "Resume Examples", "Resume Templates"] },
              { title: "Resources", links: ["Resume Help", "Job interview", "Career"] },
              { title: "Our Company", links: ["About Us", "Pricing", "Site Map"] },
              { title: "Support", links: ["Help Section", "FAQ", "Contact Us"] },
            ].map((section, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h1 className="text-sm font-para font-semibold">{section.title}</h1>
                {section.links.map((link, i) => (
                  <p key={i} className="font-para text-paragraph text-xs hover:text-primary cursor-pointer transition-colors">
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pb-6 pt-2 border-t border-gray-300 text-xs text-gray-500 gap-2">
          <p>© 2025 CVCraft</p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <p className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</p>
            <p className="hover:text-primary cursor-pointer transition-colors">Terms of Service</p>
            <p className="hover:text-primary cursor-pointer transition-colors">Cookies Setting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
