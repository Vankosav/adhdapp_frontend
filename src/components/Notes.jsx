import { useContext, useState } from "react";
import axios from "axios";
import { Button, autocompleteClasses } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const URL = import.meta.env.VITE_API_URL; 

const Notes = () => {
  const [title, setTitle] = useState("Private");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const {user} = useContext(AuthContext); 
  
  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);
  const handleNoteSubmit = (e) => {
    e.preventDefault();
 
    const requestBody = {
      owner: user._id, // Access the user ID from your authentication context
      title,
      content,
    };
  
    const authToken = localStorage.getItem("authToken"); // Retrieve the authToken from localStorage or appropriate storage
  
    axios
      .post(`${URL}/auth/dashboard`, requestBody, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Pass the authToken as the authorization header value
        },
      })
      .then((response) => {
        console.log("JWT TOKEN", authToken);
        console.log(response.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Failed to create note.");
      });
  };
  

  return (
    <div className="">
      <form onSubmit={handleNoteSubmit}>
        
        <label htmlFor="title" className="">Title:</label>
        <select id="title" name="title" required className="" onChange={handleTitle}>
  <option value="Private">Private</option>
  <option value="School">School</option>
  <option value="Work">Work</option>
</select>

        <label>Text:</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={handleContent}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            background: "#F39B53",
            "&:hover": {
              background: "#df7620",
            },
          }}
        >
          Create
        </Button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Notes;
