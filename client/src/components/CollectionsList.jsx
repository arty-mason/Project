import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "item", headerName: "Item name", width: 300 },
  { field: "collection", headerName: "Collection name", width: 220 },
  { field: "author", headerName: "Collection author", width: 100 },
  {
    field: "date",
    headerName: "Date of adding",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    item: "Jack Daniels' Tennesse Special",
    collection: "Unique Whiskey Bottles",
    author: "Martin Scorcese",
    date: "2022-10-20",
  },
  {
    id: 2,
    item: "Jimmi Hendrix Fender Tobacco Burst Strat",
    collection: "Rare Signature Guitars",
    author: "William Wilson",
    date: "2022-10-22",
  },
  {
    id: 3,
    item: "Gutenberg Bible",
    collection: "Famous books & rare typography",
    author: "Jane Sommerset",
    date: "2022-10-21",
  },
  {
    id: 4,
    item: "Abbasid Caliphate dirham (9th century)",
    collection: "Ancient and middle-age coins",
    author: "Sarah Praleska",
    date: "2022-10-19",
  },
  {
    id: 5,
    item: "Parisian chair, XVIII cent",
    collection: "Late industrial era furniture",
    author: "Gregory Basset",
    date: "2022-10-18",
  },
];

export default function DataTable() {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
}
