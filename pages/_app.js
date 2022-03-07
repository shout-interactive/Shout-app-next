import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utils/EmotionCache";
const clientSideEmotionCache = createEmotionCache();
const theme = createTheme({
  typography: {
    fontFamily: ["san-franscico", "sans-serif"].join(","),
  },
});
function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container disableGutters maxWidth="sm">
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
