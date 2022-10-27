import * as React from "react";
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
    <DataGrid
      sx={{
        width: "1100px",
        height: "400px",
      }}
      autoHeight
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
};

export default LatestItems;
