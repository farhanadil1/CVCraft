export const template3Config = {
  id: "template3",
  name: "Detailed Academic CV (Biodata)",
  sections: [
    {
      name: "personal",
      label: "Personal & Contact Information",
      type: "object",
      fields: [
        { name: "fullName", label: "Full Name", type: "text" },
        { name: "streetAddress", label: "Street Address", type: "text" },
        { name: "cityCountry", label: "City, Country", type: "text" },
        { name: "mainRoad", label: "Main Road/Area", type: "text" },
        { name: "pinCode", label: "Pin Code", type: "text" },
        { name: "email", label: "Email Address", type: "email" },
        { name: "mobile", label: "Mobile No.", type: "text" },
        { name: "altMobile", label: "Alternate Mobile No.", type: "text" },
      ],
    },
    // Academic Details - The multi-column table
    {
      name: "academic",
      label: "Academic Details (Table)",
      type: "array",
      fields: [
        { name: "examination", label: "Examination (e.g., B.Tech, 12th)", type: "text" },
        { name: "university", label: "University", type: "text" },
        { name: "institute", label: "Institute/College", type: "text" },
        { name: "year", label: "Year", type: "number" },
        { name: "cpi", label: "CPI / Percentage", type: "text" },
      ],
    },
    // Fields of Interest
    {
      name: "fieldsOfInterest",
      label: "Fields of Interest",
      type: "array",
      fields: [
        { name: "area", label: "Area of Interest", type: "text", isLarge: true },
      ],
    },
    // Technical Skills
    {
      name: "technicalSkills",
      label: "Technical Skills",
      type: "array",
      fields: [
        { name: "category", label: "Category (e.g., Languages, Tools)", type: "text" },
        { name: "details", label: "Details (Comma-separated)", type: "text", isLarge: true },
      ],
    },
    // Major Projects and Seminar - Complex section with nested bullets
    {
      name: "projects",
      label: "Major Projects and Seminar",
      type: "array",
      fields: [
        { name: "title", label: "Project Title", type: "text" },
        { name: "guide", label: "Guide (e.g., Prof. John Doe)", type: "text" },
        { name: "duration", label: "Duration (e.g., Jan '14 - Aug '14)", type: "text" },
        { name: "primaryObjective", label: "Primary Objective (Sentence)", type: "text", isLarge: true },
        // Use comma-separated input for bullet points
        { name: "bulletDetails", label: "Key Results/Details (Comma-separated lines)", type: "text", isLarge: true },
        { name: "subBullets", label: "Sub-bullets (Comma-separated lines)", type: "text", isLarge: true },
      ],
    },
    // Strengths
    {
      name: "strengths",
      label: "Strengths",
      type: "array",
      fields: [
        { name: "item", label: "Strength (e.g., Positive Attitude)", type: "text" },
      ],
    },
    // Interest and Hobbies
    {
      name: "hobbies",
      label: "Interest and Hobbies",
      type: "array",
      fields: [
        { name: "item", label: "Hobby/Interest", type: "text" },
      ],
    },
  ],
};
