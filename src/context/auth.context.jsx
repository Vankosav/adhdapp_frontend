import React, { useState, useEffect } from "react";
import axios from "axios";
const URL = import.meta.env.VITE_API_URL;

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  const authenticateUser = () => {
    return new Promise((resolve, reject) => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        axios
          .get(`${URL}/auth/verify`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          })
          .then((response) => {
            const user = response.data;
            setIsLoggedIn(true);
            setIsLoading(false);
            setUser(user);
            resolve();
          })
          .catch((error) => {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);
            reject();
          });
      } else {
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);
        reject();
      }
    });
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    console.log("Hello");
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
