import React, { useState, useEffect } from "react";
import Project from "./Project";
import { projectsData, projectsDataTr } from "./ProjectsData";
import './Projects.css'

const ProjectsApi = ({ language }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const newData = language === "tr" ? projectsData : projectsDataTr;
    setData(newData);
  }, [language]);

  return (
    <div className="projects" id="projectsSection">
        <div>
        <h3 className="title">{language === "tr" ? "Projeler" : "Projects"}</h3>
        </div>
      <div className="projects container">
        <div className="projects-row">
          {error ? (
            <div className="projects-hata">No data {error}</div>
          ) : data.length !== 0 ? (
            data.map((proje) => (
              <div key={proje.id} className="project-item">
                <Project proje={proje} />
              </div>
            ))
          ) : (
            <div className="projects-hata">No data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsApi;
