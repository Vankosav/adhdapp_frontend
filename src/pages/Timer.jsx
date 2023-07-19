import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import PlayBtn from "../components/Pomodoro/PlayBtn";
import PauseBtn from "../components/Pomodoro/PauseBtn";
import SettingsBtn from "../components/Pomodoro/SettingsBtn";
import { useContext, useEffect, useRef, useState } from "react";
import PomodoroSettingsContext from "../context/PomodoroSettings.context";

const red = "#f54e4e";
const green = "#4aec8c";
