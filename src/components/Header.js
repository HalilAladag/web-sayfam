import React, { useState } from 'react';
import { BiGlobe } from 'react-icons/bi';
import { Link } from 'react-scroll';

const Header = ({ toggleLanguage, language }) => {
  const [isEnglish, setIsEnglish] = useState(language === 'en');
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
    toggleLanguage();
  };

  const handleTranslateClick = () => {
    console.log('Çeviri mantığı burada uygulanacak.');
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
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
    <header className={`header-container flex justify-between items-center bg-gray-900 bg-opacity-60 p-4 md:p-6`}>
      <img src="./Images/Logo.jpg" alt="Logo" className="h-10" />
      <button
        className="md:hidden text-white"
        onClick={handleMenuToggle}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {showMenu ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.293 4.293a1 1 0 010 1.414L6.414 19.293a1 1 0 11-1.414-1.414L17.586 4.293a1 1 0 111.707 1.414L6.707 18.586a1 1 0 01-1.707-1.414L17.586 5.293a1 1 0 011.707 1.414L5.707 18.586a1 1 0 11-1.414-1.414l13.293-13.293a1 1 0 011.414 0z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 19a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
            />
          )}
        </svg>
      </button>
      <nav className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${showMenu ? 'block' : 'hidden md:block'}`}>
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
