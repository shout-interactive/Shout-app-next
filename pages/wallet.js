import Head from "next/head"
import Dynamic from "next/dynamic"

const Wallet = Dynamic(() =>
	import("../Screens/Wallet/index", {
		ssr: false,
	}),
)

function wallet() {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<title> Shout | Wallet </title>
			</Head>
			<Wallet />
		</>
	)
}

export default wallet
