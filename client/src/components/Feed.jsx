import React from "react";

import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import mockData from "../services/collection-data";

const Feed = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {mockData.map((data) => {
        return (
          <Card
            outlined
            key={data.id}
            sx={{
              margin: 5,
              width: "350px",
              border: "1px solid gray",
            }}
          >
            <CardHeader
              avatar={
                data.avatar ? (
                  <Avatar>
                    <CardMedia component="img" image={data.avatar} />
                  </Avatar>
                ) : (
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    {data.author[0]}
                  </Avatar>
                )
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={data.author}
              subheader={data.date}
            />
            <CardContent>
              <Typography variant="p" color="text.secondary">
                Item: {data.item} <br></br>
                Collection: {data.collection}
              </Typography>
            </CardContent>
            {data.img ? (
              <CardMedia
                component="img"
                sx={{
                  height: "500px",
                  width: "350px",
                }}
                image={data.img}
                alt={data.item}
              />
            ) : (
              <Typography textAlign="center">No image available</Typography>
            )}

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default Feed;
