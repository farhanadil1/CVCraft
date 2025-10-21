import React from 'react';
// Reverted back to lucide-react as react-icons/fa caused a build error.
import { 
  BookOpen, Briefcase, Code, MessageSquare, 
  GraduationCap, MapPin, Calendar, GitBranch, 
  Phone, Mail, Linkedin 
} from 'lucide-react';

const safeArray = (data) => Array.isArray(data) ? data : [];

const Template5 = ({ data }) => {
  // --- Data Mapping ---
  const header = data.personalHeader || {};
  const contact = data.contact || {};
  const education = safeArray(data.education);
  const work = safeArray(data.work);
  const projects = safeArray(data.projects);
  const communication = safeArray(data.communication);

  // --- Helper Components ---

  // Renders the main section header with an icon
  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center text-lg font-semibold text-slate-700 mt-8 mb-3 border-b-2 border-slate-700/10 pb-1">
      <Icon className="w-5 h-5 mr-2 text-sky-500" />
      <span className="uppercase">{title}</span>
    </div>
  );

  // Converts comma-separated text into a nested list structure
  const renderDetailsList = (detailsString) => {
    if (!detailsString) return null;
    const items = detailsString.split(',').map(s => s.trim()).filter(s => s.length > 0);
    if (items.length === 0) return null;

    return (
      <ul className="list-none ml-2 mt-1 space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-gray-700 relative pl-4">
            {/* Custom bullet using the '»' character for visual flair */}
            {/* Added leading-none to stabilize the bullet position */}
            <span className="absolute left-0 top-0 text-sky-500 font-bold text-base leading-none">
                &raquo;
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  // --- Main Render ---
  return (
    <div className="font-sans max-w-3xl mx-auto p-8 bg-white text-gray-800">

      {/* Header and Contact Bar */}
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          {header.fullName || "John Doe"}
          <span className="text-xl font-normal text-sky-500 ml-2">{header.title || "ENG"}</span>
        </h1>
        <p className="text-lg font-medium text-gray-600 mb-2">
          {header.title || "Machine Learning Specialist"}
        </p>
        <p className="text-sm italic text-gray-500 mb-4">
          {header.subSummary || "Something about myself (mini cover letter or summary)"}
        </p>

        {/* Contact Bar - IMPORTANT: Added 'leading-none' to 'flex items-center' containers */}
        <div className="flex flex-wrap items-center text-xs text-gray-600 border-t border-b border-gray-200 py-2 -mx-2">
          {contact.phone && (
            <p className="flex items-center mx-2 my-1 leading-none">
              <Phone className="w-3 h-3 mr-1 text-sky-500 shrink-0" />
              <span>{contact.phone}</span>
            </p>
          )}
          {contact.email && (
            <p className="flex items-center mx-2 my-1 leading-none">
              <Mail className="w-3 h-3 mr-1 text-sky-500 shrink-0" />
              <a href={`mailto:${contact.email}`} className="text-sky-600 underline hover:no-underline">{contact.email}</a>
            </p>
          )}
          {contact.github && (
            <p className="flex items-center mx-2 my-1 leading-none">
              <GitBranch className="w-3 h-3 mr-1 text-sky-500 shrink-0" />
              <a href={contact.github.startsWith('http') ? contact.github : `https://github.com/${contact.github}`} target="_blank" rel="noopener noreferrer" className="text-sky-600 underline hover:no-underline">
                {contact.github}
              </a>
            </p>
          )}
          {contact.linkedin && (
            <p className="flex items-center mx-2 my-1 leading-none">
              <Linkedin className="w-3 h-3 mr-1 text-sky-500 shrink-0" />
              <a href={contact.linkedin.startsWith('http') ? contact.linkedin : `https://linkedin.com/in/${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sky-600 underline hover:no-underline">
                {contact.linkedin}
              </a>
            </p>
          )}
        </div>
      </header>
      
      {/* Education Section */}
      <section>
        <SectionHeader icon={GraduationCap} title="Education" />
        <div className="space-y-4">
          {education.length > 0 ? (
            education.map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                <div className="md:col-span-2">
                  <h3 className="font-bold text-gray-800">{item.school || 'School/University Name'}</h3>
                  <p className="text-gray-600">{item.program || 'Program'}</p>
                </div>
                {/* Fixed: Added 'leading-none' to ensure icons and text align vertically */}
                <div className="md:col-span-1 text-left md:text-right text-gray-500 space-y-0.5">
                  <p className="flex items-center justify-start md:justify-end leading-none">
                    <Calendar className="w-3 h-3 mr-1 shrink-0" />
                    {item.dates || 'Start - End'}
                  </p>
                  <p className="flex items-center justify-start md:justify-end leading-none">
                    <MapPin className="w-3 h-3 mr-1 shrink-0" />
                    {item.location || 'Location'}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm italic text-gray-400">No education entries added yet.</p>
          )}
        </div>
      </section>

      {/* Work Experience Section */}
      <section>
        <SectionHeader icon={Briefcase} title="Work Experience" />
        <div className="space-y-6">
          {work.length > 0 ? (
            work.map((item, i) => (
              <div key={i}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm mb-1">
                  <div className="md:col-span-2">
                    <h3 className="font-bold text-gray-800">{item.company || 'Company Name'}</h3>
                    <p className="text-gray-600">{item.position || 'Position'}</p>
                  </div>
                  {/* Fixed: Added 'leading-none' to ensure icons and text align vertically */}
                  <div className="md:col-span-1 text-left md:text-right text-gray-500 space-y-0.5">
                    <p className="flex items-center justify-start md:justify-end leading-none">
                      <Calendar className="w-3 h-3 mr-1 shrink-0" />
                      {item.dates || 'Start - End'}
                    </p>
                    <p className="flex items-center justify-start md:justify-end leading-none">
                      <MapPin className="w-3 h-3 mr-1 shrink-0" />
                      {item.location || 'Location'}
                    </p>
                  </div>
                </div>
                {renderDetailsList(item.details)}
              </div>
            ))
          ) : (
            <p className="text-sm italic text-gray-400">No work experience entries added yet.</p>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <SectionHeader icon={Code} title="Projects" />
        <div className="space-y-6">
          {projects.length > 0 ? (
            projects.map((item, i) => (
              <div key={i}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm mb-1">
                  <div className="md:col-span-2">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      {/* Icon based on project type */}
                      <span className="flex items-center leading-none">
                          {item.type === 'academic' && <BookOpen className="w-3 h-3 mr-1 text-sky-500 shrink-0" />}
                          {item.type === 'personal' && <GitBranch className="w-3 h-3 mr-1 text-sky-500 shrink-0" />}
                          {item.type === 'work' && <Briefcase className="w-3 h-3 mr-1 text-sky-500 shrink-0" />}
                          {item.name || 'Project Name'}
                      </span>
                      <span className="ml-2 text-xs font-normal text-gray-500 capitalize">
                         ({item.type || 'Academic'})
                      </span>
                    </h3>
                  </div>
                  {/* Fixed: Added 'leading-none' to ensure icons and text align vertically */}
                  <div className="md:col-span-1 text-left md:text-right text-gray-500 space-y-0.5">
                    <p className="flex items-center justify-start md:justify-end leading-none">
                      <Calendar className="w-3 h-3 mr-1 shrink-0" />
                      {item.dates || 'Start - End'}
                    </p>
                  </div>
                </div>
                {renderDetailsList(item.details)}
              </div>
            ))
          ) : (
            <p className="text-sm italic text-gray-400">No project entries added yet.</p>
          )}
        </div>
      </section>

      {/* Communication/Language Level Section */}
      <section>
        <SectionHeader icon={MessageSquare} title="Communication" />
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                {communication.length > 0 ? (
                    communication.map((item, i) => (
                        <th key={i} className="p-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 w-1/4">
                            {item.language || 'Language'}
                        </th>
                    ))
                ) : (
                    <th className="p-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Language</th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                {communication.length > 0 ? (
                    communication.map((item, i) => (
                        <td key={i} className="p-2 text-sm font-medium text-sky-600">
                            {item.level || 'Level'}
                        </td>
                    ))
                ) : (
                    <td className="p-2 text-sm italic text-gray-400">No languages added.</td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default Template5;
