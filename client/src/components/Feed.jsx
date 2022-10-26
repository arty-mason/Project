import React from "react";

import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";

import {
  Avatar,
  Box,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import mockData from "../services/collection-data";

const Feed = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={1}
      sx={{
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {mockData.map((data) => {
        return (
          <Grid
            key={data.id}
            item
            lg={2}
            md={4}
            sm={4}
            xs={6}
            sx={{
              my: "50px",
              height: {
                xl: "500px",
                lg: "400px",
                md: "350px",
                sm: "300px",
                xs: "250px",
              },
              border: `1px solid ${theme.palette.primary.dark}`,
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
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
              title={data.author}
              subheader={data.date}
            />
            <Typography variant="p" color="text.secondary">
              Item: {data.item} <br></br>
              Collection: {data.collection}
            </Typography>
            <CardContent>
              {data.img ? (
                <CardMedia
                  component="img"
                  sx={{
                    border: "1px solid",
                    height: {
                      xl: "250px",
                      lg: "200px",
                      md: "325px",
                      sm: "250px",
                      xs: "100px",
                    },
                    width: {
                      xl: "200px",
                      lg: "200px",
                      md: "325px",
                      sm: "250px",
                      xs: "100px",
                    },
                  }}
                  image={data.img}
                  alt={data.item}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    border: "1px solid",
                    height: {
                      xl: "250px",
                      lg: "200px",
                      md: "325px",
                      sm: "250px",
                      xs: "100px",
                    },
                    width: {
                      xl: "200px",
                      lg: "200px",
                      md: "325px",
                      sm: "250px",
                      xs: "100px",
                    },
                  }}
                >
                  <Typography textAlign="center">No image available</Typography>
                </Box>
              )}
            </CardContent>
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
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Feed;
