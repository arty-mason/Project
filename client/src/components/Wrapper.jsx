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
        width: "100%",
        height: "100%",
        m: 0,
        justifyContent: "space-between",
        backgroundColor: theme.palette?.mode === "dark" ? "#212121" : "#eeeeee",
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
