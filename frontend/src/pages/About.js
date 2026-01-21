import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="relative bg-page overflow-hidden">
      <Navbar />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 rounded-full blur-3xl opacity-40" />

      {/* HERO */}
      <section className="relative pt-36 pb-16 px-6 md:px-20 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm tracking-wide backdrop-blur">
          ✦ About CVCraft
        </span>

        <h1 className="mt-8 text-4xl md:text-5xl font-head head-gradient leading-tight max-w-4xl mx-auto">
          A better way to build resumes - clean, modern, and effective
        </h1>

        <p className="mt-8 text-paragraph text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          <span className="font-medium text-primary">CVCraft</span> is a
          minimalist resume builder designed to help you create visually
          polished, ATS-friendly CVs with zero friction.
        </p>
      </section>

      {/* Animated Divider */}
      <div className="relative flex justify-center">
        <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse" />
      </div>

      {/* CONTENT */}
      <section className="relative py-28 px-6 md:px-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-head mb-6">
              Designed for clarity & impact
            </h2>

            <p className="text-paragraph mb-10 leading-relaxed">
              CVCraft focuses on what actually matters in modern hiring -
              structure, readability, and professional aesthetics. No clutter.
              No distractions. Just resumes that work.
            </p>

            <ul className="space-y-5 text-paragraph cursor-pointer">
              {[
                "Modern & minimal templates",
                "Live resume preview",
                "One-click PDF export",
                "ATS-optimized layouts",
                "Mobile & desktop friendly",
              ].map((item) => (
                <li
                  key={item}
                  className="group flex items-center gap-4 transition"
                >
                  <span className="flex h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid gap-6">
            {[
              {
                title: "Why CVCraft?",
                desc: "Built to remove complexity and help you focus on presenting your skills clearly.",
              },
              {
                title: "Who is it for?",
                desc: "Students, freshers, and professionals aiming for a modern recruiter-ready CV.",
              },
              {
                title: "Design philosophy",
                desc: "Whitespace, typography, and subtle accents inspired by premium SaaS products.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group cursor-pointer relative rounded-2xl border bg-white/70 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <h3 className="relative font-head text-lg mb-2">
                  {card.title}
                </h3>
                <p className="relative text-paragraph text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="pb-12 text-center">
        <p className="text-muted text-sm tracking-wide">
          Simple • Professional • Recruiter-friendly
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default About;
