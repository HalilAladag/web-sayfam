import React from 'react'
import texts from '../texts'
import './Skills.css'

const Skills = ({ language }) => {
    return (
        <div className='sk-container' id='skillsSection'>
            <div className='sk-title'><h1>Skills</h1></div>
            <div className='sk-texts'>
                <div className='js'>
                    <h2>JavaScript</h2>
                    <p>{language === 'tr' ? texts.tr.js : texts.en.js}</p>
                </div>

                <div className='react'>
                <h2>React JS</h2>
                <p>{language === 'tr' ? texts.tr.react : texts.en.react}</p>
                </div>

                <div className='css'>
                <h2>CSS</h2>
                <p>{language === 'tr' ? texts.tr.css : texts.en.css}</p>
                </div>

                <div className='redux'>
                <h2>Redux</h2>
                <p>{language === 'tr' ? texts.tr.redux : texts.en.redux}</p>
                </div>
                
                <div className='node'>
                <h2>Node.Js</h2>
                <p>{language === 'tr' ? texts.tr.node : texts.en.node}</p>
                </div>
                
                <div className='cypress'>
                <h2>Cypress</h2>
                <p>{language === 'tr' ? texts.tr.cypress : texts.en.cypress}</p>
                </div>

            </div>
        </div>
    )
}

export default Skills