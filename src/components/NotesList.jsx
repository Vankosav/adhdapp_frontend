import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = import.meta.env.VITE_API_URL; 

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios.get(`${URL}/auth/dashboard`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setNotes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotes();
  }, []);


  return (
    <div>
      {notes.length > 0 && <h1>Notes List</h1>}
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );

};

export default NotesList;
