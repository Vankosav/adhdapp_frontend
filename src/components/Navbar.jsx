import React from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { Button } from "@mui/material";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Logo</h2>
      <div className="navbar-container">
        <div className="navbar-menu">
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
                Sign in
              </Button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
