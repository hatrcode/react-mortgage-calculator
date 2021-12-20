import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#9159eb",
    },
  },
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
