import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const HomePage = () => {
  // const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default HomePage;
