import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import mockData from "../services/collection-data";

const columns = [
  {
    field: "item",
    headerName: "Item name",
    width: 250,
  },
  {
    field: "collection",
    headerName: "Collection name",
    width: 300,
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
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default LatestItems;
