import React from 'react';
import './ProjectCard.css'; // Optional: for styling

function ProjectCard({ title, techStack, image, link }) {
  return (
    <a href={link} className="card" target="_blank" rel="noopener noreferrer">
      <div className="card-image">
        <img src={image} alt={title} style={{ 
          height: '200px',
          width: '100%',
          objectFit: 'cover'
        }}
        />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{techStack}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
