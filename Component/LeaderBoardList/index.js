import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
// import { useNavigate } from "react-router-dom";

import LeaderBoardListItem from "./listItem";
// import ButtonComponent from "../Button";

import { leaderboardData } from "../../utils/leaderBoardData";

import { useStyles } from "./style";

const LeaderBoardList = ({ data }) => {
  const classes = useStyles();

  const [dense] = React.useState(true);
  // const [secondary, setSecondary] = React.useState(false);
  // const navigate = useNavigate();

  return (
    <Box className={classes.root}>
      <List dense={dense}>
        {leaderboardData?.map((item, i) => (
          <LeaderBoardListItem data={item} key={i} />
        ))}
      </List>
    </Box>
  );
};

export default LeaderBoardList;
