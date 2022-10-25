import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { theme } from "../config/theme";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "100px",
        backgroundColor: theme.palette.primary.main,
        zIndex: 10,
      }}
    >
      <Typography textAlign="center" variant="h4" component="p">
        Footer
      </Typography>
    </Box>
  );
};

export default Footer;
