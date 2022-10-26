import Box from "@mui/material/Box";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Wrapper = (props) => {
  const { children } = props;
  const theme = useTheme();
  return (
    <Box
      fullWidth
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: theme.palette?.mode === "dark" ? "#607d8b" : "#eceff1",
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
