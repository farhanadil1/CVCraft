import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Auth from "./pages/Auth.js";
import TemplatePage from "./pages/TemplatePage.js";
import EditorWrapper from "./pages/EditorWrapper.js";
import ScrollToTop from "./components/ScrollToTop.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/templates" element={<TemplatePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/editor/:templateId" element={<EditorWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
