export const template4Config = {
  id: "template4",
  name: "Two-Column Data Analyst CV",
  sections: [
    // --- LEFT COLUMN SECTIONS ---
    {
      name: "personalHeader",
      label: "Header & Photo",
      type: "object",
      fields: [
        { name: "fullName", label: "Full Name", type: "text" },
        { name: "photoUrl", label: "Profile Photo URL (Optional)", type: "text", isLarge: true },
      ],
    },
    {
      name: "profileSummary",
      label: "Profile Summary",
      type: "object",
      fields: [
        { name: "summaryText", label: "Summary", type: "textarea", isLarge: true },
      ],
    },
    {
      name: "contactDetails",
      label: "Contact Details",
      type: "object",
      fields: [
        { name: "phone", label: "Phone", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "linkedin", label: "LinkedIn/Web Link", type: "text" },
      ],
    },
    {
      name: "personalInfo",
      label: "Personal Information",
      type: "object",
      fields: [
        { name: "citizenship", label: "Citizenship", type: "text" },
        { name: "familyStatus", label: "Family", type: "text" },
        { name: "languages", label: "Languages (Comma-separated)", type: "text", isLarge: true },
      ],
    },
    {
      name: "skills",
      label: "Skills",
      type: "array",
      fields: [
        { name: "skillItem", label: "Skill Item/Category (e.g., Python, SQL, Power BI)", type: "text", isLarge: true },
      ],
    },
    // --- RIGHT COLUMN SECTIONS (Repeating Arrays) ---
    {
      name: "experience",
      label: "Experience",
      type: "array",
      fields: [
        { name: "title", label: "Designation/Title", type: "text" },
        { name: "company", label: "Company/Organization", type: "text" },
        { name: "dates", label: "Dates (e.g., 2018.08-2024.05)", type: "text" },
        { name: "description", label: "Description (Comma-separated bullet points)", type: "textarea", isLarge: true },
      ],
    },
    {
      name: "education",
      label: "Education",
      type: "array",
      fields: [
        { name: "degree", label: "Degree/Qualification", type: "text" },
        { name: "university", label: "University/Institution", type: "text" },
        { name: "dates", label: "Dates (e.g., 2012-2015)", type: "text" },
      ],
    },
    {
      name: "certifications",
      label: "Certifications",
      type: "array",
      fields: [
        { name: "name", label: "Certification Name", type: "text" },
        { name: "issuer", label: "Issuer (e.g., Coursera, IBM)", type: "text" },
        { name: "dates", label: "Date/Duration (e.g., July-3-2024)", type: "text" },
      ],
    },
  ],
};
