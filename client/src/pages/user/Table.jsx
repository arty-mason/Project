import axios from "axios";
import React, { useEffect, useState } from "react";

import { /* Button, */ Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const rows = [
  {
    id: 1,
    label: "Name",
  },
  {
    id: 2,
    label: "Type",
  },
  {
    id: 3,
    label: "Description",
  },
  {
    id: 4,
    label: "Tags",
  },
  {
    id: 5,
    label: "Created",
  },
];

const DataTable = (theme) => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get(
      `http://localhost:5001/collections-lib/europe-central2/app/collections/last`
    );
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const TableHeader = styled(Typography)({
    border: `2px solid ${
      theme.palette?.mode === "dark" ? "#8796A5" : "#aab4be"
    }`,
    padding: "1px",
  });

  const Title = styled(Typography)({
    border: `2px solid ${
      theme.palette?.mode === "dark" ? "#8796A5" : "#aab4be"
    }`,
    padding: "1px",
    color: theme.palette?.mode === "dark" ? "#0d47a1" : "#0288d1",
    textAlign: "center",
  });

  const TableBox = styled(Box)({
    border: `1px solid ${
      theme.palette?.mode === "dark" ? "#8796A5" : "#aab4be"
    }`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  });

  return (
    <TableBox
      sx={{
        width: "1200px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        {rows.map((row) => (
          <TableHeader key={row.id} variant="h6" color="primary">
            {row.label}
          </TableHeader>
        ))}
      </Box>
      <Box>
        {data.map((item) => {
          return (
            <Box
              key={item._id}
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Title width="150px">{item.name}</Title>
              <Title width="150px">{item.type}</Title>
              <Title width="150px">{item.description}</Title>
              <Title width="150px">{item.tags.join(", ")}</Title>
              <Title width="150px">{item.createdAt}</Title>
            </Box>
          );
        })}
      </Box>
    </TableBox>
  );
};

export default DataTable;
