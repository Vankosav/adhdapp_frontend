import { Routes, Route } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//Pages Import
import SignInForm from "./pages/SignUpPage";
import ErrorPage from "./pages/ErrorPage";
import LoginForm from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard">
          <Route
            index
            element={
              <IsPrivate>
                <Dashboard />
              </IsPrivate>
            }
          />
          <Route
            path="projects"
            element={
              <IsPrivate>
                <Dashboard />
              </IsPrivate>
            }
          />
          <Route
            path="notes"
            element={
              <IsPrivate>
                <Dashboard />
              </IsPrivate>
            }
          />
          <Route
            path="calendar"
            element={
              <IsPrivate>
                <Dashboard />
              </IsPrivate>
            }
          />
        </Route>

        <Route path="signup" element={<SignInForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
