import React from 'react'
import texts from '../texts'
import './Profile.css'


const Profile = ({ language }) => {
    return (
        <div className='profile-container'>
            <div className='profile'>
                <div className='profile-info'>
                    <h1 className='profile-heading'>
                        <h1>{language === 'tr' ? texts.tr.profile : texts.en.profile}</h1>
                    </h1>
                </div>
                <div className='profile-info'>
                    <div className='profile-left'>
                        <div className='profile-heading2'>
                            <h1 className='profile-heading2'>
                                <h1>{language === 'tr' ? texts.tr.profile : texts.en.profile}</h1>
                            </h1>
                            </div>
                            <div className='left-right'>
                                <div className='left'>
                                    <p>{language === 'tr' ? texts.tr.birth : texts.en.birth}</p>
                                    <p>{language === 'tr' ? texts.tr.city : texts.en.city}</p>
                                    <p>{language === 'tr' ? texts.tr.education : texts.en.education}</p>
                                    <br></br>
                                    <p>{language === 'tr' ? texts.tr.role : texts.en.role}</p>
                                </div>
                                <div className='right'>
                                    <p>26.08.1997</p>
                                    <p>Antalya</p>
                                    <p>{language === 'tr' ? texts.tr.edu : texts.en.edu}
                                    </p>
                                    <p>Full Stack, Front-end, Back-end</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='about-container'>
                <h1 className='about-title'>{language === 'tr' ? texts.tr.about : texts.en.about}</h1>
                <p className='aboutp'>{language === 'tr' ? texts.tr.aboutp : texts.en.aboutp}</p>
            </div>
        </div>
    )
}

export default Profile