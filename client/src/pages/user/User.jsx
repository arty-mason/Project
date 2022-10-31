import React /*, { useEffect useState } */ from "react";

/* import axios from "axios"; */

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

import DataTable from "./Table";

const User = () => {
  /* const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get(
      `http://localhost:5001/collections-lib/europe-central2/app/collections/last`
    );
    setData(response.data);
  };
 */
  /*   useEffect(() => {
    loadData();
  }, []); */

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
