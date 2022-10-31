/* import axios from "axios"; */
import React from "react";

import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  /*   Button, */
  TableCell,
  /*Box,
   Typography, */
} from "@mui/material";

const DataTable = () => {
  return (
    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
      <TableHead sx={{ color: "white" }}>Table</TableHead>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>2</TableCell>
          <TableCell>3</TableCell>
          <TableCell>4</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DataTable;
