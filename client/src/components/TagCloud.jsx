import { Box } from "@mui/material";
import { TagCloud } from "react-tagcloud";

const data = [
  { value: "Rare Signature Guitars", count: 38 },
  { value: "Famous books & rare typography", count: 30 },
  { value: "Late industrial era furniture", count: 28 },
  { value: "Unique Whiskey Bottles", count: 25 },
  { value: "Ancient and middle-age coins", count: 33 },
  { value: "Teddy bears", count: 18 },
  { value: "Toy cars", count: 20 },
];

const Tags = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <TagCloud
      minSize={12}
      maxSize={35}
      tags={data}
      randomSeed={500}
      style={{ width: 500, textAlign: "center" }}
    />
  </Box>
);

export default Tags;
