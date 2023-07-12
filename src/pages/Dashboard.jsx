import { Navigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";

import Navbar from "../components/Navbar";
import Sidebar from "../components/DefaultSidebar";
import Board from "../components/Board";

const Dashboard = () => {
  const [createProject, setCreateProject] = useState(false);
  const { user } = useContext(AuthContext);
  if (user) {
    return (
      <>
        <Navbar />
        <div className="grid grid-cols-8  grid-rows-[120px,1fr] h-screen">
          <Sidebar
            className="order-1 col-start-1 col-end-9 auto-rows-max row-start-1 w-screen lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 "
            createProject={createProject}
            setCreateProject={setCreateProject}
          />
          <Board
            createProject={createProject}
            setCreateProject={setCreateProject}
          />
        </div>
      </>
    );
  }
};

export default Dashboard;
