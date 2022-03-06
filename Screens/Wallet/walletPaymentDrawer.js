import React, { Fragment } from "react"
import { Box, SwipeableDrawer, Typography, Container } from "@mui/material"
import Divider from "@mui/material/Divider"
import { BsChevronLeft } from "react-icons/bs"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWallet"
import RectangleRoundedIcon from "@mui/icons-material/RectangleRounded"

import { useStyles } from "./style"
import { Header } from "../../Component/Header"

const WalletPaymentDrawer = ({
	show,
	toggleDrawer,
	toggleFundWalletDrawer,
}) => {
	const classes = useStyles()

	// const [selectedArr, setSelectedArray] = useState([]);
	// const [selectedIndexArr, setSelectedIndexArray] = useState([]);

	//const handleSelectFriend = (id) => {};

	// const handleAddFriend = () => {
	// 	setSelectedIndexArray([]);
	// 	setSelectedArray([]);
	// 	toggleDrawer(false);
	// };

	const handleGoBack = () => {
		toggleDrawer(false)
	}

	const paymentMethodData = [
		{
			key: 1,
			name: "Shout Wallet",
			value: "Balance (NGN 50,000,000)",
			icon: <AccountBalanceWalletOutlinedIcon />,
		},
		{
			key: 2,
			name: "Loyalty Points",
			value: "Balance (NGN 30,000,000)",
			icon: <RectangleRoundedIcon />,
		},
	]

	const handleToggleFundWalletDrawer = (open) => {
		toggleDrawer(false)
		toggleFundWalletDrawer(open)
	}

	const _renderitems = (data) => (
		<Container
			sx={{ cursor: "pointer" }}
			onClick={() => handleToggleFundWalletDrawer(true)}
		>
			<Box
				sx={{
					width: "100%",
					padding: "1rem 0rem .7rem 0rem",
					margin: "1rem 0rem 0rem 0rem",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{data.icon}
				<Typography
					sx={{
						marginLeft: ".5rem",
						fontWeight: "400",
						fontSize: ".845rem",
						color: "#121163",
					}}
				>
					{data.name} - {data.value}
				</Typography>
			</Box>
			<Divider />
		</Container>
	)

	const list = () => (
		<Container maxWidth="sm" sx={{}} role="presentation">
			<Header
				type="nav"
				title="Select payment method"
				leftLink="/wallet"
				leftIcon={<BsChevronLeft onClick={() => handleGoBack()} />}
				primary
			/>
			<Box>
				{paymentMethodData.map((method, index) => (
					<Fragment key={index}>_renderitems(method)</Fragment>
				))}
			</Box>
		</Container>
	)

	return (
		<div className={classes.bottomDrawerContainer}>
			<SwipeableDrawer
				sx={{ "& 	.MuiDrawer-paper": { maxHeight: "100%", height: "100%" } }}
				modal={classes.bottomDrawerContainer}
				anchor={"bottom"}
				open={show}
				onClose={() => toggleDrawer(false)}
				onOpen={() => toggleDrawer(true)}
			>
				{list()}
			</SwipeableDrawer>
		</div>
	)
}

export default WalletPaymentDrawer
