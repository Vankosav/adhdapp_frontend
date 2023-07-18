import React from "react";
import AddProjedct from "./AddAProject";
import ProjectList from "./ProjectList"
import { useContext, useEffect, useState } from "react";



const DashboardHome = () => {

  const [projectState, updateProjectState]= useState(false)

  
  return (
    <div className="text-white p-4">
      <h1>DashboardHome</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
        explicabo nulla maiores eos nemo vel velit sunt voluptates! Veniam,
        culpa?
      </p>

      <AddProjedct />

      <ProjectList />
    </div>
  );
};

export default DashboardHome;
