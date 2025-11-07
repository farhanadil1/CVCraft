export const template5Config = {
  id: "template5",
  name: "Clean Single-Column List CV",
  sections: [
    {
      name: "personalHeader",
      label: "Header & Title",
      type: "object",
      fields: [
        { name: "fullName", label: "Full Name", type: "text" },
        { name: "title", label: "Professional Title", type: "text" },
        {
          name: "subSummary",
          label: "Mini Cover Letter / Summary",
          type: "textarea",
          isLarge: true
        }
      ]
    },
    {
      name: "contact",
      label: "Contact & Links",
      type: "object",
      fields: [
        { name: "phone", label: "Phone", type: "tel" },
        { name: "email", label: "Email", type: "email" },
        { name: "github", label: "GitHub Link/Handle", type: "text" },
        { name: "linkedin", label: "LinkedIn Link/Handle", type: "text" }
      ]
    },
    // --- Education Section ---
    {
      name: "education",
      label: "Education",
      type: "array",
      fields: [
        { name: "school", label: "School/University Name", type: "text" },
        { name: "program", label: "Program/Degree", type: "text" },
        { name: "dates", label: "Start - End Dates", type: "text" },
        { name: "location", label: "Location", type: "text" }
      ]
    },
    // --- Work Experience Section ---
    {
      name: "work",
      label: "Work Experience",
      type: "array",
      fields: [
        { name: "company", label: "Company Name", type: "text" },
        { name: "position", label: "Position/Role", type: "text" },
        { name: "dates", label: "Start - End Dates", type: "text" },
        { name: "location", label: "Location", type: "text" },
        // This combines languages/skills and tasks into one list item
        {
          name: "details",
          label: "Languages/Skills and Tasks (Comma-separated lines)",
          type: "textarea",
          isLarge: true
        }
      ]
    },
    // --- Projects Section ---
    {
      name: "projects",
      label: "Projects",
      type: "array",
      fields: [
        {
          name: "type",
          label: "Project Type",
          type: "select",
          options: [
            { value: "academic", label: "Academic" },
            { value: "personal", label: "Personal" },
            { value: "work", label: "Work-Related" }
          ]
        },
        { name: "name", label: "Project Name", type: "text" },
        { name: "dates", label: "Start - End Dates", type: "text" },
        // This field captures the 'Languages/Skills used' and 'Description of tasks' bullets
        {
          name: "details",
          label: "Details (Comma-separated lines)",
          type: "textarea",
          isLarge: true
        }
      ]
    },
    // --- Communication/Language Level ---
    {
      name: "communication",
      label: "Communication / Language Level",
      type: "array",
      fields: [
        { name: "language", label: "Language", type: "text" },
        {
          name: "level",
          label: "Level (e.g., Fluent, C1, Basic)",
          type: "text"
        }
      ]
    }
  ]
};
