import { PomodoroContext } from "../context/Pomodoro.context";

import Timer from "../pages/Timer";
import PomodoroSettings from "../pages/PomodoroSettings";
import { useContext } from "react";

const DashboardHome = () => {
  const { showSettings } = useContext(PomodoroContext);
  return (
    <div className="text-white p-4">
      <h1>DashboardHome</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
        explicabo nulla maiores eos nemo vel velit sunt voluptates! Veniam,
        culpa?
      </p>
      <div className="pomodoro">
        {showSettings ? <PomodoroSettings /> : <Timer />}
      </div>
    </div>
  );
};

export default DashboardHome;
