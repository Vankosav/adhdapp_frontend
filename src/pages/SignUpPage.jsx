import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const URL = import.meta.env.VITE_API_URL;

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  // Handle Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, surname, email, password, role };
    axios
      .post(`${URL}/auth/signup`, newUser)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  // Handle Inputs

  const handleNameInpt = (e) => setName(e.target.value);
  const handleSurnameInpt = (e) => setSurname(e.target.value);
  const handleEmailInpt = (e) => setEmail(e.target.value);
  const handlePasswordInpt = (e) => setPassword(e.target.value);
  const handleRoleInpt = (e) => {
    e.target.checked ? setRole("teacher") : setRole("user");
  };

  return (
    <div className="signup">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" value={name} onChange={handleNameInpt} />
        <label htmlFor="">Surname:</label>
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={handleSurnameInpt}
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailInpt}
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordInpt}
        />
        <label htmlFor="">Role:</label>
        Are you a teacher?
        <input
          type="checkbox"
          name="role"
          value={role}
          onChange={handleRoleInpt}
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
          Sign in
        </Button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
};

export default SignUp;
