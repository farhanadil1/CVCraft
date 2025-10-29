export const template2Config = {
  id: "template2",
  name: "Classic Two-Column CV",
  sections: [
    {
      name: "personal",
      label: "Personal Info",
      type: "object",
      fields: [
        { name: "fullName", label: "Full Name", type: "text" },
        { name: "location", label: "Location", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone Number", type: "text" },
        { name: "website", label: "Website URL", type: "text" },
        { name: "linkedin", label: "LinkedIn URL", type: "text" },
        { name: "github", label: "GitHub URL", type: "text" },
      ],
    },
    // Education Section (Type: array)
    {
      name: "education",
      label: "Education",
      type: "array",
      fields: [
        { name: "degree", label: "Degree/Major (e.g., BS in CS)", type: "text" },
        { name: "institution", label: "Institution/University", type: "text" },
        { name: "dates", label: "Date Range (e.g., Sept 20XX - May 20XX)", type: "text" },
        { name: "details", label: "GPA or Coursework (Long Text)", type: "text", isLarge: true },
      ],
    },
    // Work Experience Section (Type: array)
    {
      name: "experience",
      label: "Experience",
      type: "array",
      fields: [
        { name: "position", label: "Job Title/Position", type: "text" },
        { name: "company", label: "Company Name", type: "text" },
        { name: "location", label: "Location (City, Country)", type: "text" },
        { name: "dates", label: "Duration (e.g., June 20XX - Aug 20XX)", type: "text" },
        { name: "bulletPoints", label: "Key Achievements (Comma-separated list)", type: "text", isLarge: true },
      ],
    },
    // Publications Section (Type: array)
    {
      name: "skills",
      label: "Skills",
      type: "array",
      fields: [
        { name: "title", label: "Publication Title", type: "text" },
        { name: "authors", label: "Authors (Comma-separated)", type: "text" },
        { name: "citation", label: "Journal/Citation Details", type: "text", isLarge: true },
        { name: "link", label: "Link/DOI URL", type: "url" },
      ],
    },
    // Projects Section (Type: array)
    {
      name: "projects",
      label: "Projects",
      type: "array",
      fields: [
        { name: "name", label: "Project Name", type: "text" },
        { name: "link", label: "Link to Repo/Project", type: "url" },
        { name: "toolsUsed", label: "Tools Used (Comma-separated)", type: "text" },
        { name: "description", label: "Project Description (Long Text)", type: "text", isLarge: true },
      ],
    },
    // SoI
    {
      name: "subjectofInterest",
      label: "Subject of Interest",
      type: "array",
      fields: [
        { name: "text", label: "Bullet Point Text", type: "text", isLarge: true },
      ],
    },
  ],
};