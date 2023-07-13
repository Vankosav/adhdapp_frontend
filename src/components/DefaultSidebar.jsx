import { Button, Sidebar } from "flowbite-react";
import { useState } from "react";

import { HiCalendar, HiViewBoards, HiAnnotation } from "react-icons/hi";

export default function DefaultSidebar(props) {
  const {
    showProjects,
    setShowProjects,
    showCalendar,
    setShowCalendar,
    showNotes,
    setShowNotes,
  } = props;

  const handleProjectBtn = () => {
    setShowProjects(true);
    setShowNotes(false);
    setShowCalendar(false);
  };
  const handleNotesBtn = () => {
    setShowProjects(false);
    setShowNotes(true);
    setShowCalendar(false);
  };
  const handleCalendarBtn = () => {
    setShowProjects(false);
    setShowNotes(false);
    setShowCalendar(true);
  };
  return (
    <div>
      <Sidebar
        aria-label="Default sidebar"
        className="w-screen p-4 bg-light-blue lg:h-screen "
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-rows justify-around lg:block">
            <Sidebar.Item
              icon={HiViewBoards}
              href="/dashboard/projects"
              labelColor="dark"
            >
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
