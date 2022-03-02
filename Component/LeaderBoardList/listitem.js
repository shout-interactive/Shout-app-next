import * as React from "react";
// import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Group } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";

import { useStyles } from "./style";

const LeaderBoardListItem = ({ data }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItemWrapper}>
      <div className={classes.leftDiv}>
        <Typography
          sx={{ display: "inline", fontWeight: 900, fontSize: "1.2rem", paddingRight: 3 }}
          component="span"
          variant="body2"
          color="#4d4c83"
        >
          {data.id}
        </Typography>
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src={data.avatarUrl}
            sx={{
              width: 56,
              height: 56,
              marginRight: 2,
              borderRadius: 2,
            }}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{ fontWeight: "bolder !important" }}
          primary={
            <Typography
              sx={{ display: "inline", fontSize: "1.2rem", fontWeight: 900, color: "#4d4c83" }}
              component="span"
              variant="body2"
              color="#4d4c83"
            >
              {data.username}
            </Typography>
          }
        />
      </div>
      <div className={classes.rightDiv}>
        <Group />
        <Typography className={classes.total}>{data.total}</Typography>
      </div>
    </ListItem>
  );
};

export default LeaderBoardListItem;
