import React from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Navbar = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav className="navbar">
      {isLoggedIn ? <h2>{user.name} Dashboard</h2> : <h2>Logo</h2>}
      <div className="navbar-container">
        <div className="navbar-menu">
          {isLoggedIn && (
            <ul>
              <Link to="/">
                <Button
                  onClick={logOutUser}
                  variant="contained"
                  type="submit"
                  sx={{
                    background: "#F39B53",
                    "&:hover": {
                      background: "#df7620",
                    },
                  }}
                >
                  Log out
                </Button>
              </Link>
            </ul>
          )}

          {!isLoggedIn && (
            <ul>
              <Link to="/signup">
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
              </Link>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
