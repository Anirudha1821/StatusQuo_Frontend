import { Project, User } from "./models";
import { connectToDB } from "./utils";
import axios from 'axios';

export const fetchUsers = async (q, page) => {
  try {
    const response = await axios.get(`http://localhost:5000/user/getall`);
    return { count: response.data.length, users: response.data };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { count: 0, users: [] };
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProjects = async (q, page) => {
  try {
    console.log("qwertyuiop")
    const response = await axios.get(`http://localhost:5000/project/getMyProjects/varadpundlik@gmail.com`);
    console.log("-----------------");
    console.log(response.data)
    console.log("-----------------");
    
    return { count: response.data.length, projects: response.data };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { count: 0, users: [] };
  }
};

export const fetchProject = async (id) => {
  try {
<<<<<<< HEAD
    console.log("qwertyuiop")
    const response = await axios.get(`http://localhost:5000/project/65f27b9d92daab472e63c9dc`);
    console.log("-----------------");
    console.log(response.data)
    console.log("-----------------");
    
    return { count: response.data.length, projects: response.data };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { count: 0, users: [] };
=======
    axios.get(`http://localhost:5000/project/${id}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch project!");
>>>>>>> b6755ee401afe694e07457ac6cf9ed85baee7c39
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
