import React from 'react';
import './ProjectTile.css';

const ProjectTile = ({ title, description, technologies }) => (
  <div className="project-tile">
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Key Technologies: {technologies}</p>
  </div>
);

export default ProjectTile;