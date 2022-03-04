import Head from "next/head"
import Dynamic from "next/dynamic"

const Wallet = Dynamic(() =>
	import("../Screens/CelebrantLiveStream/index", {
		ssr: false,
	}),
)

function livestream() {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<title> Shout | Celebrant live stream </title>
			</Head>
			<Wallet />
		</>
	)
}

export default livestream
