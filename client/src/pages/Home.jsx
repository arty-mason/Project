import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "50px",
      }}
    >
      <Typography variant="h3" component="h1" textAlign="center">
        Welcome to collections library!
      </Typography>
      <Feed />
      <Box>
        <Typography textAlign="center">
          Want to create your own collection on our website? &nbsp;
          <Link to="/signup">Sign up</Link>
        </Typography>
        <Typography textAlign="center">
          Already have an account? &nbsp;
          <Link to="/signin">Sign in</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
