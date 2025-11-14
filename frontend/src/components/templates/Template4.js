import { Mail, Phone, Globe } from "lucide-react";
import React from "react";

// Helper function to safely access array data
const safeArray = (data) => (Array.isArray(data) ? data : []);

const Template4 = ({ data }) => {
  // --- Data Mapping ---
  const header = data.personalHeader || {};
  const profileSummary = data.profileSummary || {};
  const contact = data.contactDetails || {};
  const personal = data.personalInfo || {};
  const skills = safeArray(data.skills);
  const experience = safeArray(data.experience);
  const education = safeArray(data.education);
  const certifications = safeArray(data.certifications);

  // Helper to render bullet points from a comma-separated string
  const renderBullets = (bulletString) => {
    if (!bulletString) return null;
    const bullets = bulletString
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    if (bullets.length === 0) return null;

    return (
      <ul className="list-none space-y-2 mt-2">
        {bullets.map((bullet, bIdx) => (
          <li key={bIdx} className="relative pl-4 text-sm text-gray-700">
            {/* Custom bullet point styling (small circle) */}
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
            {bullet}
          </li>
        ))}
      </ul>
    );
  };

  // --- Left Sidebar Component (Dark Background) ---
  const LeftSidebar = () => (
    <div className="w-full bg-slate-800 text-white p-6 md:p-8 space-y-6 md:space-y-8 h-full">
      {/* Name and Photo */}
      <div className="flex flex-col items-center text-center pb-4 border-b border-slate-700">
        <h1 className="text-3xl font-extrabold tracking-wide mb-3 uppercase">
          {header.fullName || "JOHN MILLER"}
        </h1>
        {/* Profile Picture (Placeholder or user-provided URL) */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-600 shadow-xl">
          <img
            src={
              header.photoUrl ||
              "https://placehold.co/128x128/334155/ffffff?text=JM"
            }
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/128x128/334155/ffffff?text=JM";
            }}
          />
        </div>
      </div>

      {/* Profile Summary */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold uppercase tracking-wider border-b-2 border-slate-500 pb-1">
          Profile Summary
        </h2>
        <p className="text-xs leading-relaxed text-slate-300">
          {profileSummary.summaryText ||
            "Experienced Data Analyst with over 5+ years of expertise in SQL, Python, Excel, Power BI Service, and Birt Reporting tool. Strong communicator with a track record of translating complex data into actionable business insights."}
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold uppercase tracking-wider border-b-2 border-slate-500 pb-1">
          Contact Details
        </h2>
        <div className="text-xs space-y-2 text-slate-300">
          <p className="flex items-center space-x-2">
            <Mail className="w-3 h-3 text-slate-400" />
            <span>{contact.email || "Xxxxxxx@gmail.com"}</span>
          </p>
          <p className="flex items-center space-x-2">
            <Phone className="w-3 h-3 text-slate-400" />
            <span>{contact.phone || "+91 00 00 00 00 00"}</span>
          </p>
          <p className="flex items-center space-x-2">
            <Globe className="w-3 h-3 text-slate-400" />
            <span className="truncate">
              {contact.linkedin || "linkedin.com/in/username"}
            </span>
          </p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold uppercase tracking-wider border-b-2 border-slate-500 pb-1">
          Personal Information
        </h2>
        <div className="text-xs space-y-1 text-slate-300">
          <p>
            <span className="font-bold block">Citizenship:</span>{" "}
            {personal.citizenship || "Indian"}
          </p>
          <p>
            <span className="font-bold block">Family:</span>{" "}
            {personal.familyStatus || "Married with children"}
          </p>
          <p>
            <span className="font-bold block">Languages:</span>{" "}
            {personal.languages || "English, Hindi, Telugu"}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold uppercase tracking-wider border-b-2 border-slate-500 pb-1">
          Skills
        </h2>
        <ul className="text-xs leading-relaxed text-slate-300 list-none space-y-1">
          {skills.length > 0 ? (
            skills.map((item, i) => (
              <li key={i} className="font-medium">
                {item.skillItem || "SQL, SSMS, Power BI, Python"}
              </li>
            ))
          ) : (
            <li className="italic text-slate-500">No skills listed yet.</li>
          )}
        </ul>
      </div>
    </div>
  );

  // --- Right Content Component (Light Background) ---
  const RightContent = () => (
    <div className="w-full bg-white p-6 md:p-8 space-y-8">
      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-gray-300 pb-2 mb-4 uppercase tracking-wider">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.length > 0 ? (
            experience.map((job, i) => (
              <div key={i}>
                <div className="flex justify-between items-start text-sm mb-2">
                  <h3 className="font-semibold text-slate-800">
                    {job.title || "DATA ANALYST"} at{" "}
                    {job.company || "XXXX (Hyderabad)"}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 flex-shrink-0 ml-4">
                    {job.dates || "2018.08-2024.05"}
                  </span>
                </div>
                {renderBullets(job.description)}
                {experience.length > 1 && i < experience.length - 1 && (
                  <div className="mt-4 border-b border-dashed border-gray-200"></div>
                )}
              </div>
            ))
          ) : (
            <p className="text-sm italic text-gray-400">
              No experience entries added yet.
            </p>
          )}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-gray-300 pb-2 mb-4 uppercase tracking-wider">
          Education
        </h2>
        <div className="space-y-4">
          {education.length > 0 ? (
            education.map((edu, i) => (
              <div key={i}>
                <div className="flex justify-between items-start text-sm">
                  <h3 className="font-semibold text-slate-800">
                    {edu.degree || "MASTER OF COMPUTER APPLICATION (MCA)"}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 flex-shrink-0 ml-4">
                    {edu.dates || "2012-2015"}
                  </span>
                </div>
                <p className="text-sm text-gray-600 italic">
                  {edu.university || "JNTU Kakinada University."}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm italic text-gray-400">
              No education entries added yet.
            </p>
          )}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-gray-300 pb-2 mb-4 uppercase tracking-wider">
          Certifications
        </h2>
        <div className="space-y-4">
          {certifications.length > 0 ? (
            certifications.map((cert, i) => (
              <div key={i}>
                <div className="flex justify-between items-start text-sm">
                  <h3 className="font-semibold text-slate-800">
                    {cert.name ||
                      "INTRODUCTION TO DATA ANALYSIS USING MICROSOFT EXCEL"}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 flex-shrink-0 ml-4">
                    {cert.dates || "July-3-2024"}
                  </span>
                </div>
                <p className="text-sm text-gray-600 italic">
                  {cert.issuer || "Coursera, IBM"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm italic text-gray-400">
              No certifications listed yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );

  return (
    // Main Container
    <div className="font-sans w-full mx-auto my-6 bg-white shadow-2xl rounded-lg">
      <div className="grid grid-cols-3">
        {/* Left Column (1/3 width, dark) */}
        <div className="col-span-1">
          <LeftSidebar />
        </div>

        {/* Right Column (2/3 width, light) */}
        <div className="col-span-2">
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default Template4;
