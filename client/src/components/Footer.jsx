import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "100px",
        backgroundColor: "#2a3eb1",
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
