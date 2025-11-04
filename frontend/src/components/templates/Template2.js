import React from 'react';

const safeArray = (data) => Array.isArray(data) ? data : [];

const Template2 = ({ data }) => {
  const personal = data.personal || {};
  const education = safeArray(data.education);
  const experience = safeArray(data.experience);
  const skills = safeArray(data.skills);
  const projects = safeArray(data.projects);
  const quickGuide = safeArray(data.quickGuide);

  const SectionTitle = ({ children }) => (
    <h2 className="text-xl font-bold uppercase mt-6 mb-2 pb-0.5 border-b border-gray-900 tracking-wide">
      {children}
    </h2>
  );

  const TwoColumnRow = ({ left, right, className = '' }) => (
    <div className={`flex justify-between items-start text-sm ${className}`}>
      <span className="font-semibold">{left}</span>
      <span className="text-right text-sm italic">{right}</span>
    </div>
  );

  // Helper to render bullet points from a comma-separated string
  const renderBullets = (bulletString) => {
    if (!bulletString) return null;
    const bullets = bulletString.split(',').map(s => s.trim()).filter(Boolean);
    return (
      <ul className="list-disc ml-6 text-sm space-y-1 mt-1">
        {bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div
        className="font-serif bg-white text-gray-900 p-12 shadow-lg transition-transform duration-300"
        style={{
          width: "794px",          // A4 width at 96 DPI
          minHeight: "1123px",     // A4 height at 96 DPI
          transformOrigin: "top center",
        }}
      >
      {/* Name and Contact Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-normal mb-1">
          {personal.fullName || "John Doe"}
        </h1>
        <div className="text-xs flex flex-wrap justify-center space-x-3 text-gray-700">
          <span>{personal.location || 'Your Location'}</span>
          <span>|</span>
          <span>{personal.email || 'youremail@domain.com'}</span>
          <span>|</span>
          <span>{personal.phone || '123-456-7890'}</span>
          <span>|</span>
          <span>{personal.website || 'yourwebsite.com'}</span>
        </div>
        <div className="text-xs flex flex-wrap justify-center space-x-3 text-gray-700 mt-0.5">
          {personal.linkedin && <span>LinkedIn: {personal.linkedin}</span>}
          {personal.github && personal.linkedin && <span>|</span>}
          {personal.github && <span>GitHub: {personal.github}</span>}
        </div>
      </header>

      {/* Quick Guide */}
      {quickGuide.length > 0 && (
        <section className="mb-4">
          <SectionTitle>Quick Guide</SectionTitle>
          <ul className="list-disc ml-6 text-sm space-y-1">
            {quickGuide.map((item, i) => (
              <li key={i}>{item.text || 'Example bullet point'}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-4">
          <SectionTitle>Education</SectionTitle>
          {education.map((edu, i) => (
            <div key={i} className="mb-3">
              <TwoColumnRow 
                left={`${edu.degree || 'Degree/Major'} at ${edu.institution || 'University Name'}`}
                right={`${edu.dates || 'Sept 20XX - May 20XX'}`}
              />
              {edu.details && <p className="text-sm mt-1">{edu.details}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-4">
          <SectionTitle>Experience</SectionTitle>
          {experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <TwoColumnRow 
                left={`${exp.position || 'Position'} (${exp.company || 'Company'})`}
                right={`${exp.dates || 'June 20XX - Aug 20XX'}`}
              />
              <p className="text-sm italic mb-1">{exp.location || 'City, Country'}</p>
              {renderBullets(exp.bulletPoints)}
            </div>
          ))}
        </section>
      )}

      {/* Publications */}
      {skills.length > 0 && (
        <section className="mb-4">
          <SectionTitle>Skills</SectionTitle>
          {skills.map((pub, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold text-sm">{pub.title || 'Publication Title'}</p>
              <p className="text-xs">{pub.skills || 'Author A, Author B'}</p>
              <p className="text-xs italic">
                {pub.certificates && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 ml-2 hover:underline">
                    [Link]
                  </a>
                )}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-4">
          <SectionTitle>Projects</SectionTitle>
          {projects.map((proj, i) => (
            <div key={i} className="mb-4">
              <TwoColumnRow 
                left={proj.name || 'Project Name'}
                right={proj.link ? <a href={proj.link} className="text-blue-600 hover:underline">Link</a> : null}
              />
              {proj.description && <p className="text-sm">{proj.description}</p>}
              {proj.toolsUsed && (
                <p className="text-xs mt-1">
                  Tools Used: <span className="font-mono">{proj.toolsUsed}</span>
                </p>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
    </div>
  );
};

export default Template2;
