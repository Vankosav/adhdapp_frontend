import React from "react";
import { useState } from "react";
import axios from "axios";
import { PriorityHigh } from "@mui/icons-material";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";


function AddProjedct(){

    const [title, setTitle] = useState("");
    const [urgency, setUrgency] = useState("");
    const [ lowPriority, setLow] = useState([])
    const [ mediumPriority, setMedium] = useState([])
    const [ hightPriority, setHigh] = useState([])

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
      console.log(lowPriority)
      console.log(mediumPriority)
      console.log(hightPriority)
  
     
    };



    return(
        <>
        <div className="AddTask">
      <h3>Plan your day</h3>
      
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



        </>
    )
}

export default AddProjedct