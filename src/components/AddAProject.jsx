import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { PriorityHigh } from "@mui/icons-material";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";


function AddProjedct(){

    const {user}= useContext(AuthContext)

    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [urgency, setUrgency] = useState("");
    const [ lowPriority, setLow] = useState([])
    const [ mediumPriority, setMedium] = useState([])
    const [ hightPriority, setHigh] = useState([])
    const [errorMessage, setErrorMessage] = useState(undefined);

    const handleUrgencyChange = (e) => {
        setUrgency(e.target.value);
      };
  
    
    const handleSubmitTask = (e) => {
      e.preventDefault();

      if(urgency==1){
        lowPriority.push(title)
      }
      if(urgency==2){
        mediumPriority.push(title)
      }
      if(urgency==3){
        hightPriority.push(title)
      }

      setTitle("")
      setUrgency("")
     
    };

    const handleSave = (title, content) => {
        const requestBody = {
          owner: user._id,
          title,
          content,
        };
    
        const authToken = localStorage.getItem("authToken");
        axios
          .post(`${URL}/dashboard/project`, requestBody, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .then((response) => {
            console.log("JWT TOKEN", authToken);
            console.log(response.data);
            setErrorMessage(null); // Clear any previous error message
            fetchNotes(); // Update the notes list after successful creation
          })
          .catch((error) => {
            console.error(error);
            setErrorMessage("Failed to create note.");
          });

          
      };


      const saveProject = () => {

        console.log("im saving")

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
            console.log("JWT TOKEN", authToken);
            console.log(response.data);
            setErrorMessage(null); // Clear any previous error message
            //fetchNotes(); // Update the notes list after successful creation
          })
          .catch((error) => {
            console.error(error);
            setErrorMessage("Failed to create note.");
          });
          setLow("")
          setMedium("")
          setHigh("")
          setName("")
      };
    



    return(
        <>
        <div className="AddTask">
      <h3>Plan your day</h3>

      <div>
        <p>Name of the project</p>
      <input
          type="text"
          name="name"
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
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </div>

  <div> 
    <div> Low:</div>
    {lowPriority.map((task) =>{
      return  <div>{task}</div>
    }) }

  </div>

  <div>
    <div> Medium:</div>
    {mediumPriority.map((task) =>{
      return  <div> {task}</div>
    }) }

  </div>


<div>
    <div>High:</div>
    {hightPriority.map((task) =>{
      return  <div> {task}</div>
    }) }
</div>

<button onClick={ saveProject}>Save project</button>


        </>
    )
}

export default AddProjedct