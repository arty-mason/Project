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
  <TagCloud
    minSize={10}
    maxSize={30}
    tags={data}
    randomSeed={500}
    style={{
      minWidth: "300px",
      maxWidth: "600px",
      textAlign: "center",
    }}
  />
);

export default Tags;
