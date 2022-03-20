import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CakeIcon from "@mui/icons-material/Cake";
import CelebrationIcon from "@mui/icons-material/Celebration";
import HomeIcon from "@mui/icons-material/Home";
import { useStyles } from "./style";
import { Paper, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
const CalenderCard = ({ backgroundColor, data, id }) => {
  const props = {
    backgroundColor: backgroundColor,
  };
  const classes = useStyles(props);
  const route = useRouter();
  return (
    <Link href={`/calendar/${id}`}>
      <Paper className={classes.paperBox} onClick={() => route.push("/calendar/invitecalendar")}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>{data}</Typography>
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
              <CakeIcon />
            )}
          </Box>
        </Box>
      </Paper>
    </Link>
  );
};
export default CalenderCard;
