import React from 'react';
import { useSpring, } from 'react-spring';

const Hero = ({ language, darkMode }) => {
  const content = {
    en: {
      greetings:
        'Hi, I’m Halil. I’m a full-stack developer. If you are looking for a Developer who can craft solid and scalable products with great user experiences, let’s shake hands with me.',
      head1: 'Creative Thinker Minimalism Lover',
      contactButton: 'Contact',
      github: 'Github',
      linkedin: 'LinkedIn',
    },
    tr: {
      greetings:
        'Merhaba, ben Halil! Ben bir full-stack yazılım geliştiricisiyim. Mükemmel kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ürünler oluşturacak bir geliştirici arıyorsanız. Benimle iletişime geçin.',
      
        head1: 'Yaratıcı Düşünür Minimalist Sever',
      contactButton: 'İletişim',
      github: 'Github',
      linkedin: 'Linkedin',
    },
  };

  const { greetings, head1, contactButton, github, linkedin } = content[language];


  return (
    <div
      className={`hero-container flex ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } py-8 md:py-20 rounded-lg shadow-lg px-6 md:px-16 space-y-8`}
      style={{
        backgroundImage: `url('./Images/sky.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
      }}
    >
      <div className="md:flex md:items-center md:w-4/5 mx-auto">
        <img
          src="./Images/HeroPic1.jpg"
          alt="Hero"
          className="h-48 md:h-80 w-48 md:w-80 rounded-full mb-8 border-4 border-indigo-600 shadow-lg inline-block md:mr-12"
        />
        <div>
          <h1 className="text-6xl md:text-6xl font-bold mb-4 md:mb-8 text-stone-300">
            {head1}
          </h1>
          <p className="text-sm md:text-2xl mb-8 md:mb-8">
            {greetings}
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => window.open('', '_blank')}
              className={`px-4 py-2 rounded-full font-bold text-sm md:text-lg ${
                darkMode ? 'bg-indigo-400 text-gray-900' : 'bg-indigo-600 text-white'
              } hover:bg-indigo-500 cursor-pointer`}
            >
              {contactButton}
            </button>
            <button
              onClick={() => window.open('https://github.com/HalilAladag', '_blank')}
              className={`px-4 py-2 rounded-full font-bold text-sm md:text-lg ${
                darkMode ? 'bg-gray-600 text-gray-100' : 'bg-indigo-600 text-white'
              } hover:bg-gray-700 cursor-pointer`}
            >
              {github}
            </button>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/halil-ibrahim-alada%C4%9F-377554168/', '_blank')}
              className={`px-4 py-2 rounded-full font-bold text-sm md:text-lg ${
                darkMode ? 'bg-gray-300 text-indigo-600' : 'bg-indigo-600 text-white'
              } hover:bg-gray-400 cursor-pointer`}
            >
              {linkedin}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
