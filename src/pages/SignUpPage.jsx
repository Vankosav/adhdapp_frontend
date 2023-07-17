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
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center bg-dark-blue px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full rounded-lg bg-light-blue shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
    
      <form className="space-y-4 md:space-y-6 " action="" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
        <input className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""type="text" name="name" value={name} onChange={handleNameInpt} />
        <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surname:</label>
        <input className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
          type="text"
          name="surname"
          value={surname}
          onChange={handleSurnameInpt}
        />
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
        <input className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailInpt}
        />
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
        <input className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordInpt}
        />
        <div className="ml-3 text-sm">
        <label htmlFor="role" className="font-light text-gray-500 dark:text-gray-300"> Are you a teacher? </label>
        <div className="flex items-center h-5">
        <input
          type="checkbox"
          name="role"
          value={role}
          onChange={handleRoleInpt}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""
        />
        </div>
        </div>
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
          Sign up
        </Button>
        
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="mt-12">
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account?</p>
      <Link to={"/login"} >
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
                  Login here
                </Button></Link>
    </div>
    </div>
    </div>
    </div>
    
    </section>
  );
};

export default SignUp;
