import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CustomBtn } from "./components/CustomBtn";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CustomBtn txt="Let's Explore!" />
      </ThemeProvider>
    </div>
  );
}

export default App;
