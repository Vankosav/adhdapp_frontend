import { Button, Sidebar } from "flowbite-react";

import { HiCalendar, HiViewBoards, HiAnnotation } from "react-icons/hi";

export default function DefaultSidebar() {
  return (
    <div>
      <Sidebar
        aria-label="Default sidebar"
        className="w-screen p-4 bg-light-blue lg:h-screen "
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-rows justify-around lg:block">
            <Sidebar.Item
              href="/projects"
              icon={HiViewBoards}
              labelColor="dark"
            >
              <Button className="border-none dashboard-link pl-2">
                Projects
              </Button>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiAnnotation}>
              <Button className="border-none dashboard-link pl-2">Notes</Button>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiCalendar}>
              <Button className="border-none dashboard-link pl-2">
                Calendar
              </Button>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
