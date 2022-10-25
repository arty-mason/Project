import Box from "@mui/material/Box";
import React from "react";

const Wrapper = (props) => {
  const { children } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        backgroundColor: "#f3e5f5",
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
