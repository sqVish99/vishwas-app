import React from 'react';
import './Projects.css';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project">
          <h2>Project 1</h2>
          <p>This is a brief explanation of Project 1.</p>
        </div>
        <div className="project">
          <h2>Project 2</h2>
          <p>This is a brief explanation of Project 2.</p>
        </div>
        <div className="project">
          <h2>Project 3</h2>
          <p>This is a brief explanation of Project 3.</p>
        </div>
        <div className="project">
          <h2>Project 4</h2>
          <p>This is a brief explanation of Project 4.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </div>
  </section>
);

export default Projects;