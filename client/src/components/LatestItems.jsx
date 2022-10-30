import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import mockData from "../services/collection-data";
import { Typography } from "@mui/material";

const columns = [
  {
    field: "item",
    headerName: "Item name",
    width: 250,
  },
  {
    field: "collection",
    headerName: "Collection name",
    width: 250,
  },
  {
    field: "author",
    headerName: "Collection author",
    type: "number",
    width: 250,
  },
  {
    field: "date",
    headerName: "Date of adding",
    description: "This column has a value getter and is not sortable.",
    width: 200,
  },
];

const rows = mockData.map((data) => {
  return {
    id: data.id,
    item: data.item,
    collection: data.collection,
    author: data.author,
    date: data.date,
  };
});

const LatestItems = () => {
  return (
    <>
      <Typography
        component="h3"
        textAlign="center"
        color="primary"
        sx={{
          fontSize: {
            xl: "50px",
            lg: "45px",
            md: "40px",
            sm: "30px",
            xs: "22px",
          },
          fontWeight: "800",
          mb: "20px",
        }}
      >
        Recently added items
      </Typography>
      <DataGrid
        sx={{
          width: {
            xl: "1200px",
            lg: "1000px",
            md: "800px",
            sm: "550px",
            xs: "300px",
          },
          height: "400px",
        }}
        scrollbarSize={10}
        autoHeight
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
        checkboxSelection
        density="comfortable"
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </>
  );
};

export default LatestItems;
