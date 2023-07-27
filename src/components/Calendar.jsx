import { useContext, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { Button } from "@mui/material";
import { AuthContext } from '../context/auth.context';

const URL = import.meta.env.VITE_API_URL;

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedStart, setUpdatedStart] = useState("");
  const [updatedEnd, setUpdatedEnd] = useState("");
  const [updatedLocation, setUpdatedLocation] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${URL}/dashboard/events`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleEditEvent = (eventId, title, start, end, location) => {
    setShowForm(true);
    setEditingEventId(eventId);
    setSelectedEvent({
      id: eventId,
      title: title,
      start: formatDateForInput(start),
      end: end ? formatDateForInput(end) : "",
      location: location || "",
    });
  };

  const handleEventClick = (arg) => {
    const clickedEvent = arg.event;
    console.log(clickedEvent);
  
    if (clickedEvent) {
      setShowForm(true);
      setEditingEventId(clickedEvent.id);
      setSelectedEvent(clickedEvent);
      setUpdatedTitle(clickedEvent.title);
      setUpdatedStart(formatDateForInput(clickedEvent.start));
      setUpdatedEnd(clickedEvent.end ? formatDateForInput(clickedEvent.end) : "");
      setUpdatedLocation(clickedEvent.extendedProps.location || "");
    } else {
      setShowForm(true);
      setEditingEventId(null);
      setUpdatedTitle(""); // Clear the form fields when creating a new event
      setUpdatedStart(formatDateForInput(arg.date));
      setUpdatedEnd("");
      setUpdatedLocation("");
      setSelectedEvent(null);
    }
  };
  


  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleDateClick = (click) => {

  
    setShowForm(true);
    setEditingEventId(click.event.id);
    setSelectedEvent(click.event);
    setUpdatedTitle(click.event.title);
    setUpdatedStart(formatDateForInput(click.event.start));
    setUpdatedEnd(click.event.end ? formatDateForInput(click.event.end) : "");
    setUpdatedLocation(click.event.extendedProps.location || "");
  };
  

  const handleCancelEdit = () => {
    setShowForm(false);
    setEditingEventId(null);
    setUpdatedTitle("");
    setUpdatedStart("");
    setUpdatedEnd("");
    setUpdatedLocation("");
  };

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const eventId = editingEventId; // Use the correct variable here
  
    if (eventId) {
      handleUpdateEvent(eventId);
    } else {
      handleEventSubmit(eventId);
    }
  };

  const handleEventSubmit = () => {
    const requestBody = {
      owner: user._id,
      title: updatedTitle,
      start: updatedStart,
      end: updatedEnd,
      location: updatedLocation,
    };
    const authToken = localStorage.getItem('authToken');
    axios
      .post(`${URL}/dashboard/events`, requestBody, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(() => {
        setErrorMessage(null);
        fetchEvents();
        setShowForm(false);
        setUpdatedTitle("");
        setUpdatedStart("");
        setUpdatedEnd("");
        setUpdatedLocation("");
      })
      .catch((error) => {
        console.error('Error creating event:', error);
        setErrorMessage('Failed to create event.');
      });
  }; 

  const handleUpdateEvent = async (eventId) => {
    try {
        console.log(eventId)
      const authToken = localStorage.getItem("authToken");
      await axios.put(
        `${URL}/dashboard/events/${eventId}`,
        {
          title: updatedTitle,
          start: updatedStart,
          end: updatedEnd,
          location: updatedLocation,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      fetchEvents(); // Fetch updated events
      setShowForm(false); // Hide the form
      setEditingEventId(null); // Clear the editing event ID
      setUpdatedTitle(""); // Clear form fields
      setUpdatedStart("");
      setUpdatedEnd("");
      setUpdatedLocation("");
    } catch (error) {
      console.error(error);
    }
  };


 
  const handleDeleteEvent = async (eventId) => {
    try {
        console.log(eventId);
      const authToken = localStorage.getItem("authToken");
      await axios.delete(`${URL}/dashboard/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      // Refresh the events list after successful deletion
      fetchEvents();
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleTitleChange = (e) => setUpdatedTitle(e.target.value);
  const handleStartChange = (e) => setUpdatedStart(e.target.value);
  const handleEndChange = (e) => setUpdatedEnd(e.target.value);
  const handleLocationChange = (e) => setUpdatedLocation(e.target.value);

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleFormSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={updatedTitle}
              onChange={handleTitleChange}
              required
            />
          </label>
          <label>
            Start Time:
            <input
              type="datetime-local"
              name="start"
              value={updatedStart}
              onChange={handleStartChange}
              required
            />
          </label>
          <label>
            End Time:
            <input
              type="datetime-local"
              name="end"
              value={updatedEnd}
              onChange={handleEndChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={updatedLocation}
              onChange={handleLocationChange}
            />
             <Button
            type="submit"
            sx={{
              background: "#F39B53",
              "&:hover": {
                background: "#df7620",
              },
            }}
          >
            Create an Event
          </Button>
          <Button
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
          </label>
  
          {events.map((event) => (
            <div className="fb-card p-2 mb-4" key={event._id}>
            
              <h2>{event.title}</h2>
              <p>{event.start}</p>
              <p>{event.end}</p>
              <p>{event.location}</p>
              
              <Button
                onClick={() => handleEditEvent(event._id, event.title, event.start, event.end, event.location)}
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
                onClick={() => handleDeleteEvent(event._id)} // Pass the eventId to the handleDeleteEvent function
                sx={{
                  background: "#F39B53",
                  "&:hover": {
                    background: "#df7620",
                  },
                }}
              >
                Delete
              </Button>
            </div>
          ))}
  
         
        </form>
      ) : (
        <div></div>
      )}
  
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick} // Use the FullCalendar eventClick handler
      />
    </div>
  );
  
  }

export default Calendar;
