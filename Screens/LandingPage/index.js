import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"

import { useStyles } from "./style"

import { verifyTokenRequest } from "../../store/actions/get-token"

export const getStaticProps = async () => {
	const userData = await dispatch(verifyTokenRequest())
	return {
		props: {
			user: userData,
		},
	}
}
const LandingPage = ({ user }) => {
	const router = useRouter()
	const dispatch = useDispatch()
	const classes = useStyles()
	// const route
	const [loaded, setLoaded] = useState(false)

	useEffect(async () => {
		const userData = await dispatch(verifyTokenRequest())
		if (typeof window !== "undefined") {
			// Perform localStorage action
			localStorage.setItem("user", JSON.stringify(userData))
			localStorage.setItem("token", userData.token)
			localStorage.setItem("coin", userData.coin)
			localStorage.setItem("userId", userData.user.id)
		}
	})

	useEffect(async () => {
		if (typeof window !== "undefined")
			setTimeout(() => router.push("/home"), 1000)
	}, [])

	return <></>
}

export default LandingPage
