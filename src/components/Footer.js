import React from 'react';
import texts from '../texts';
import './Footer.css';

const Footer = ({ language }) => {
    const handleClickG = () => {
        window.open('https://github.com/HalilAladag', '_blank');
    };

    const handleClickL = () => {
        window.open('https://www.linkedin.com/in/halil-ibrahim-alada%C4%9F-377554168/', '_blank');
    };

    return (
        <div className='footer'>
            <div className='foo-title'>
                <h1>{language === 'tr' ? texts.tr.fotitle : texts.en.fotitle}</h1>
            </div>
            <div className='foo-bottom'>
                <div className='foo-left'>
                    <h1>👉halilibrahimaladag@yandex.com</h1>
                </div>
                <div className='foo-right'>
                    <h2>Personal Blog</h2>
                    <h2 className='Github' onClick={handleClickG}>
                        Github'a git!
                    </h2>
                    <h2 className='Linkedin' onClick={handleClickL}>
                        Linkedin'e git!
                    </h2>
                </div>
            </div>
        </div>
    );
};


export default Footer;
