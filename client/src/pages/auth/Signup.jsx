import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../context/AuthContext";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Input } from "../../services/authInput";

const Signup = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = useUserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log(error);
    try {
      await createUser(login, password);
      navigate("/user");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "700px",
        mx: "auto",
        my: 37.95,
        p: 4,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          component="h1"
          color="primary"
          sx={{ textAlign: "center" }}
        >
          Sign up for a free account
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="primary"
          sx={{ textAlign: "center" }}
        >
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
          required
          autoComplete="off"
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          label="Enter your password"
          type="password"
          required
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          color="primary"
          sx={{
            width: "100px",
            height: "40px",
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
