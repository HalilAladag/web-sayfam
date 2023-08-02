import React, { useState } from 'react';
import { BiGlobe } from 'react-icons/bi';
import { Link } from 'react-scroll';

const Header = ({ toggleLanguage, language }) => {
  const [isEnglish, setIsEnglish] = useState(language === 'en');

  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
    toggleLanguage();
  };

  const handleTranslateClick = () => {
    console.log('Çeviri mantığı burada uygulanacak.');
  };

  const renderLanguageButton = () => {
    if (isEnglish) {
      return (
        <button className="text-white bg-blue-500 py-1 px-2 rounded-lg" onClick={handleLanguageToggle}>
          Türkçe
        </button>
      );
    } else {
      return (
        <button className="text-white bg-blue-500 py-1 px-2 rounded-lg" onClick={handleLanguageToggle}>
          English
        </button>
      );
    }
  };

  return (
    <header className={`header-container flex justify-between items-center bg-gray-900 bg-opacity-60 py-6`}>
      <img src="./Images/Logo.jpg" alt="Logo" className="h-12" />
      <nav className="flex space-x-4">
        <Link
          to="skills"
          smooth={true}
          spy={true}
          offset={-70}
          duration={500}
          className={`text-white hover:text-indigo-500 cursor-pointer bg-transparent border-none`}
        >
          {isEnglish ? 'Skills' : 'Yetenekler'}
        </Link>
        <Link
          to="projects"
          smooth={false}
          spy={true}
          offset={-70}
          duration={500}
          className={`text-white hover:text-indigo-500 cursor-pointer bg-transparent border-none`}
        >
          {isEnglish ? 'Projects' : 'Projeler'}
        </Link>
        <a
          href="#contact"
          className={`text-white hover:text-indigo-500 cursor-pointer bg-transparent border-none`}
        >
          {isEnglish ? 'Contact Me' : 'Bana Ulaşın'}
        </a>
      </nav>
      <div className="flex space-x-4">
        {renderLanguageButton()}
        <button className="text-white" onClick={handleTranslateClick}>
          <BiGlobe size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
