import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/DefaultSidebar";
import { useEffect, useState } from "react";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-8  grid-rows-[120px,1fr] h-screen">
        <Sidebar className="order-1 col-start-1 col-end-9 auto-rows-max row-start-1 w-screen lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 " />
        <div
          id="board"
          className="order-2 bg-gray col-start-1 col-end-9  lg:col-start-2 lg:col-end-10 lg:row-start-1 lg:row-end-3"
        ></div>
      </div>
    </>
  );
};

export default Dashboard;
