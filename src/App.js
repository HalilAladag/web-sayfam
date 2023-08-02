import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import ProjectsApi from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("tr");
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "tr" ? "en" : "tr"));
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Header
        language={language}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleLanguage={toggleLanguage}
      />
      <Hero language={language} darkMode={darkMode} />
      <Skills language={language} darkMode={darkMode} />
      <Profile language={language} darkMode={darkMode} />
      <ProjectsApi language={language} darkMode={darkMode} />
      <Footer language={language} darkMode={darkMode} />
    </div>
  );
};

export default App;