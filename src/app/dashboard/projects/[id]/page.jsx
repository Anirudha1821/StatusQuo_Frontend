import { updateProject } from "@/app/lib/actions";
import { fetchProject } from "@/app/lib/data";
import styles from "@/app/Components/dashboard/projects/singleProject/singleProject.module.css";
import Image from "next/image";

const SingleProjectPage = async ({ params }) => {
  const { id } = params;
  const project = await fetchProject(id);

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
      </div>
    </div>
  );
};

export default SingleProjectPage;

