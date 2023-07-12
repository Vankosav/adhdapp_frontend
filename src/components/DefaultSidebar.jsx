import { Sidebar } from "flowbite-react";
import { HiCalendar, HiViewBoards, HiAnnotation } from "react-icons/hi";

export default function DefaultSidebar() {
  return (
    <Sidebar
      aria-label="Default sidebar"
      className="h-screen width-15 p-4 bg-light-blue"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            className="dashboard-link"
            href="#"
            icon={HiViewBoards}
            labelColor="dark"
          >
            <p>Kanban</p>
          </Sidebar.Item>
          <Sidebar.Item className="dashboard-link" href="#" icon={HiAnnotation}>
            <p>Notes</p>
          </Sidebar.Item>
          <Sidebar.Item className="dashboard-link" href="#" icon={HiCalendar}>
            <p>Calendar</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
