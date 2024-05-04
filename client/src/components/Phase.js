import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Projects.module.css'
import { Link } from 'react-router-dom'
import forest from '../assets/karura.jpeg'
const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/project');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.whole}>
      <div>
        <h1 className={styles.h1}>Here are a list of our Verified projects</h1>
        </div>
        
      {projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <div className="project verified">
            <img className={styles.forest} src={forest} alt={project.title} />
            <p>Title: {project.name}</p>
            <p>Description: {project.description}</p>
            <p>Location: {project.location}</p>
            <p>Verified Credits: {project.total_credits}</p>
          
            <Link to={`/project/${project.id}`}>Read More</Link> {/* Link to the project details */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
