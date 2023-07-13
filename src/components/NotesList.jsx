import { useContext, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const NotesList = () => {
  const [title, setTitle] = useState("Private");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Assuming you have the user object available in your authentication context

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);
  const handleNoteSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      owner: user._id, // Access the user ID from your authentication context
      title,
      content,
    };

    axios
    .get(`${URL}/auth/dashboard`, requestBody)
    .then((response) => {
      console.log("JWT TOKEN", response.data.authToken);
      // Handle the response
      console.log(response.data);
      navigate("/dashboard");
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
      setErrorMessage("Failed to create note.");
    });
};




return (
<div></div>
  );
};

export default NotesList;