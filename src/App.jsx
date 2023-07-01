import { Routes, Route } from "react-router-dom";
import { Login } from "@mui/icons-material";

// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

//Pages Import
import SignInForm from "./pages/SignUpPage";
import ErrorPage from "./pages/ErrorPage";
import LoginForm from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignInForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
