import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/DefaultSidebar";
import { useEffect, useState } from "react";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
};

export default Dashboard;
