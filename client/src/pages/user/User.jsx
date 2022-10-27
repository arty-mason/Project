import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

import { useUserAuth } from "../../context/AuthContext";

const User = () => {
  const { user, logout } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Typography>User: {user && user.email}</Typography>
      <Button onClick={handleLogout}>Logout</Button>
    </Box>
  );
};

export default User;
