import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";

const theme = createTheme({
  typography: {
    fontFamily: ["san-franscico", "sans-serif"].join(","),
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container disableGutters maxWidth="sm">
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
