import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { PriorityHigh } from "@mui/icons-material";
import { AuthContext } from "../context/auth.context";
import AddProjedct from "./AddAProject";

import ProjectList from "./ProjectList";

const API_URL = "http://localhost:5005";


function ProjectBoard(){

    const [projects, setProjects] = useState([]);

   
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



    return(
    <>

    <AddProjedct fetchProjects={fetchProjects} PP={projects}/>
    <ProjectList fetchProjects={fetchProjects}/>
    </>
    )
}

export default ProjectBoard