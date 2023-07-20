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
        return authenticateUser();
      })
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorDescription = error.response
          ? error.response.data.message
          : error.message;
        setErrorMessage(errorDescription);
      });

    console.log("You have log in", requestBody);
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center bg-dark-blue px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full rounded-lg bg-light-blue shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log in to your account
              </h1>
      <form className="space-y-4 md:space-y-6 " onSubmit={handleLoginSubmit}>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>

        <input className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" type="email" name="email" value={email} onChange={handleEmail} />

        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>

        <input className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
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
      <div className="mt-12">
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">Don't have an account yet?</p>
      <Link to={"/signup"}> 
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
                  Sign Up Here
                </Button></Link>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
};

export default Login;
