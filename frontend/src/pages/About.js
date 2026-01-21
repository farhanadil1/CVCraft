import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-page">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 md:px-20 flex flex-col items-center text-center">
        <span className="mb-4 px-4 py-1 rounded-full border border-primary/30 text-sm text-primary tracking-wide">
          About the Product
        </span>

        <h1 className="text-4xl md:text-6xl font-head head-gradient mb-6 max-w-3xl">
          Craft resumes that actually get noticed
        </h1>

        <p className="text-paragraph text-lg md:text-xl max-w-2xl leading-relaxed">
          <span className="font-medium text-primary">CVCraft</span> is a clean,
          modern resume builder focused on clarity, aesthetics, and
          ATS-compatibility helping you build professional CVs without stress.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="w-full flex justify-center">
        <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-head mb-6">
              What CVCraft offers
            </h2>
            <p className="text-paragraph mb-8 leading-relaxed">
              Designed for students, professionals, and job seekers who want a
              resume that looks premium, reads clean, and performs well with
              recruiters and ATS systems.
            </p>

            <ul className="space-y-4 text-paragraph">
              <li className="flex items-start gap-3">
                <span className="text-primary">✦</span>
                Modern and minimal resume templates
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✦</span>
                Real-time preview while editing
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✦</span>
                One-click PDF export
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✦</span>
                Fully ATS-optimized layouts
              </li>
            </ul>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid gap-6">
            <div className="rounded-2xl border bg-white p-6 hover:shadow-md transition">
              <h3 className="font-head text-lg mb-2">Why CVCraft?</h3>
              <p className="text-paragraph">
                Built to remove clutter and guesswork from resume creation
                only what matters, nothing extra.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 hover:shadow-md transition">
              <h3 className="font-head text-lg mb-2">Who is it for?</h3>
              <p className="text-paragraph">
                Students, freshers, and professionals who want a resume that
                looks clean, modern, and recruiter-ready.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 hover:shadow-md transition">
              <h3 className="font-head text-lg mb-2">Design philosophy</h3>
              <p className="text-paragraph">
                Minimal typography, balanced spacing, and subtle accents
                inspired by modern hiring platforms.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER LINE */}
      <section className="pb-20 text-center">
        <p className="text-muted text-sm">
          Simple. Professional. Recruiter-friendly.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default About;
