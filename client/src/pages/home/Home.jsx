import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import Feed from "../../components/Feed";
import TagCloud from "../../components/TagCloud";
import LatestItems from "../../components/LatestItems";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
      <LatestItems />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alinItems: "center",
        }}
      >
        <Feed />
        <TagCloud />
      </Box>
    </Box>
  );
};

export default Home;
