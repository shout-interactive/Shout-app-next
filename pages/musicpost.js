import Head from "next/head"
import Dynamic from "next/dynamic"

const Wallet = Dynamic(() =>
	import("../Screens/MusicPost/index", {
		ssr: false,
	}),
)

function wallet() {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<title> Shout | Music Post </title>
			</Head>
			<Wallet />
		</>
	)
}

export default wallet
