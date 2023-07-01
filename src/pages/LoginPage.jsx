import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const URL = "";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    console.log("You have log in", requestBody);
  };
  return (
    <div className="login">
      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
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
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
