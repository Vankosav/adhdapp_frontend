import { Button, Sidebar } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiCalendar, HiViewBoards, HiAnnotation, HiHome } from "react-icons/hi";

export default function DefaultSidebar(props) {
  const {
    showDashboard,
    setShowDashboard,
    showProjects,
    setShowProjects,
    showCalendar,
    setShowCalendar,
    showNotes,
    setShowNotes,
  } = props;
  console.log(showDashboard, showProjects, showNotes, showCalendar);
  const navigate = useNavigate();

  const handleHomeBtn = () => {
    setShowDashboard(true);
    setShowProjects(false);
    setShowNotes(false);
    setShowCalendar(false);
    console.log(showDashboard, showProjects, showNotes, showCalendar);
    navigate("/dashboard");
  };
  const handleProjectBtn = () => {
    setShowDashboard(false);
    setShowProjects(true);
    setShowNotes(false);
    setShowCalendar(false);
    console.log(showDashboard, showProjects, showNotes, showCalendar);
    navigate("/dashboard/projects");
  };
  const handleNotesBtn = () => {
    setShowDashboard(false);
    setShowProjects(false);
    setShowNotes(true);
    setShowCalendar(false);
    console.log(showDashboard, showProjects, showNotes, showCalendar);
    navigate("/dashboard/notes");
  };
  const handleCalendarBtn = () => {
    setShowDashboard(false);
    setShowProjects(false);
    setShowNotes(false);
    setShowCalendar(true);
    console.log(showDashboard, showProjects, showNotes, showCalendar);
    navigate("/dashboard/calendar");
  };
  return (
    <div>
      <Sidebar
        aria-label="Default sidebar"
        className=" p-4 bg-light-blue lg:h-screen "
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-rows justify-around lg:block">
            <Sidebar.Item icon={HiHome} labelColor="dark">
              <Button
                className="border-none dashboard-link pl-2"
                onClick={handleHomeBtn}
              >
                Home
              </Button>
            </Sidebar.Item>
            <Sidebar.Item icon={HiViewBoards} labelColor="dark">
              <Button
                className="border-none dashboard-link pl-2"
                onClick={handleProjectBtn}
              >
                Projects
              </Button>
            </Sidebar.Item>
            <Sidebar.Item icon={HiAnnotation}>
              <Button
                className="border-none dashboard-link pl-2"
                onClick={handleNotesBtn}
              >
                Notes
              </Button>
            </Sidebar.Item>
            <Sidebar.Item icon={HiCalendar}>
              <Button
                className="border-none dashboard-link pl-2"
                onClick={handleCalendarBtn}
              >
                Calendar
              </Button>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
