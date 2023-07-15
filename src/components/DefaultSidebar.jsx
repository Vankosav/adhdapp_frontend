import { Button, Sidebar } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiCalendar, HiViewBoards, HiAnnotation, HiHome } from "react-icons/hi";

export default function DefaultSidebar(props) {
  const {
    showProjects,
    setShowProjects,
    showCalendar,
    setShowCalendar,
    showNotes,
    setShowNotes,
  } = props;

  const navigate = useNavigate();

  const handleHomeBtn = () => {
    setShowProjects(false);
    setShowNotes(false);
    setShowCalendar(false);
    navigate("/dashboard");
  };
  const handleProjectBtn = () => {
    setShowProjects(true);
    setShowNotes(false);
    setShowCalendar(false);
    navigate("/dashboard/projects");
  };
  const handleNotesBtn = () => {
    setShowProjects(false);
    setShowNotes(true);
    setShowCalendar(false);
    navigate("/dashboard/notes");
  };
  const handleCalendarBtn = () => {
    setShowProjects(false);
    setShowNotes(false);
    setShowCalendar(true);
    navigate("/dashboard/calendar");
  };
  return (
    <div>
      <Sidebar
        aria-label="Default sidebar"
        className="w-screen p-4 bg-light-blue lg:h-screen "
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
