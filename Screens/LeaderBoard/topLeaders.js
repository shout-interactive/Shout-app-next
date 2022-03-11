import { Typography, Avatar } from "@mui/material";
import { Group } from "@mui/icons-material";

import { useStyles } from "./style";

const TopLeaders = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.topLeadersDivContainer}>
      <div>
        <div className={classes.topLeadersImageContainer}>
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src={data.avatarUrl}
            className={classes.topLeadersImage}
            sx={{ borderRadius: 4 }}
          />
          <Typography className={classes.circle}>{data.id}</Typography>
        </div>
      </div>
      <div>
        <Typography className={classes.title}>{data.username}</Typography>
        <div className={classes.totalInfoWrapper}>
          <Group />
          <Typography className={classes.totalInfo}>{data.total}</Typography>
        </div>
      </div>
    </div>
  );
};

export default TopLeaders;
