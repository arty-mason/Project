import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import Feed from "../components/Feed";
import TagCloud from "../components/TagCloud";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" component="h1" textAlign="center">
        Welcome to collections library!
      </Typography>
      <Box>
        <Typography textAlign="center" variant="h4" component="p">
          Want to create your own collection on our website? &nbsp;
          <Link to="/signup">Sign up</Link>
        </Typography>
        <Typography textAlign="center" variant="h4" component="p">
          Already have an account? &nbsp;
          <Link to="/signin">Sign in</Link>
        </Typography>
      </Box>
      <Feed />
      <TagCloud />
    </Box>
  );
};

export default Home;
