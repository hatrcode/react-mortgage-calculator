import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  // Change MUI primary color to purple (#9159eb)
  palette: {
    primary: {
      main: "#9159eb",
    },
  },
  // Update style for MuiSlider
  components: {
    MuiSlider: {
      styleOverrides: {
        rail: {
          color: "white",
        },
        root: {
          height: "8px",
        },
        thumb: {
          backgroundColor: "#fff",
          border: "5px solid currentColor",
        },
      },
    },
  },
});

export default muiTheme;
