import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Notes from "../components/Notes";
import NotesList from "../components/NotesList";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Notes />
      <NotesList />
     
    </>
  );
};

export default Dashboard;
