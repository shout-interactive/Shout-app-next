import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Container from "@mui/material/Container"
import { Provider } from "react-redux"
import { useStore } from "../store/store"

const theme = createTheme({
	typography: {
		fontFamily: ["san-franscico", "sans-serif"].join(","),
	},
})
function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState)

	return (
		<>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Container disableGutters maxWidth="sm">
						<Component {...pageProps} />
					</Container>
				</ThemeProvider>
			</Provider>
		</>
	)
}

export default MyApp
