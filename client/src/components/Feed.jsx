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
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import mockData from "../services/collection-data";

const Feed = () => {
  const theme = useTheme();
  return (
    <Box
      id="test-feed-container"
      sx={{
        display: "flex",
        flexDirection: { lg: "row", xs: "column" },
        justifyContent: "space-around",
        alignItems: "stretch",
      }}
    >
      {mockData.map((data) => {
        return (
          <Paper
            elevation={5}
            key={data.id}
            sx={{
              my: "50px",
              mx: "5px",
              px: {
                xl: "25px",
                lg: "15px",
                md: "20px",
                sm: "25px",
                xs: "30px",
              },
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <CardHeader
              avatar={
                data.avatar ? (
                  <Avatar>
                    <CardMedia
                      component="img"
                      image={data.avatar}
                      aria-label="Avatar"
                    />
                  </Avatar>
                ) : (
                  <Avatar sx={{ bgcolor: "red" }}>{data.author[0]}</Avatar>
                )
              }
              title={data.author}
              subheader={data.date}
            />
            <Typography
              variant="p"
              color="text.secondary"
              sx={{
                maxWidth: {
                  xl: "200px",
                  lg: "160px",
                  md: "300px",
                  sm: "250px",
                  xs: "200px",
                },
                minHeight: "60px",
                fontSize: {
                  xl: "15px",
                  lg: "13px",
                  md: "17px",
                  sm: "17px",
                  xs: "17px",
                },
                textAlign: "center",
              }}
            >
              Item: {data.item} <br></br>
              Collection: {data.collection}
            </Typography>
            <CardContent>
              {data.img ? (
                <CardMedia
                  component="img"
                  sx={{
                    objectFit: "cover",
                    border: "1px solid",
                    height: {
                      xl: "300px",
                      lg: "200px",
                      md: "400px",
                      sm: "350px",
                      xs: "300px",
                    },
                    width: {
                      xl: "200px",
                      lg: "160px",
                      md: "300px",
                      sm: "250px",
                      xs: "200px",
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
                      xl: "300px",
                      lg: "200px",
                      md: "400px",
                      sm: "350px",
                      xs: "300px",
                    },
                    width: {
                      xl: "200px",
                      lg: "180px",
                      md: "300px",
                      sm: "250px",
                      xs: "200px",
                    },
                  }}
                >
                  <Typography textAlign="center">No image available</Typography>
                </Box>
              )}
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="Like">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="Share">
                <Share />
              </IconButton>
            </CardActions>
          </Paper>
        );
      })}
    </Box>
  );
};

export default Feed;
