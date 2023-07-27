import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { PriorityHigh } from "@mui/icons-material";
import { AuthContext } from "../context/auth.context";
import AddProjedct from "./AddAProject";

import { Grid, Paper, Typography, Box, IconButton } from "@mui/material";
import {
  Delete,
  ArrowUpward,
  ArrowBack,
  ArrowForward,
  ArrowDownward,
} from "@mui/icons-material";

const URL = import.meta.env.VITE_API_URL;

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [showAddProject, setShowAddProject] = useState(true); 

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(`${URL}/dashboard/project`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setProjects(response.data);
      console.log("fetchtry", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const delateProject = async (projectId) => {
    try {
      const authToken = localStorage.getItem("authToken");
      await axios.delete(`${URL}/dashboard/project/${projectId}`, {
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

  const moveTaskToLeft = (index, projectIndex, pID, direction) => {
    console.log(projectIndex);
    console.log(index);
    console.log(direction);

    const requestBody = {
      arrayName: projectIndex,
      index,
      projectIdD: pID,
      moveTo: direction,
    };

    const authToken = localStorage.getItem("authToken");

    axios
      .put(`${URL}/dashboard/project/move`, requestBody, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        fetchProjects();
        // setErrorMessage(null);
        // Clear any previous error message
        //fetchNotes(); // Update the notes list after successful creation
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Failed to create note.");
      });

    fetchProjects();
  };

  const moveTaskToRight = (index, projectIndex, pID, direction) => {
    console.log(projectIndex);
    console.log(index);
    console.log(direction);

    const requestBody = {
      arrayName: projectIndex,
      index,
      projectIdD: pID,
      moveTo: direction,
    };

    const authToken = localStorage.getItem("authToken");

    axios
      .put(`${URL}/dashboard/project/move`, requestBody, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        // setErrorMessage(null);
        // Clear any previous error message
        //fetchNotes(); // Update the notes list after successful creation
        fetchProjects();
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Failed to create note.");
      });

   
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center" sx={{marginTop:"40px"}}>

<button
        style={{
          position: "fixed",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={() => setShowAddProject((prevState) => !prevState)}
      >
        {showAddProject ? "Show Projects" : "Add A New Project"}
      </button>

         {showAddProject && (
      <Grid item xs={12} md={6}>
        <AddProjedct fetchProjects={fetchProjects} />
      </Grid>)}


      {!showAddProject && (
        <Grid container spacing={2} direction="column" alignItems="center" sx={{width:"80%"}}>
      {projects.map((project, projectIndex) => (
        <Grid item xs={12} md={10} key={project._id} sx={{width:"100%"}}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "center", width: "100%" }}
          >
            <Typography variant="h5">Titile: {project.name}</Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 20px",
                width: "90%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#d4e1f1",
                  padding: 2,
                  borderRadius: 5,
                  width: "30%", // Set the width to 30% of the total screen width
                }}
              >
                <Typography variant="h6">Do:</Typography>
                {project.lowPriority.map((task, index) => (
                  task === null ? null : (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <Typography sx={{ width: "95%" }}>{task}</Typography>
                    <IconButton
                      onClick={() =>
                        moveTaskToRight(index, "lowPriority", project._id, "R")
                      }
                    >
                      <ArrowForward />
                    </IconButton>
                  </Box>
                  )
                ))}
              </Box>

              <Box
                sx={{
                  backgroundColor: "#f8eaae",
                  padding: 2,
                  borderRadius: 5,
                  width: "30%", // Set the width to 30% of the total screen width
                }}
              >
                <Typography variant="h6">Doing:</Typography>
                {project.mediumPriority.map((task, index) => (
                  task === null ? null : (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <IconButton
                      onClick={() =>
                        moveTaskToLeft(
                          index,
                          "mediumPriority",
                          project._id,
                          "L"
                        )
                      }
                    >
                      <ArrowBack />
                    </IconButton>
                    <Typography sx={{ width: "95%" }}>{task}</Typography>
                    <IconButton
                      onClick={() =>
                        moveTaskToRight(
                          index,
                          "mediumPriority",
                          project._id,
                          "R"
                        )
                      }
                    >
                      <ArrowForward />
                    </IconButton>
                  </Box>
                )))}
              </Box>

              <Box
                sx={{
                  backgroundColor: "#f8ccd0",
                  padding: 2,
                  borderRadius: 5,
                  width: "30%", // Set the width to 30% of the total screen width
                }}
              >
                <Typography variant="h6">Done:</Typography>
                {project.hightPriority.map((task, index) => (
                  task === null ? null : (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 1,
                    }}
                  >
                    <IconButton
                      onClick={() =>
                        moveTaskToLeft(index, "hightPriority", project._id, "L")
                      }
                    >
                      <ArrowBack />
                    </IconButton>
                    <Typography sx={{ width: "95%" }}>{task}</Typography>
                  </Box>
                )))}
              </Box>
            </Box>

            <button onClick={() => delateProject(project._id)}>Delete</button>
          </Paper>
        </Grid>
      ))}
         </Grid>)}


    </Grid>
  );
}

export default ProjectList;
