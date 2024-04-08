"use client"
import { useState } from 'react';
import { addProject } from "@/app/lib/actions";
import styles from "@/app/Components/dashboard/projects/addProject/addProject.module.css";
import axios from 'axios';

const AddProjectPage = () => {
  const [name,setName] = useState('')
  const [repository_name,setRepository_name] = useState('')
  const [repository_url,setRepository_url] = useState('')
  const [repository_owner,setRepository_owner] = useState('')
  const [access_token,setAccess_token] = useState('')
  const [desc,setDesc] = useState('')
  const [features, setFeatures] = useState([{ name: '', checklist: [{ name: ''  }] }]);
  const [statuses, setStatuses] = useState([{ date: '', features: [{ name: '', checklist: [{ name: '' }] }] }]);

  const addNewFeature = () => {
    setFeatures([...features, { name: '', checklist: [{ name: ''}] }]);
  };

  const addNewStatus = () => {
    setStatuses([...statuses, { date: '', features: [{ name: '', checklist: [{ name: '',}] }] }]);
  };

  const handleFeatureChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...features];
    list[index][name] = value;
    setFeatures(list);
  };

  const handleChecklistChange = (featureIndex, checklistIndex, event) => {
    const { name, value } = event.target;
    const list = [...features];
    list[featureIndex].checklist[checklistIndex][name] = value;
    setFeatures(list);
  };


  const addProject = async (event) => {
    event.preventDefault();
    const formData = {
      name: name,
      repository_name: repository_name,
      repository_url: repository_url,
      repository_owner: repository_owner,
      access_token: access_token,
      description: desc,
      features: features,
    }

    try {
      await axios.post('http://localhost:5000/project', formData).then((response) => {console.log(response.data)});
      alert('Project added successfully');
      form.reset();
    } catch (error) {
      alert('Failed to add project');
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={addProject} className={styles.form}>
        <input type="text" placeholder="Title" name="title" required  onClick={(e)=>{setName(e.target.value)}}/>
        <input type="text" placeholder="Repository Name" name="repository_name" required  onClick={(e)=>{setRepository_name(e.target.value)}}/>
        <input type="text" placeholder="Repository URL" name="repository_url" required onClick={(e)=>{setRepository_url(e.target.value)}}/>
        <input type="text" placeholder="Repository Owner" name="repository_owner" required onClick={(e)=>{setRepository_owner(e.target.value)}}/>
        <input type="text" placeholder="access_token" name="access_token" onClick={(e)=>{setAccess_token(e.target.value)}}/>
        <textarea required name="description" id="desc" rows="12" placeholder="Description" onClick={(e)=>{setDesc(e.target.value)}}></textarea>

        <div className="panel panel-primary">
          <div className="panel-heading clearfix">
            <div className="pull-left">
              <h1 className="panel-title">Add Features</h1>
            </div>
            <div className="pull-right">
              <button type="button" className="btn btn-sm btn-success" onClick={addNewFeature} title="Add Feature">+</button>
            </div>
          </div>
          <div className="panel-body">
            {features.map((feature, featureIndex) => (
              <div key={featureIndex}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Feature Name"
                  name="  "
                  value={feature.name}
                  onChange={(e) => handleFeatureChange(featureIndex, e)}
                />
                <h4>Checklist</h4>
                {feature.checklist.map((item, checklistIndex) => (
                  <div key={checklistIndex}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Checklist Item"
                      name="name"
                      value={item.name}
                      onChange={(e) => handleChecklistChange(featureIndex, checklistIndex, e)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>


        <button type="submit" onClick={addProject}>Submit</button>
      </form>
    </div>
  );
};

export default AddProjectPage;
