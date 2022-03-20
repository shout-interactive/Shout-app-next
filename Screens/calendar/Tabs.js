import React, { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { useStyles } from "./style";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EventTab from "./EventTab";
import Otherevent from "./OtherEvent";

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

const TableTab = () => {
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
          <Tab className={classes.tab} label="My Event" {...a11yProps(0, "invites")} />
          <Tab className={classes.tab} label="Other Event" {...a11yProps(1, "parties")} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <EventTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Otherevent />
      </TabPanel>
    </Box>
  );
};
export default TableTab;
