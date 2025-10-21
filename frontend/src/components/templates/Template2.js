import React from 'react';

const safeArray = (data) => Array.isArray(data) ? data : [];

const Template2 = ({ data }) => {
  const personal = data.personal || {};
  const education = safeArray(data.education);
  const experience = safeArray(data.experience);
  const publications = safeArray(data.publications);
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
    const bullets = bulletString.split(',').map(s => s.trim()).filter(s => s.length > 0);
    if (bullets.length === 0) return null;

    return (
      <ul className="list-disc ml-6 text-sm space-y-1 mt-1">
        {bullets.map((bullet, bIdx) => (
          <li key={bIdx}>{bullet}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="font-serif max-w-3xl mx-auto p-12 bg-white text-gray-900 border border-gray-200">
      {/* Name and Contact Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-normal mb-1">
          {personal.fullName || "John Doe"}
        </h1>
        <div className="text-xs flex flex-wrap justify-center space-x-3 text-gray-700">
            <span>{personal.location || 'Your Location'}</span>
            <span>|</span>
            <span>{personal.email || 'youremail@yourdomain.com'}</span>
            <span>|</span>
            <span>{personal.phone || '0541 999 99 99'}</span>
            <span>|</span>
            <span>{personal.website || 'yourwebsite.com'}</span>
        </div>
        <div className="text-xs flex flex-wrap justify-center space-x-3 text-gray-700 mt-0.5">
            {personal.linkedin && <span>LinkedIn: {personal.linkedin}</span>}
            {personal.github && personal.linkedin && <span>|</span>}
            {personal.github && <span>GitHub: {personal.github}</span>}
        </div>
      </header>


      {/* Quick Guide/Other Bullet List */}
      {quickGuide.length > 0 && (
        <section className="mb-4">
          <SectionTitle>Quick Guide</SectionTitle>
          <ul className="list-disc ml-6 text-sm space-y-1">
            {quickGuide.map((item, i) => (
              <li key={i}>{item.text || 'Section bullet point'}</li>
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
                  className="mb-0.5"
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
                  className="mb-0.5" 
              />
              <p className="text-sm italic mb-1">{exp.location || 'City, Country'}</p>
              {renderBullets(exp.bulletPoints)}
            </div>
          ))}
        </section>
      )}

      {/* Publications */}
      {publications.length > 0 && (
        <section className="mb-4">
          <SectionTitle>Publications</SectionTitle>
          {publications.map((pub, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold text-sm">{pub.title || 'Publication Title'}</p>
              <p className="text-xs">
                {pub.authors || 'Author A, Author B'}
              </p>
              <p className="text-xs italic">
                  {pub.citation || 'Journal Name, Vol(Issue): Pages, Year'}
                  {pub.link && (
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
                    left={`${proj.name || 'Project Name'}`} 
                    right={proj.link ? <a href={proj.link} className="text-blue-600 hover:underline">github.com/name/repo</a> : null}
                    className="mb-1"
                />
                {proj.description && <p className="text-sm">{proj.description}</p>}
                {proj.toolsUsed && <p className="text-xs mt-1">Tools Used: <span className='font-mono'>{proj.toolsUsed}</span></p>}
            </div>
          ))}
        </section>
      )}
      
    </div>
  );
};

export default Template2;