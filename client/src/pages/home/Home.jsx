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
        justifyContent: "center",
        my: "100px",
      }}
    >
      <Typography
        component="h1"
        textAlign="center"
        color="primary"
        sx={{
          fontSize: {
            xl: "50px",
            lg: "45px",
            md: "40px",
            sm: "30px",
            xs: "22px",
          },
          fontWeight: "800",
        }}
      >
        Welcome to collections library!
      </Typography>
      <Box>
        <Typography
          textAlign="center"
          variant="h4"
          component="h2"
          color="primary"
          sx={{
            fontSize: {
              xl: "40px",
              lg: "35px",
              md: "30px",
              sm: "25px",
              xs: "20px",
            },
          }}
        >
          Want to create your own collection on our website? &nbsp;
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Sign up
          </Link>
        </Typography>
        <Typography
          textAlign="center"
          variant="h4"
          component="h2"
          color="primary"
          marginBottom="25px"
          sx={{
            fontSize: {
              xl: "40px",
              lg: "35px",
              md: "30px",
              sm: "25px",
              xs: "20px",
            },
          }}
        >
          Already have an account? &nbsp;
          <Link to="/signin" style={{ textDecoration: "none" }}>
            Sign in
          </Link>
        </Typography>
      </Box>
      <LatestItems />
      <Feed />
      <TagCloud />
    </Box>
  );
};

export default Home;
