import React from "react";
import './Projects.css'

const Project = (props) => {
  const { proje, aciklama, konular, linkler, imageLink } = props.proje;

  return (
    <div className="project-item">
      <div className="projects-box">
        <div className="projects-box-img">
          <img src={imageLink} alt="project-img" />
        </div>
        <div className="projects-box-text">
          <div>
            <h2>{proje}</h2>
            <p>{aciklama}</p>
          </div>
          <div className="projects-box-text-button">
            {konular.map((item, key) => (
              <button key={key}>{item}</button>
            ))}
          </div>
          <div className="projects-box-text-link">
            {linkler.map((link, index) => (
              <a key={index} target="_blank" href={link.site}>
                {link.linkIsim}
              </a>
            ))}
          </div>
          <div className="projects-box-text-footer">
            <div className="projects-box-text-github">
              <a target="_blank" href={linkler.github}>
              </a>
            </div>
            <div className="projects-box-text-site">
              <a target="_blank" href={linkler.site}>
                {linkler.site}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
