import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../context/AuthContext";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Input } from "../../services/authInput";

const Signin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signIn } = useUserAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signIn(login, password);
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
        height: "60vh",
        mx: "auto",
        my: 16,
        p: 4,
      }}
    >
      <Box>
        <Typography variant="h4" component="h1" sx={{ textAlign: "center" }}>
          Sign in to your account
        </Typography>
        <Typography variant="h6" component="p" sx={{ textAlign: "center" }}>
          Don't have an account yet? <Link to="/signup">Sign up</Link>
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
          onChange={(event) => setLogin(event.target.value)}
        />
        <Input
          label="Enter your password"
          type="password"
          required
          autoComplete="off"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={handleLogin}
          sx={{
            width: "100px",
            height: "40px",
          }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default Signin;
