import React from 'react';
import { useSpring, animated } from 'react-spring';

const Hero = ({ language, darkMode }) => {
  const content = {
    en: {
      greetings:
        'Hi, I’m Halil. I’m a full-stack developer. If you are looking for a Developer who can craft solid and scalable frontend products with great user experiences, let’s shake hands with me.',
      head1: 'Creative Thinker Minimalism Lover',
      contactButton: 'Contact',
      github: 'Github',
      linkedin: 'LinkedIn',
    },
    tr: {
      greetings:
        'Merhaba, ben Halil! Ben bir full-stack yazılım geliştiricisiyim. Mükemmel kullanıcı deneyimleriyle sağlam ve ölçeklenebilir frontend ürünleri oluşturacak bir geliştirici arıyorsanız. Benimle el sıkışın.',
      head1: 'Yaratıcı Düşünür  Minimalist Sever',
      contactButton: 'İletişim',
      github: 'Github',
      linkedin: 'Linkedin',
    },
  };

  const { greetings, head1, contactButton, github, linkedin } = content[language];

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-40px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 800 },
  });

  return (
    <div
      className={`hero-container flex flex-col md:flex-row items-center ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } py-20 rounded-lg shadow-lg px-16 md:px-24 space-y-8 md:space-y-0 md:space-x-12`}
      style={{
        backgroundImage: `url('./Images/sky.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
      }}
    >
      <div className="md:w-1/2 md:pr-8 md:pl-20">
        <animated.h1 className="text-4xl md:text-5xl font-bold mb-8 ml-0 md:ml-10">
          {head1}
        </animated.h1>
        <animated.p className="text-xl md:text-xl mb-8 ml-0 md:ml-10">
          {greetings}
        </animated.p>
        <div className="flex space-x-6 ml-0 md:ml-10">
          <button
            onClick={() => window.open('', '_blank')}
            className={`px-6 py-3 rounded-full font-bold text-lg md:text-xl ${
              darkMode ? 'bg-indigo-400 text-gray-900' : 'bg-indigo-600 text-white'
            } hover:bg-indigo-500 cursor-pointer`}
          >
            {contactButton}
          </button>
          <button
            onClick={() => window.open('https://github.com/HalilAladag', '_blank')}
            className={`px-6 py-3 rounded-full font-bold text-lg md:text-xl ${
              darkMode ? 'bg-gray-600 text-gray-100' : 'bg-indigo-600 text-white'
            } hover:bg-gray-700 cursor-pointer`}
          >
            {github}
          </button>
          <button
            onClick={() => window.open('https://www.linkedin.com/in/halil-ibrahim-alada%C4%9F-377554168/', '_blank')}
            className={`px-6 py-3 rounded-full font-bold text-lg md:text-xl ${
              darkMode ? 'bg-gray-300 text-indigo-600' : 'bg-indigo-600 text-white'
            } hover:bg-gray-400 cursor-pointer`}
          >
            {linkedin}
          </button>
        </div>
      </div>
      <div className="md:w-1/2 md:h1/2 md:pl-20 md:text-center">
        <animated.img
          src="./Images/HeroPic1.jpg"
          alt="Hero"
          className="h-80 w-80 rounded-full mb-8 border-4 border-indigo-600 shadow-lg inline-block"
          style={imageAnimation}
        />
      </div>
    </div>
  );
};

export default Hero;
