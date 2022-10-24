import React from "react";

import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Input } from "../services/authInput";
import CustomizedSwitches from "../config/ThemeSwitcher";

const Signup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "700px",
        mx: "auto",
        my: 16,
        p: 4,
      }}
    >
      <Box>
        <Typography variant="h4" component="h1" sx={{ textAlign: "center" }}>
          Sign up for a free account
        </Typography>
        <Typography variant="h6" component="p" sx={{ textAlign: "center" }}>
          Already have an account? <Link to="/">Sign in</Link>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Input
          label="Enter your email or login"
          type="email"
          required
          autoComplete="off"
        />
        <Input
          label="Enter your password"
          type="password"
          required
          autoComplete="off"
        />
        <Button
          variant="contained"
          type="submit"
          onSubmit={() => console.log("Submitted")}
          sx={{
            width: "100px",
            height: "40px",
          }}
        >
          Sign Up
        </Button>
        <CustomizedSwitches />
      </Box>
    </Box>
  );
};

export default Signup;
