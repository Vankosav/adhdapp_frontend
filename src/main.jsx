import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProviderWrapper } from "./context/auth.context.jsx";
import { PomodoroProviderWrapper } from "./context/Pomodoro.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <PomodoroProviderWrapper>
        <Router>
          <App />
        </Router>
      </PomodoroProviderWrapper>
    </AuthProviderWrapper>
  </React.StrictMode>
);
