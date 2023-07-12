import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiCalendar,
  HiViewBoards,
  HiAnnotation,
} from "react-icons/hi";

export default function DefaultSidebar() {
  return (
    <Sidebar
      aria-label="Default sidebar"
      className="h-screen width-15 p-4 bg-light-blue"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiViewBoards} labelColor="dark">
            <p>Kanban</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiAnnotation}>
            <p>Notes</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiCalendar}>
            <p>Calendar</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
