import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

import CustomizedSwitches from "../config/ThemeSwitcher";
import { useUserAuth } from "../context/AuthContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = (props) => {
  const { toggleTheme } = props;
  const theme = useTheme();
  const { user, logOut } = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("You are logged out");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box
      position="static"
      sx={{
        flexGrow: 1,
        top: "0",
        left: "0",
        position: "sticky",
        width: "100%",
        zIndex: 10,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon
              color="white"
              sx={{
                display: { sm: "none", xs: "block" },
              }}
            />
          </IconButton>
          <CustomizedSwitches toggleTheme={toggleTheme} />
        </Box>
        {user?.displayName ? null : (
          <Button
            variant="contained"
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              border: `2px solid ${
                theme.palette?.mode === "dark" ? "black" : "white"
              }`,
            }}
          >
            <HomeIcon />
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                noWrap
                component="div"
                sx={{
                  color: theme.palette?.mode === "dark" ? "black" : "white",
                  textAlign: "center",
                  fontWeight: 600,
                  mt: "1px",
                }}
              >
                Home
              </Typography>
            </Link>
          </Button>
        )}
        <Box
          sx={{
            display: "flex",
          }}
        >
          {user?.displayName ? (
            <Box>
              <Button
                variant="contained"
                sx={{
                  border: `2px solid ${
                    theme.palette?.mode === "dark" ? "black" : "white"
                  }`,
                }}
              >
                <Link to="/user" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: theme.palette?.mode === "dark" ? "black" : "white",
                      fontWeight: 600,
                    }}
                  >
                    My account
                  </Typography>
                </Link>
              </Button>
              <Button
                onClick={handleLogout}
                sx={{
                  color: theme.palette?.mode === "dark" ? "black" : "white",
                }}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Link to="/signin" />
          )}

          <Search
            sx={{
              color: theme.palette?.mode === "dark" ? "black" : "white",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Header;
