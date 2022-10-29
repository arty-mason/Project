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
  );
};

export default LatestItems;
