import React from 'react';
import { projectsData, projectsDataTr } from './ProjectsData';
import { Link } from 'react-scroll';

const Projects = ({ language, darkMode }) => {
  const projectsData1 = language === 'tr' ? projectsDataTr : projectsData;

  return (
    <section
      className={`py-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}
      id="projects"
      style={{
        backgroundImage: `url('./Images/other-back.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl sm:text-5xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-indigo-600'}`}>
          {language === 'tr' ? 'Projeler' : 'Projects'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData1.map((project) => (
            <div
              key={project.id}
              className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between`}
            >
              <Link to="projects" smooth={true} offset={70} duration={700}>
                <div>
                  <img
                    src={project.imageLink}
                    alt={project.proje}
                    className="mt-4 rounded-lg w-full"
                  />
                  <h3 className={`text-xl ${darkMode ? 'text-indigo-600' : 'text-black'} font-semibold mb-4`}>
                    {project.proje}
                  </h3>
                  <p className={`${darkMode ? 'text-white' : 'text-black'}`}>{project.aciklama}</p>
                  <div className="flex flex-wrap mt-4">
                    {project.konular.map((konu, index) => (
                      <span
                        key={index}
                        className={`${
                          darkMode ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400' : 'bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300'
                        } text-white px-2 py-1 rounded-lg mr-1 mb-1 inline-block text-xs`}
                      >
                        {konu}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="mt-4 flex justify-between">
                <a
                  href={project.linkler[0].site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? 'bg-gray-500 text-gray-200 hover:bg-gray-500'
                      : 'bg-indigo-600 text-white hover:bg-indigo-500'
                  } px-4 py-2 rounded-lg inline-block transition-colors duration-300`}
                >
                  {project.linkler[0].linkIsim}
                </a>
                <a
                  href={project.linkler[1].site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? 'bg-indigo-400 text-black hover:bg-indigo-500'
                      : 'bg-indigo-600 text-white hover:bg-indigo-500'
                  } px-4 py-2 rounded-lg inline-block transition-colors duration-300`}
                >
                  {project.linkler[1].linkIsim}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
