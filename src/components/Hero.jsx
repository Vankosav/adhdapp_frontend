import { Button } from "@mui/material";
import { Link } from "react-router-dom";
Link;

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <h1 className="hero-title">
          your best friend for focusing and completing tasks
        </h1>
        <p className="hero-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          cupiditate, officia similique id impedit adipisci.
        </p>
        <Link to="/signup">
          <Button
            className="btn hero-btn"
            variant="contained"
            type="submit"
            sx={{
              transition: ".2s ease-in-out 0s",
              background: "#F39B53",
              "&:hover": {
                background: "#df7620",
                transform: "scale(1.25)",
              },
              padding: "1em 2.2em",
              fontWeight: "700",
              marginBottom: "1.25em",
            }}
          >
            Sign in
          </Button>
        </Link>
      </div>
      <div className="hero-img"></div>
    </section>
  );
};

export default Hero;
