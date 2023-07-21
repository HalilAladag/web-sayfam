import React from 'react';
import texts from '../texts';
import './Hero.css';

const Hero = ({ language }) => {
    return (
        <div className='hero-container' id='heroSection'>
            <div className='hero-container-left'>
                <div className='hero-text'>
                    <div className='line-name'>
                        <h4 className='name'>Halil İbrahim Aladağ</h4>
                    </div>
                    <h1 className='head1'>{language === 'tr' ? texts.tr.head1 : texts.en.head1}</h1>
                    <p className='greetings'>
                        {language === 'tr' ? texts.tr.greetings : texts.en.greetings}
                    </p>
                </div>
                <div className='hero-buttons'>
                    <button className='b1'>{language === 'tr' ? texts.tr.contactButton : texts.en.contactButton}</button>
                    <button className='b1'>
                        <img src='./Images/github.png' />
                        <a href='https://github.com/HalilAladag' target='_blank' rel='noreferrer'>
                            {language === 'tr' ? texts.tr.github : texts.en.github}
                        </a>
                    </button>
                    <button className='b1'>
                        <img src='./Images/LinkedIn.png' />
                        <a href='https://www.linkedin.com/in/halil-ibrahim-alada%C4%9F-377554168/' target='_blank' rel='noreferrer'>
                            {language === 'tr' ? texts.tr.linkedin : texts.en.linkedin}
                        </a>
                    </button>
                </div>
            </div>
            <div className='hero-container-right'>
                <img className="hero-img" src="./Images/HeroPic1.jpg" alt="profile" />
            </div>
        </div>
    );
};

export default Hero;
