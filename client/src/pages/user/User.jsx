import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

import DataTable from "./Table";

const User = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "93.2vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h6"
        sx={{
          color: theme.palette?.mode === "dark" ? "white" : "black",
          my: "15px",
        }}
      >
        My collections
      </Typography>
      <DataTable />
    </Box>
  );
};

export default User;
