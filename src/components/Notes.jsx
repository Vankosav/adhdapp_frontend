import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";

import { AuthContext } from "../context/auth.context";

const URL = import.meta.env.VITE_API_URL;

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");
  
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(`${URL}/dashboard/notes`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditNote = (noteId, title, content) => {
    setEditingNoteId(noteId);
    setUpdatedTitle(title);
    setUpdatedContent(content);
  };

  const handleUpdateNote = async (noteId) => {
    try {
      const authToken = localStorage.getItem("authToken");
      await axios.put(
        `${URL}/dashboard/notes/${noteId}`,
        {
          title: updatedTitle,
          content: updatedContent,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      // Refresh the notes list after successful update
      fetchNotes();
      // Clear the editing state
      setEditingNoteId(null);
      setUpdatedTitle("");
      setUpdatedContent("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelEdit = () => {
    // Clear the editing state
    setEditingNoteId(null);
    setUpdatedTitle("");
    setUpdatedContent("");
  };

  const handleDeleteNote = async (noteId) => {
    try {
      const authToken = localStorage.getItem("authToken");
      await axios.delete(`${URL}/dashboard/notes/${noteId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      // Refresh the notes list after successful deletion
      fetchNotes();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNoteSubmit = (title, content) => {
    const requestBody = {
      owner: user._id,
      title,
      content,
    };

    const authToken = localStorage.getItem("authToken");
    axios
      .post(`${URL}/dashboard/notes`, requestBody, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log("JWT TOKEN", authToken);
        console.log(response.data);
        setErrorMessage(null); // Clear any previous error message
        fetchNotes(); // Update the notes list after successful creation
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Failed to create note.");
      });
  };

  const handleTitle = (e) => setUpdatedTitle(e.target.value);
  const handleContent = (e) => setUpdatedContent(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNoteSubmit(updatedTitle, updatedContent);
    // Clear the form fields after submitting
    setUpdatedTitle("");
    setUpdatedContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <select id="title" name="title" required onChange={handleTitle}>
          <option value="Private">Private</option>
          <option value="School">School</option>
          <option value="Work">Work</option>
        </select>

        <label>Text:</label>
        <input type="text" name="content" value={updatedContent} onChange={handleContent} />
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

      {notes.length > 0 && <h1>Notes List</h1>}
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note._id}>
            {editingNoteId === note._id ? (
              <>
                <TextField
                  label="Title"
                  value={updatedTitle}
                  onChange={handleTitle}
                  fullWidth
                />
                <TextField
                  label="Content"
                  value={updatedContent}
                  onChange={handleContent}
                  fullWidth
                  multiline
                  rows={4}
                />
                <Button
                  variant="contained"
                  onClick={() => handleUpdateNote(note._id)}
                  sx={{
                    background: "#F39B53",
                    "&:hover": {
                      background: "#df7620",
                    },
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCancelEdit}
                  sx={{
                    background: "#F39B53",
                    "&:hover": {
                      background: "#df7620",
                    },
                  }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                <Button
                  variant="contained"
                  onClick={() => handleEditNote(note._id, note.title, note.content)}
                  sx={{
                    background: "#F39B53",
                    "&:hover": {
                      background: "#df7620",
                    },
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleDeleteNote(note._id)}
                  sx={{
                    background: "#F39B53",
                    "&:hover": {
                      background: "#df7620",
                    },
                  }}
                >
                  Delete
                </Button>
              </>
            )}
          </div>
        ))
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default Notes;
