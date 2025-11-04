# 💼 CVCraft

<p align="center">
  <b>A full-stack MERN application for building professional, ATS-friendly resumes quickly and efficiently.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Authentication-Auth.js-orange?style=for-the-badge&logo=auth0&logoColor=white" alt="Auth.js" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
  <img src="https://img.shields.io/badge/Figma-Design-FF7262?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Design" />
</p>

---

## 📌 Table of Contents
- [Live Links](#-live-links)
- [Overview](#-overview)
- [Why CVCraft?](#-why-cvcraft)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🔗 Live Links

- 🌍 **Live Demo:** [CVCraft on Netlify](https://cv-craftt.netlify.app/)  
- 🎨 **Figma Design:** [View Figma Prototype](https://www.figma.com/design/DHZxqnMdausaRdA9ZgwwGE/Farhan-s-Design?node-id=0-1&t=lXEyQ9MK0fYQJkx8-1)

> ⚠️ **Note:** Some cookie-related login issues may occur on **iOS devices**. A fix will be deployed soon.

---

## 📖 Overview
**CVCraft** is a **feature-rich full-stack resume builder** designed for professionals and students to create ATS-friendly resumes efficiently.  
Built with React on the frontend and Node.js + Express + MongoDB on the backend, CVCraft provides:

- Modern, responsive templates
- Real-time editing and preview
- PDF export functionality
- Secure user authentication with Auth.js  

---

## 💡 Why CVCraft?
CVCraft focuses on making resume creation simple, fast, and professional:

- 🖌 **Professional Templates** — Multiple ATS-friendly resume designs  
- 🔒 **Secure Authentication** — Auth.js / JWT  
- 🌐 **Responsive Design** — Built with Tailwind CSS for all devices  
- 📄 **Export as PDF** — Users can download resumes easily  
- ⚡ **Dynamic User Experience** — Real-time editing and preview  

---

## 🧰 Tech Stack

| Layer           | Technology                             |
|-----------------|----------------------------------------|
| Frontend        | React, Tailwind CSS, Axios             |
| Backend         | Node.js, Express.js                    |
| Database        | MongoDB (Mongoose)                     |
| Authentication  | Auth.js / JWT                           |
| Design          | Figma UI/UX prototype                  |
| Tools           | npm, Git, Markdown                     |

---

## ✨ Features

### 🖼️ Frontend
- Dynamic, responsive resume builder interface  
- Multiple professional templates  
- Real-time text editing & formatting  
- PDF export for completed resumes  

### 🧭 Backend
- User authentication & profile management  
- CRUD operations for resumes  
- Secure REST APIs with JWT  
- MongoDB integration for data persistence  

---

## 🧭 Project Structure
```
CVCraft/
├── backend/
│ ├── config/ # DB config, environment variables
│ ├── controllers/ # API business logic
│ ├── middleware/ # Auth, error handling
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── server.js # Entry point
│ └── package.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Route pages
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
└── README.md
```


---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)  
- [npm](https://www.npmjs.com/)  
- MongoDB Atlas account (or local MongoDB)  

### 🖼️ Frontend Setup
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
npm start
# App runs at http://localhost:3000

#🧰 Backend Setup
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create a .env file with:
# PORT=8000
# MONGO_URI=your_mongo_connection_string
# JWT_SECRET=your_secret_key

# Start server
npm run dev
# Backend runs at http://localhost:8000

```

## 🧭 Roadmap

 Fix iOS cookie issue

 Add more resume templates

 Theme customization (Dark/Light)

 AI-powered resume suggestions

## 🤝 Contributing
Pull requests are welcome!
For major changes, open an issue to discuss improvements first.

## License
**© Md Adil Farhan** ([GitHub](https://github.com/farhanadil1/)). All Rights Reserved.  

This project, **CVCraft**, is shared for learning, portfolio development, and personal projects.  
You are welcome to **explore, adapt, and learn** from the code and design for educational or personal use.  

Commercial use or redistribution without permission is **not allowed**.  
For collaboration, references, or permissions, feel free to reach out.  

> *Shared to inspire learning, creativity, and professional growth.*


## 📬 Contact

**Md Adil Farhan**  
📧 [imfarhan574@gmail.com](mailto:imfarhan574@gmail.com)  
💼 [LinkedIn](https://www.linkedin.com/in/md-adil-farhan-b4956424a/)
