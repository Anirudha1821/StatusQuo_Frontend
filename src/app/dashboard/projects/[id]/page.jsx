"use client"
import { useState, useEffect } from 'react';  // Import useState and useEffect hooks
import { fetchProject } from '@/app/lib/data';
import styles from '@/app/Components/dashboard/projects/singleProject/singleProject.module.css';
import Image from 'next/image';
import axios from 'axios';

const SingleProjectPage = ({ params }) => {
  const [project, setProject] = useState(null);  // State to store the project data

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
      </div>
    </div>
  );
};

export default SingleProjectPage;
