import { useState } from "react";
import { Box, Stack, Tab, Tabs } from "@mui/material";

import TopLeaders from "./topLeaders";
import { LeaderBoardButton } from "../../Component/Button";
import LeaderBoardList from "../../Component/LeaderBoardList";

import { topLeadersData } from "../../utils/leaderBoardData";
import { useStyles } from "./style";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};
const TabsComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [todaySelected, setTodaySelected] = useState(true);
  const [weekSelected, setWeekSelected] = useState(false);

  const handleTodaySelected = () => {
    setTodaySelected(true);
    setWeekSelected(false);
  };

  const handleWeekSelected = () => {
    setTodaySelected(false);
    setWeekSelected(true);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index, label) => {
    return {
      id: `${label}-${index}`,
      "aria-controls": `${label}-${index}`,
    };
  };

  return (
    <Box sx={{ marginBottom: "0" }}>
      <Box className={classes.tabsWrapper}>
        <Tabs
          centered
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          aria-label="shout party tabs"
        >
          <Tab className={classes.tab} label="This Week" {...a11yProps(0, "invites")} />
          <Tab className={classes.tab} label="Last week" {...a11yProps(1, "parties")} />
          <Tab className={classes.tab} label="All times" {...a11yProps(2, "parties")} />
        </Tabs>
      </Box>
      <Stack direction="row" spacing={3} className={classes.topLeadersGroupWrapper}>
        {topLeadersData.map((item) => (
          <TopLeaders data={item} />
        ))}
      </Stack>
      <TabPanel value={value} index={0}>
        <LeaderBoardList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LeaderBoardList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LeaderBoardList />
      </TabPanel>
    </Box>
  );
};

export default TabsComponent;
{
  /* <Box sx={{ borderBottom: 1 }}>
			<Stack direction="row" spacing={1} className={classes.buttonGroupWrapper}>
				<LeaderBoardButton handleClick={() => handleTodaySelected()} selected={todaySelected} title="Today" />
				<LeaderBoardButton handleClick={() => handleWeekSelected()} selected={weekSelected} title="This Week" />
			</Stack>

			<Stack direction="row" spacing={3} className={classes.topLeadersGroupWrapper}>
				{topLeadersData.map((item) => (
					<TopLeaders data={item} />
				))}
			</Stack>

			{todaySelected && <LeaderBoardList />}
			{weekSelected && <LeaderBoardList />}
		</Box> */
}
