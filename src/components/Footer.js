import React from 'react';

const Footer = ({ language }) => {
  const handleClickG = () => {
    window.open('https://github.com/HalilAladag', '_blank');
  };

  const handleClickL = () => {
    window.open(
      'https://www.linkedin.com/in/halil-ibrahim-alada%C4%9F-377554168/',
      '_blank'
    );
  };
  const messages = {
    en: {
      title: 'Let’s work together on your next product.',
      contact: '👉halilibrahimaladag@yandex.com',
      github: 'Go to GitHub!',
      linkedin: 'Go to LinkedIn!',
    },
    tr: {
      title: 'Haydi sonraki ürününüzde beraber çalışalım.',
      contact: '👉halilibrahimaladag@yandex.com',
      github: 'Github\'a git!',
      linkedin: 'Linkedin\'e git!',
    },
  };

  const currentLanguage = language in messages ? language : 'en';
  const { title, contact, github, linkedin } = messages[currentLanguage];

  return (
    <footer className="bg-gray-800 py-6 text-white text-center">
      <div className="container mx-auto text-xl">
        <p className="text-2xl mb-3">{title}</p>
        <p className="mb-4">{contact}</p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-gray-500 text-black px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white text-xl transition duration-300"
            onClick={handleClickG}
          >
            {github}
          </button>
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-400 hover:text-white text-xl transition duration-300"
            onClick={handleClickL}
          >
            {linkedin}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
