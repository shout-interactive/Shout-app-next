import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { useStore } from "../store/store";
import ClientOnly from "./clientOnly";
import Loader from "../Component/Loading/AppLoader";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const theme = createTheme({
  typography: {
    fontFamily: ["san-franscico", "sans-serif"].join(","),
  },
});
function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/") {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => setLoading(false);
    router.events.on("routeChangeComplete", handleRouteChange);
  }, [router]);

  return (
    <>
      <Loader loading={loading} />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container disableGutters maxWidth="sm">
            <ClientOnly>
              <Component {...pageProps} />
            </ClientOnly>
          </Container>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
