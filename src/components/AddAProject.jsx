import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { PriorityHigh } from "@mui/icons-material";
import { AuthContext } from "../context/auth.context";
import { Grid, Paper, Typography, TextField, Button, Select, MenuItem, Box } from "@mui/material";

const API_URL = "http://localhost:5005";

function AddProjedct({ fetchProjects }) {
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [urgency, setUrgency] = useState("");
  const [lowPriority, setLow] = useState([]);
  const [mediumPriority, setMedium] = useState([]);
  const [hightPriority, setHigh] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleUrgencyChange = (e) => {
    setUrgency(e.target.value);
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();

    if (urgency == 1) {
      lowPriority.push(title);
    }
    if (urgency == 2) {
      mediumPriority.push(title);
    }
    if (urgency == 3) {
      hightPriority.push(title);
    }

    setTitle("");
    setUrgency("");
  };

  const saveProject = () => {
    console.log("im saving");

    const requestBody = {
      owner: user._id,
      name,
      lowPriority,
      mediumPriority,
      hightPriority,
    };

    const authToken = localStorage.getItem("authToken");
    axios
      .post(`${API_URL}/dashboard/project`, requestBody, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
      //  console.log("JWT TOKEN", authToken);
       // console.log(response.data);
        setErrorMessage(null);
        fetchProjects();

        // Clear any previous error message
        //fetchNotes(); // Update the notes list after successful creation
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Failed to create note.");
      });


    setLow([]);
    setMedium([]);
    setHigh([]);
    setName("");
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
          <Typography variant="h5">Plan your day</Typography>
          <div>
            <TextField
              label="Name of the project"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <form onSubmit={handleSubmitTask}>
            <label>Task:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <select value={urgency} onChange={handleUrgencyChange}>
              <option value="">Select Urgency</option>
              <option value="1">Do</option>
              <option value="2">Doing</option>
              <option value="3">Done</option>
            </select>

            <button type="submit">Add Task</button>
          </form>
        </Paper>
      </Grid>

      <Grid item container xs={12} md={6} spacing={2} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#d4e1f1",
              padding: 2,
              borderRadius: 5,
              width: 300,
              margin: 2,
              height: 200,
            }}
          >
            <Typography variant="h6">Do:</Typography>
            {lowPriority.map((task, index) => (
              <Typography key={index}>{task}</Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#f8eaae",
              padding: 2,
              borderRadius: 5,
              width: 300,
              margin: 2,
              height: 200,
            }}
          >
            <Typography variant="h6">Doing:</Typography>
            {mediumPriority.map((task, index) => (
              <Typography key={index}>{task}</Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#f8ccd0",
              padding: 2,
              borderRadius: 5,
              margin: 2,
              width: 300,
              height: 200,
            }}
          >
            <Typography variant="h6">Done:</Typography>
            {hightPriority.map((task, index) => (
              <Typography key={index}>{task}</Typography>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={saveProject}>
            Save project
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AddProjedct;
 