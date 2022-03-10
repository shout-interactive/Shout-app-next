import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CakeIcon from "@mui/icons-material/Cake";
import CelebrationIcon from "@mui/icons-material/Celebration";
import HomeIcon from "@mui/icons-material/Home";
import { useStyles } from "./style";
import { Paper, Typography, Box } from "@mui/material";

const CalenderCard = ({ backgroundColor, data }) => {
  const props = {
    backgroundColor: backgroundColor,
  };
  const classes = useStyles(props);
  return (
    <Paper className={classes.paperBox}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>{data?.eventName}</Typography>
        <Box>
          {data?.eventType === "birthday" ? (
            <CakeIcon />
          ) : data?.eventType === "anniversary" ? (
            <FavoriteIcon />
          ) : data?.eventType === "graduation" ? (
            <CelebrationIcon />
          ) : data?.eventType === "church" ? (
            <HomeIcon />
          ) : (
            ""
          )}
        </Box>
      </Box>
    </Paper>
  );
};
export default CalenderCard;
