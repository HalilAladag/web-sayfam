import React from 'react';
import texts from '../texts';
import './Header.css';
import { Link } from 'react-scroll';

const Header = ({ language }) => {
  return (
    <div className='header-container'>
      <div className='logo'>
        <img src='/Images/Logo.jpg' alt='Logo' />
      </div>
      <div className='nav'>
        <Link
          activeClass='active'
          to='skillsSection'
          spy={true}
          smooth={true}
          duration={500}
        >
          <h5>{language === 'tr' ? texts.tr.skills : texts.en.skills}</h5>
        </Link>
        <Link
          activeClass='active'
          to='projectsSection'
          spy={true}
          smooth={true}
          duration={500}
        >
          <h5>{language === 'tr' ? texts.tr.projects : texts.en.projects}</h5>
        </Link>
        <Link
          activeClass='active'
          to='heroSection'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h5>{language === 'tr' ? texts.tr.contactMe : texts.en.contactMe}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Header;
