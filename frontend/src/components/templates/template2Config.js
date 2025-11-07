export const template2Config = {
  id: "template2",
  name: "Modern Two-Column CV",
  sections: [
    {
      name: "personal",
      label: "Personal Information",
      type: "object",
      fields: [
        { name: "fullName", label: "Full Name", type: "text" },
        { name: "location", label: "Location", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone Number", type: "tel" },
        { name: "website", label: "Website URL", type: "text" },
        { name: "linkedin", label: "LinkedIn Profile", type: "text" },
        { name: "github", label: "GitHub Profile", type: "text" }
      ]
    },
    {
      name: "quickGuide",
      label: "Quick Guide / Highlights",
      type: "array",
      fields: [
        {
          name: "text",
          label: "Highlight or Bullet Point",
          type: "text",
          isLarge: true
        }
      ]
    },
    {
      name: "education",
      label: "Education",
      type: "array",
      fields: [
        { name: "degree", label: "Degree / Major", type: "text" },
        {
          name: "institution",
          label: "Institution / University",
          type: "text"
        },
        {
          name: "dates",
          label: "Date Range (e.g., Sept 20XX - May 20XX)",
          type: "text"
        },
        {
          name: "details",
          label: "Details (GPA, Coursework, etc.)",
          type: "text",
          isLarge: true
        }
      ]
    },
    {
      name: "experience",
      label: "Work Experience",
      type: "array",
      fields: [
        { name: "position", label: "Position / Role", type: "text" },
        { name: "company", label: "Company Name", type: "text" },
        { name: "location", label: "Location (City, Country)", type: "text" },
        {
          name: "dates",
          label: "Duration (e.g., June 20XX - Aug 20XX)",
          type: "text"
        },
        {
          name: "bulletPoints",
          label: "Key Achievements (Comma-separated list)",
          type: "text",
          isLarge: true
        }
      ]
    },
    {
      name: "skills",
      label: "Skills",
      type: "array",
      fields: [
        { name: "title", label: "Skills Type", type: "text" },
        { name: "skills", label: "C, C++ etc", type: "text" },
        { name: "certificates", label: "Certificates Link", type: "url" }
      ]
    },
    {
      name: "projects",
      label: "Projects",
      type: "array",
      fields: [
        { name: "name", label: "Project Name", type: "text" },
        { name: "link", label: "Project or GitHub Link", type: "url" },
        {
          name: "description",
          label: "Project Description",
          type: "text",
          isLarge: true
        },
        {
          name: "toolsUsed",
          label: "Tools Used (Comma-separated)",
          type: "text"
        }
      ]
    }
  ]
};
