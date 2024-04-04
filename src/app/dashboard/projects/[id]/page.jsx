"use client"
import { useState, useEffect } from 'react';  // Import useState and useEffect hooks
import { fetchProject } from '@/app/lib/data';
import styles from '@/app/Components/dashboard/projects/singleProject/singleProject.module.css';
import Image from 'next/image';
import axios from 'axios';

const SingleProjectPage = ({ params }) => {
  const [project, setProject] = useState(null);  // State to store the project data

<<<<<<< HEAD
  const tagStyle = {
    display: 'inline-block',
    backgroundColor: '#032774',
    color: '#fff',
    padding: '5px 10px',
    marginRight: '5px',
    marginBottom: '5px',
    borderRadius: '5px'
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateProject} className={styles.form}>
          <input type="hidden" name="id" value={project._id} />
          
          <label>Name</label>
          <div style={tagStyle}>
            {project.name || "IntQuo"}
          </div>
          <br></br>
          <label>Title</label>
          <div style={tagStyle}>
            {project.description || "Interview and questions chatbot"}
          </div>
          <br></br>
          <label>Github repo link</label>
          <div style={tagStyle}>
            {project.repository_url || "https://github.com/bangroosarthik/IntQuo"}
          </div>
          <br></br>
          <label>Project Description</label>
          <div style={tagStyle}>
            {project.repository_url || "backend repo for storing and displaying interview questions company wise and topic wise for prescription"}
          </div>

          <button style={{ marginTop: '10px' }}>Get the current Status</button>
        </form>
=======
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/project/${params.id}`);
        setProject(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchData();  // Call the fetchData function when the component mounts
  }, [params]);  // Run the effect when params change

  // Render loading state if project data is not yet available
  if (!project) {
    return <div>Loading...</div>;
  }

  // Render the project details once data is available
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>{project.name}</h1>
        <Image src={'/noproject.jpg'} alt="" width={40} height={40} />
      </div>
      <div className={styles.details}>
        <div className={styles.detail}>
          <h3>Description:</h3>
          <p>{project.description}</p>
        </div>
        <div className={styles.detail}>
          <h3>Repository Name:</h3>
          <p>{project.repository_name}</p>
        </div>
        <div className={styles.detail}>
          <h3>Repository Owner:</h3>
          <p>{project.repository_owner}</p>
        </div>

        <div className={styles.detail}>
          <h3>Project URL:</h3>
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.url}
          </a>
          </div>
>>>>>>> b6755ee401afe694e07457ac6cf9ed85baee7c39
      </div>
    </div>
  );
};

export default SingleProjectPage;

