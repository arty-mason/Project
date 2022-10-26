import Box from "@mui/material/Box";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Wrapper = (props) => {
  const { children } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        backgroundColor: theme.palette?.mode === "dark" ? "#0095a8" : "#428e92",
      }}
    >
      <Box>
        <Box
          sx={{
            my: "100px",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Wrapper;
