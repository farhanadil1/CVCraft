import React from 'react';

const safeArray = (data) => Array.isArray(data) ? data : [];

const Template1 = ({ data }) => {
  const personal = data.personal || {};
  const workExperience = safeArray(data.workExperience);
  const projects = safeArray(data.projects);
  const education = safeArray(data.education);
  const publications = safeArray(data.publications);
  const skills = safeArray(data.skills);

  const SectionTitle = ({ children }) => (
    <h2 className="text-lg font-bold uppercase tracking-widest pt-4 pb-1 mb-2 border-b-2 border-gray-900">
      {children}
    </h2>
  );

  const TwoColumnRow = ({ left, right }) => (
    <div className="flex justify-between items-start text-sm mb-1">
      <span className="font-semibold">{left}</span>
      <span className="text-right">{right}</span>
    </div>
  );

  return (
    <div className="font-serif max-w-3xl mx-auto p-12 bg-white text-gray-800 shadow-lg">
      {/* Name and Contact Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-normal uppercase mb-2">
          {personal.fullName || "Your Name"}
        </h1>
        <div className="text-sm flex flex-wrap justify-center space-x-4">
          <span className="flex items-center space-x-1">
            <span className="font-bold">@</span>
            <span>{personal.username || "username"}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="font-bold">in</span>
            <span>{personal.linkedin || "linkedin"}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="font-bold">@</span>
            <span>{personal.website || "mysite.com"}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="font-bold">✉️</span>
            <span>{personal.email || "email@mysite.com"}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="font-bold">📞</span>
            <span>{personal.phone || "+00.00.000.000"}</span>
          </span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <SectionTitle>Summary</SectionTitle>
        <p className="text-sm italic">
          {
            typeof data.summary === 'string'
            ? data.summary
            : data.summary && typeof data.summary.content === 'string' // Check if it's an object with a 'content' key (common editor output)
            ? data.summary.content
            : "This CV can be automatically compiled and published..." // Fallback text
          }
        </p>
      </section>

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <section className="mb-6">
          <SectionTitle>Work Experience</SectionTitle>
          {workExperience.map((item, index) => (
            <div key={index} className="mb-4">
              <TwoColumnRow left={item.designation || "Designation"} right={item.duration || "Date Range"} />
              <p className="text-sm">{item.details || "Description of responsibilities and achievements."}</p>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-6">
          <SectionTitle>Projects</SectionTitle>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <TwoColumnRow
                left={project.name || "Some Project"}
                right={<a href={project.link} className="text-blue-600 hover:underline">{project.link ? "Link to Demo" : ""}</a>}
              />
              <p className="text-sm">{project.description || "Project description goes here and can wrap multiple lines."}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <SectionTitle>Education</SectionTitle>
          {education.map((edu, index) => (
            <div key={index} className="mb-2">
              <TwoColumnRow
                left={`${edu.duration || '20XX - present'}`}
                right={`${edu.gpaOrGrade || '(GPA: 4.0/4.0)'}`}
              />
              <p className="text-sm ml-4 -mt-1">{edu.degree || 'Degree/Class'} at {edu.institution || 'University/Board'}</p>
            </div>
          ))}
        </section>
      )}

      {/* Publications */}
      {publications.length > 0 && (
        <section className="mb-6">
          <SectionTitle>Publications</SectionTitle>
          {publications.map((pub, index) => (
            <div key={index} className="text-sm mb-2">
              <p>{pub.citation}</p>
              {pub.url && (
                <p>URL: <a href={pub.url} className="text-blue-600 hover:underline">{pub.url}</a></p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
            {skills.map((skill, index) => (
              <div key={index} className="flex">
                <span className="font-semibold whitespace-nowrap mr-2">{skill.name || "Skill Category"}</span>
                <span className="flex-1">{skill.details || "Skill 1, Skill 2, etc."}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-8 pt-4 border-t border-gray-300">
        Last updated: {data.footerDate || "August 8, 2025"}
      </div>
    </div>
  );
};

export default Template1;