import React, { useState } from 'react'
import { projectsData } from '../data/projectsData'

const Project = ({projectNumber}) => {
  const [currentProject] = useState(projectsData[projectNumber])
console.log(currentProject)
  return (
    <div className="project-main">
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <div className="img-content">
        <div className="img-container hover">
            <span>
              <h3>{currentProject.title}</h3>
              <p>{currentProject.infos}</p>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Project
