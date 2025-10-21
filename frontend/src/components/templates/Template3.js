import React from 'react';

const safeArray = (data) => Array.isArray(data) ? data : [];

const Template3 = ({ data }) => {
  const personal = data.personal || {};
  const academic = safeArray(data.academic); // Data key matches config
  const fieldsOfInterest = safeArray(data.fieldsOfInterest);
  const technicalSkills = safeArray(data.technicalSkills);
  const projects = safeArray(data.projects);
  const strengths = safeArray(data.strengths);
  const hobbies = safeArray(data.hobbies);

  // Replicating the distinct shaded section title style
  const SectionTitle = ({ children }) => (
    <div className="bg-gray-300 py-1 px-2 mt-6 mb-2">
      <h2 className="text-sm font-bold uppercase tracking-wider">{children}</h2>
    </div>
  );

  // Helper to render primary bullet points from a comma-separated string
  const renderBullets = (bulletString) => {
    if (!bulletString) return null;
    const bullets = bulletString.split(',').map(s => s.trim()).filter(s => s.length > 0);
    if (bullets.length === 0) return null;

    return (
      <ul className="list-disc ml-4 text-sm space-y-0.5">
        {bullets.map((bullet, bIdx) => (
          <li key={bIdx} className="text-gray-800">{bullet}</li>
        ))}
      </ul>
    );
  };

  // Helper to render nested bullet points (using a different list style for visual distinction)
  const renderNestedBullets = (bulletString) => {
    if (!bulletString) return null;
    const bullets = bulletString.split(',').map(s => s.trim()).filter(s => s.length > 0);
    if (bullets.length === 0) return null;

    return (
      <ul className="list-[circle] ml-8 text-sm space-y-0.5"> 
        {bullets.map((bullet, bIdx) => (
          <li key={bIdx} className="text-gray-800">{bullet}</li>
        ))}
      </ul>
    );
  };

  // Helper for the contact block formatting
  const ContactInfoBlock = () => (
    <div className="text-xs text-gray-800 mb-4 leading-relaxed">
      <p className="font-bold">{personal.fullName || "John Doe"}</p>
      <p>{personal.streetAddress || "Great county,"}</p>
      <p>{personal.mainRoad || "Main Road,"}</p>
      <p>{personal.cityCountry || "Bombay (M.P.), INDIA"} - {personal.pinCode || "476514"}</p>
      <p>Email Id: <span className='underline'>{personal.email || "youremail@email.com"}</span></p>
      <p>Mobile No.: <span className='font-bold'>{personal.mobile || "1234567890"}</span></p>
      <p>Alt Mob No.: <span className='font-bold'>{personal.altMobile || "1234567890"}</span></p>
    </div>
  );
  
  // Helper for the Academic Details Table
  const AcademicTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="text-left bg-gray-100 font-semibold text-gray-800">
            <th className="p-1.5 border border-gray-400 w-1/5">Examination</th>
            <th className="p-1.5 border border-gray-400 w-2/5">University</th>
            <th className="p-1.5 border border-gray-400 w-1/5">Institute</th>
            <th className="p-1.5 border border-gray-400 w-1/12">Year</th>
            <th className="p-1.5 border border-gray-400 w-1/12">CPI/%</th>
          </tr>
        </thead>
        <tbody>
          {academic.map((item, i) => ( 
            <tr key={i} className="text-gray-700">
              <td className="p-1.5 border border-gray-400">{item.examination || ''}</td>
              <td className="p-1.5 border border-gray-400">{item.university || ''}</td>
              <td className="p-1.5 border border-gray-400">{item.institute || ''}</td>
              <td className="p-1.5 border border-gray-400 text-center">{item.year || ''}</td>
              <td className="p-1.5 border border-gray-400 text-center">{item.cpi || ''}</td>
            </tr>
          ))}
          {/* Always show a placeholder row if the array is empty */}
          {academic.length === 0 && (
            <tr className="text-gray-400 italic">
              <td colSpan="5" className="p-1.5 border border-gray-400 text-center">No academic entries added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
  
  return (
    <div className="font-sans max-w-4xl mx-auto p-12 bg-white text-gray-800 text-base">
      
      {/* Contact Info */}
      <ContactInfoBlock />
      <hr className="border-t border-gray-900 mb-4" />

      {/* Academic Details - Now always visible */}
      <section>
        <SectionTitle>Academic Details</SectionTitle>
        <AcademicTable />
      </section>

      {/* Fields of Interest - Now always visible */}
      <section>
        <SectionTitle>Fields of Interest</SectionTitle>
        {fieldsOfInterest.length > 0 ? (
          <ul className="list-disc ml-4 text-sm space-y-0.5">
            {fieldsOfInterest.map((item, i) => (
              <li key={i}>{item.area || 'Wireless Network and Network Security'}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm italic text-gray-400 ml-4">No fields of interest specified yet.</p>
        )}
      </section>

      {/* Technical Skills - Now always visible */}
      <section>
        <SectionTitle>Technical Skills</SectionTitle>
        {technicalSkills.length > 0 ? (
          <div className="text-sm space-y-1">
            {technicalSkills.map((skill, i) => (
              <p key={i}>
                <span className="font-bold mr-1">{skill.category || 'Languages'}:</span>
                {skill.details || 'C, C++, Java'}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-sm italic text-gray-400 ml-4">No technical skills added yet.</p>
        )}
      </section>

      {/* Major Projects and Seminar - Now always visible */}
      <section>
        <SectionTitle>Major Projects and Seminar</SectionTitle>
        {projects.length > 0 ? (
          <div className="space-y-4">
            {projects.map((proj, i) => (
              <div key={i}>
                <p className="font-bold text-sm mb-1">
                  {i + 1}. {proj.title || 'Media Access Control Controlling'}
                  <span className='font-normal ml-3 text-xs'>
                    (Guide: {proj.guide || 'Prof. John Doe'}, {proj.duration || 'Jan’14 - Aug’14'})
                  </span>
                </p>
                {proj.primaryObjective && <p className="text-sm italic mb-1">Objective: {proj.primaryObjective}</p>}
                
                {renderBullets(proj.bulletDetails)}
                
                {renderNestedBullets(proj.subBullets)}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm italic text-gray-400 ml-4">No major projects added yet.</p>
        )}
      </section>
      
      {/* Strengths - Now always visible */}
      <section>
        <SectionTitle>Strengths</SectionTitle>
        {strengths.length > 0 ? (
          <ul className="list-disc ml-4 text-sm space-y-0.5">
            {strengths.map((item, i) => (
              <li key={i}>{item.item || 'Positive Attitude, Social Interaction'}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm italic text-gray-400 ml-4">No strengths listed yet.</p>
        )}
      </section>

      {/* Interest and Hobbies - Now always visible */}
      <section>
        <SectionTitle>Interest and Hobbies</SectionTitle>
        {hobbies.length > 0 ? (
          <ul className="list-disc ml-4 text-sm space-y-0.5">
            {hobbies.map((item, i) => (
              <li key={i}>{item.item || 'Solving Puzzles, Playing Chess'}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm italic text-gray-400 ml-4">No hobbies listed yet.</p>
        )}
      </section>
      
    </div>
  );
};

export default Template3;