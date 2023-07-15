import { useContext, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${URL}/auth/login`, requestBody)
      .then(async (response) => {
        console.log("JWT TOKEN", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });

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
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
};

export default Login;
