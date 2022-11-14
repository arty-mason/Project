import * as React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const MUISwitchProps = {
  width: 62,
  height: 34,
  padding: 7,
};

const MUISwitchBase = {
  margin: 1,
  padding: 0,
  transform: "translateX(6px)",
  checkedColor: "#fff",
  checkedTransform: "translateX(22px)",
  thumbBeforeBackgoundImg: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
    "#fff"
  )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
  checkedSwitchTrack: {
    opacity: 1,
    backgroundColor: {
      darkMode: "#8796A5",
      lightMode: "#aab4be",
    },
  },
};

const MUISwitchThumb = {
  backgroundColor: {
    darkMode: "#003892",
    lightMode: "#001e3c",
  },
  width: 32,
  height: 32,
  before: {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
      "#fff"
    )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
  },
};

const MUISwitchTrack = {
  opacity: 1,
  backgroundColor: {
    darkMode: "#8796A5",
    lightMode: "#aab4be",
  },
  borderRadius: 20 / 2,
};

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: MUISwitchProps.width,
  height: MUISwitchProps.height,
  padding: MUISwitchProps.padding,
  "& .MuiSwitch-switchBase": {
    margin: MUISwitchBase.margin,
    padding: MUISwitchBase.padding,
    transform: MUISwitchBase.transform,
    "&.Mui-checked": {
      color: MUISwitchBase.checkedColor,
      transform: MUISwitchBase.checkedTransform,
      "& .MuiSwitch-thumb:before": {
        backgroundImage: MUISwitchBase.thumbBeforeBackgoundImg,
      },
      "& + .MuiSwitch-track": {
        opacity: MUISwitchBase.checkedSwitchTrack.opacity,
        backgroundColor:
          theme.palette?.mode === "dark"
            ? MUISwitchBase.checkedSwitchTrack.backgroundColor.darkMode
            : MUISwitchBase.checkedSwitchTrack.backgroundColor.lightMode,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor:
      theme.palette?.mode === "dark"
        ? MUISwitchThumb.backgroundColor.darkMode
        : MUISwitchThumb.backgroundColor.lightMode,
    width: MUISwitchThumb.width,
    height: MUISwitchThumb.height,
    "&:before": {
      content: MUISwitchThumb.before.content,
      position: MUISwitchThumb.before.position,
      width: MUISwitchThumb.before.width,
      height: MUISwitchThumb.before.height,
      left: MUISwitchThumb.before.left,
      top: MUISwitchThumb.before.top,
      backgroundRepeat: MUISwitchThumb.before.backgroundRepeat,
      backgroundPosition: MUISwitchThumb.before.backgroundPosition,
      backgroundImage: MUISwitchThumb.before.backgroundImage,
    },
  },
  "& .MuiSwitch-track": {
    opacity: MUISwitchTrack.opacity,
    backgroundColor:
      theme.palette?.mode === "dark"
        ? MUISwitchTrack.backgroundColor.darkMode
        : MUISwitchTrack.backgroundColor.lightMode,
    borderRadius: MUISwitchTrack.borderRadius,
  },
}));

export default function CustomizedSwitches(props) {
  const { toggleTheme } = props;
  const theme = useTheme();
  return (
    <FormGroup>
      <FormControlLabel
        sx={{
          color: theme.palette?.mode === "dark" ? "black" : "white",
        }}
        control={<MaterialUISwitch sx={{ m: 1 }} onChange={toggleTheme} />}
        label={
          theme.palette?.mode === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
      />
    </FormGroup>
  );
}
