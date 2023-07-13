import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Notes from "../components/Notes";


const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Notes />
     
    </>
  );
};

export default Dashboard;
