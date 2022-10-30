import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

import { useUserAuth } from "../../context/AuthContext";

const User = () => {
  const { user, logOut } = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("You are logged out");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box
      sx={{
        height: "93.2vh",
      }}
    >
      <Typography sx={{ color: "black" }}>
        User: {user && user.email}
      </Typography>
      <Button onClick={handleLogout}>Logout</Button>
    </Box>
  );
};

export default User;
