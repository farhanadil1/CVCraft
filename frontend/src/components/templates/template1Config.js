export const template1Config = {
  id: "template1",
  name: "Classic Academic CV",
  sections: [
    {
      name: "personal",
      label: "Personal Info",
      type: "object",
      fields: [
        { name: "fullName", label: "Full Name", type: "text" },
        { name: "username", label: "Username/GitHub", type: "text" },
        { name: "linkedin", label: "LinkedIn Username", type: "text" },
        { name: "website", label: "Website/Portfolio", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone Number", type: "text" },
      ],
    },
    {
      name: "summary",
      label: "Summary",
      type: "text",
      isLarge: true, 
    },
    {
      name: "workExperience",
      label: "Work Experience",
      type: "array",
      fields: [
        { name: "designation", label: "Designation/Role", type: "text" },
        { name: "duration", label: "Date Range (e.g., Jan 2021 - present)", type: "text" },
        { name: "details", label: "Description (Long Text)", type: "text", isLarge: true },
      ],
    },
    {
      name: "projects",
      label: "Projects",
      type: "array",
      fields: [
        { name: "name", label: "Project Name", type: "text" },
        { name: "link", label: "Link to Demo/Repo", type: "url" },
        { name: "description", label: "Description (Long Text)", type: "text", isLarge: true },
      ],
    },
    {
      name: "education",
      label: "Education",
      type: "array",
      fields: [
        { name: "duration", label: "Year Range/Status (e.g., 2023 - present)", type: "text" },
        { name: "degree", label: "Degree/Class (e.g., PhD (Subject))", type: "text" },
        { name: "institution", label: "Institution/Board", type: "text" },
        { name: "gpaOrGrade", label: "GPA or Grade (e.g., GPA: 4.0/4.0)", type: "text" },
      ],
    },
    {
      name: "publications",
      label: "Publications",
      type: "array",
      fields: [
        { name: "citation", label: "Full Citation (Includes authors, title, journal)", type: "text", isLarge: true },
        { name: "url", label: "Publication URL/DOI", type: "url" },
      ],
    },
    {
      name: "skills",
      label: "Skills",
      type: "array",
      fields: [
        { name: "name", label: "Skill Category (e.g., 'Some Skills')", type: "text" },
        { name: "details", label: "List of skills (comma-separated)", type: "text" },
      ],
    },
    {
        name: "footerDate",
        label: "Footer Last Updated Date",
        type: "text",
    }
  ],
};