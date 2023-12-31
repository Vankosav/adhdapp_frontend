import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import DashboardHome from "./DashboardHome";
import UserNotes from "./Notes";
import ProjectBoard from "./ProjectBoard";
import ProjectList from "./ProjectList";
import UserCalendar from "./Calendar";


const Board = (props) => {
  const {
    showDashboard,
    showProjects,
    setShowProjects,
    showCalendar,
    setShowCalendar,
    showNotes,
    setShowNotes,
  } = props;

  const { user } = useContext(AuthContext);

  return (
    <div className="order-2 bg-gray col-start-1 col-end-9 lg:col-start-2 lg:col-end-10 lg:row-start-1 lg:row-end-3 ">
      {showDashboard && <DashboardHome />}
      {showProjects && <ProjectList />}
      {showNotes && <UserNotes />}
      {showCalendar && <UserCalendar />}
    </div>
  );
};

export default Board;
