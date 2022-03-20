import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
// import { Box, , Tab, Tabs } from "@mui/material";

import MyInvites from "./myInvitesTab";
import MyParties from "./myPartiesTab";

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
    <Box sx={{ marginBottom: "90px" }}>
      <Box className={classes.tabsWrapper}>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          aria-label="shout party tabs"
        >
          <Tab className={classes.tab} label="My parties" {...a11yProps(0, "invites")} />
          <Tab className={classes.tab} label="My invitees" {...a11yProps(1, "parties")} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MyParties />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyInvites />
      </TabPanel>
    </Box>
  );
};

export default TabsComponent;
