import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import CustomizedSwitches from "../config/ThemeSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
import { Button } from "@mui/material";

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
        position: "fixed",
        width: "100%",
        zIndex: 10,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <CustomizedSwitches toggleTheme={toggleTheme} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            textAlign: "center",
          }}
        >
          <Link to="/"> Home</Link>
        </Typography>
        {user?.displayName ? (
          <Button
            onClick={handleLogout}
            sx={{
              color: theme.palette?.mode === "dark" ? "white" : "black",
            }}
          >
            Logout
          </Button>
        ) : (
          <Link to="/signin" />
        )}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </Box>
  );
};

export default Header;
