import React from 'react';
import './Projects.css';
import ProjectsList from './Projects.json';
import ProjectTile from '../../components/ProjectTile/ProjectTile';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h1>Projects</h1>
      <div className="projects-container">
        {ProjectsList.map((project) => (
          <ProjectTile key={project.id} title={project.title} description={project.description} technologies={project.technologies}/>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;