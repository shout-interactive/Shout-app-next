import React from "react";
import { Box, SwipeableDrawer, Stack, Typography, } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import GroupAddSharpIcon from "@mui/icons-material/GroupAddSharp";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";

import { useStyles } from "./style";

const LiveStreamDrawer = ({ show, toggleDrawer, handleSetLiveStreamMode }) => {
	const classes = useStyles();

	// const [selectedArr, setSelectedArray] = useState([]);
	// const [selectedIndexArr, setSelectedIndexArray] = useState([]);

	const SetLiveStreamMode = (mode) => {
		handleSetLiveStreamMode(mode);
	};

	const liveStreamModeData = [
		{
			icon: <GroupSharpIcon />,
			mode: "My Party",
		},
		{
			icon: <GroupAddSharpIcon />,
			mode: "Celebrants",
		},
		{
			icon: <LanguageSharpIcon />,
			mode: "Everyone",
		},
	];

	const _renderItem = (data) => (
		<Box
			onClick={() => {
				SetLiveStreamMode(data.mode);
				toggleDrawer(false);
			}}
			sx={{ cursor: "pointer", display: "flex", flexDirection: "row", width: "100%", alignItems: "center", fontSize: "1.2rem" }}
		>
			{data.icon}
			<Typography variant="h5" sx={{ fontSize: "1.2rem", color: "#0A1F44", fontWeight: "600", marginLeft: "10px" }}>
				{data.mode}
			</Typography>
		</Box>
	);

	const list = () => (
		<Box
			sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: ".5rem 1.2rem" }}
			role="presentation"
		>
			<Stack direction="horizontal" gap={3} className={classes.bottomDrawerHeader}>
				<div />
				<DragHandleIcon />
				<div />
			</Stack>
			<Box sx={{ width: "100%" }}>
				<Typography sx={{ color: "#0A1F44", fontWeight: "bold" }} variant="h5">
					Switch party
				</Typography>
				<Typography sx={{ color: "#0A1F44" }} variant="body1">
					{" "}
					You can switch between party rooms here
				</Typography>
			</Box>

			<Stack sx={{ padding: "1rem", width: "100%", margin: "1rem 0rem" }} spacing={4}>
				{liveStreamModeData.map((data) => _renderItem(data))}
			</Stack>
		</Box>
	);

	return (
		<div className={classes.bottomDrawerContainer}>
			<SwipeableDrawer
				sx={{ "& 	.MuiDrawer-paper": { maxHeight: "70%", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", maxWidth: "sm", margin: "0 auto" } }}
				modal={classes.bottomDrawerContainer}
				anchor={"bottom"}
				open={show}
				onClose={() => toggleDrawer(false)}
				onOpen={() => toggleDrawer(true)}
			>
				{list()}
			</SwipeableDrawer>
		</div>
	);
};

export default LiveStreamDrawer;
