import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Adil Farhan",
    role: "Software Engineer",
    image: "./user7.png",
    review:
      "The idea is great, but I had trouble formatting my resume the way I wanted. Hoping for more flexibility in future updates."
  },
  {
    name: "Ashish Roy",
    role: "Quality Analyst",
    image: "./user6.png",
    review:
      "CVcraft completely transformed the way I approached resume writing. I realized my resume wasn’t optimized for ATS systems CVcraft’s builder made it incredibly easy to create a clean, professional layout tailored to my industry."
  },
  {
    name: "Soophie Rayen",
    role: "Data Analyst",
    image: "./user3.png",
    review:
      "I was struggling to get interview calls until I revamped my resume with CVcraft. The layout and keyword suggestions made all the difference."
  },
  {
    name: "Sufyan Ansari",
    role: "Marketing Consultant",
    image: "./user8.png",
    review:
      "I created my first professional CV in under 10 minutes. The templates are modern and clean, and the tips along the way were incredibly helpful. Landed two interviews within a week!"
  },
  {
    name: "Zenia Zealous",
    role: "DevOps",
    image: "./user5.png",
    review:
      "I’ve tried a few resume builders, but CVCraft stands out. It’s intuitive, customizable, and doesn’t bombard you with ads. Highly recommend for anyone serious about their career."
  },
  {
    name: "Alivia Chakraborty",
    role: "HR Executive",
    image: "./user4.png",
    review:
      "I loved how easy it was to tailor my resume for different roles. The export options are great, and the cover letter builder is a bonus!"
  }
];

export default function UsersReview() {
  return (
    <section className="px-6 md:px-20 py-6 bg-gradient-to-b from-[#f9fafc] to-[#eef2f8]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-paragraph font-para text-sm md:text-sm">
          Real stories from people who crafted their dream resumes
        </p>
      </div>

      {/* Review Cards */}
      <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-3 justify-center">
        {reviews.map((user, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group backdrop-blur-xl 
                      p-6
                       hover:shadow-[0_8px_25px_rgba(40,88,193,0.15)] 
                       transition-all duration-300 cursor-pointer hover:-translate-y-2"
          >
            <div className="group absolute inset-0 bg-gradient-to-br from-primary/10 to-accent2/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center mb-4">
              <img
                src={user.image}
                alt={user.name}
                className="rounded-full w-14 h-14 ring-2 ring-primary/30 group-hover:ring-primary transition-all duration-300"
                draggable={false}
              />
              <div className="ml-4 text-left">
                <h3 className="font-para font-semibold text-base text-gray-900">
                  {user.name}
                </h3>
                <p className="text-sm font-para text-paragraph">{user.role}</p>
              </div>
            </div>

            <p className="font-para text-gray-700 text-xs text-left leading-relaxed">
              “{user.review}”
            </p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-16">
        <button
          className="px-6 py-3 font-semibold font-para text-sm text-white 
                     bg-gradient-to-r from-indigo-400 to-primary rounded-full shadow-xl 
                     hover:shadow-[0_6px_20px_rgba(40,88,193,0.4)] hover:scale-105 
                     transition-all duration-300"
        >
          See More Reviews
        </button>
      </div>
    </section>
  );
}
