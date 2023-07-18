import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { PriorityHigh } from "@mui/icons-material";
import { AuthContext } from "../context/auth.context";


const API_URL = "http://localhost:5005";


function ProjectList(){

    const [projects, setProjects] = useState([]);
    


    useEffect(() => {
        fetchProjects();
      }, []);

      const fetchProjects = async () => {
        try {
          const authToken = localStorage.getItem("authToken");
          const response = await axios.get(`${API_URL}/dashboard/project`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          setProjects(response.data);
          console.log("fetchtry",response.data)
        } catch (error) {
          console.error(error);
        }
      };

      const delateProject = async (projectId) => {
        try {
          const authToken = localStorage.getItem("authToken");
          await axios.delete(`${API_URL}/dashboard/project/${projectId}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          // Refresh the notes list after successful deletion
          fetchProjects();
        } catch (error) {
          console.error(error);
        }
      };

    return(
        <>
        <div> i am working</div>
        {projects.map((project) =>{
            return(
                <> <div>Titile :{project.name} </div>
                <div>Low:{project.lowPriority.map((task, index) => (
              <div key={index}>{task}</div>
            ))} </div>
                <div>Middle:{project.mediumPriority.map((task, index) => (
              <div key={index}>{task}</div>
            ))} </div>
                <div>High: {project.hightPriority.map((task, index) => (
              <div key={index}>{task}</div>
            ))} </div>

            <button onClick={()=> delateProject(project._id)}> Delate</button>
                </>
            )
        })}
    </>

    )
}

export default ProjectList