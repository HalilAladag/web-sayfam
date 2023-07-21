import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import ProjectsApi from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("tr");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="top-buttons">
        <div className="language-button">
          <h2 onClick={() => setLanguage(language === "tr" ? "en" : "tr")}>
            {language === "tr" ? "English" : "Türkçe"}
          </h2>
        </div>
        <div className="toggle-button">
          <h2 onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </h2>
        </div>
      </div>
      <Header language={language} darkMode={darkMode} />
      <Hero language={language} darkMode={darkMode} />
      <Skills language={language} darkMode={darkMode} />
      <Profile language={language} darkMode={darkMode} />
      <ProjectsApi language={language} darkMode={darkMode} />
      <Footer language={language} darkMode={darkMode} />
    </div>
  );
};

export default App;
