import React, { useState } from "react";
import {
  Box,
  SwipeableDrawer,
  Stack,
  Badge,
  Paper,
  Typography,
  IconButton,
  InputBase,
  Button,
  Avatar,
  Radio,
} from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from "@mui/icons-material/Campaign";

import styles from "./style.module.css";

const BottomDrawer = ({ show, toggleDrawer }) => {
  const [selectedArr, setSelectedArray] = useState([]);
  const [selectedIndexArr, setSelectedIndexArray] = useState([]);

  const handleSelectFriend = (id) => {
    const tempID = selectedArr.findIndex((friend) => friend.key === id);

    if (tempID === -1) {
      const friendData = dummyFriendsData.filter((friend) => friend.key === id);
      const tempFriendArray = [...selectedArr, ...friendData];
      const tempSelectedIndex = [...selectedIndexArr, id];
      setSelectedArray(tempFriendArray);
      setSelectedIndexArray(tempSelectedIndex);
    } else {
      const tempArr = [...selectedArr];
      const tempSelectedArr = selectedIndexArr.filter((selectedIndex) => selectedIndex !== id);
      tempArr.splice(tempID, 1);
      setSelectedArray(tempArr);
      setSelectedIndexArray(tempSelectedArr);
    }
  };

  const handleAddFriend = () => {
    setSelectedIndexArray([]);
    setSelectedArray([]);
    toggleDrawer(false);
  };

  const dummyFriendsData = [
    {
      key: 1,
      name: "Anybody Cole",
      username: "@anybody",
    },
    {
      key: 2,
      name: "Levels Akinkunle",
      username: "@anybody",
    },
    {
      key: 3,
      name: "Tayo Kenneth",
      username: "@anybody",
    },
    {
      key: 4,
      name: "Ayomide Jones",
      username: "@anybody",
    },
  ];

  const _renderSelectedFriends = (data) => (
    <Box className={styles.selectedFriendsItemWrapper}>
      <Badge
        sx={{}}
        overlap="circular"
        badgeContent={
          <Box
            sx={{
              cursor: "pointer",
              backgroundColor: "red",
              borderRadius: "50%",
              padding: ".4rem",
            }}
          >
            <CloseIcon
              sx={{ color: "white", fontSize: ".9rem", fontWeight: "bold" }}
              onClick={() => handleSelectFriend(data.key)}
            />
          </Box>
        }
      >
        <Avatar sx={{}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="rounded" />
      </Badge>
      <Typography variant="p" sx={{ color: "#818FA3", fontSize: ".8rem" }}>
        {data.username}
      </Typography>
    </Box>
  );

  const list = () => (
    <Box sx={{ width: "auto" }} role="presentation">
      <Box className={styles.bottomDrawerWrapper}>
        <Stack direction="horizontal" gap={3} className={styles.bottomDrawerHeader}>
          <div />
          <DragHandleIcon />
          <CloseIcon onClick={() => toggleDrawer(false)} sx={{ cursor: "pointer" }} />
        </Stack>
        <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }} variant="h5">
          Add friends
        </Typography>
        <Typography sx={{ color: "#0A1F44" }} variant="body1">
          {" "}
          You can add more friends to this party
        </Typography>

        <Paper
          elevation={0}
          component="form"
          sx={{
            p: "2px 0rem",
            display: "flex",
            alignItems: "center",
            margin: "1.4rem auto 0rem",
            width: "100%",
            borderRadius: "15px",
            backgroundColor: "#F0F2F4",
          }}
        >
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "#0A1F44", fontWeight: "bold" }}
            aria-label="search"
          >
            <SearchIcon sx={{ color: "#0A1F44", fontWeight: "bold" }} />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "#0A1F44", fontWeight: "bold" }}
            placeholder="Search friends"
            inputProps={{ "aria-label": "search friends" }}
          />
        </Paper>

        <Box sx={{ margin: "1.5rem 0rem" }} className={styles.listItem}>
          <Stack direction="horizontal" gap={3} className={styles.listItemStack}>
            <Avatar sx={{ bgcolor: "purple" }} variant="rounded">
              <CampaignIcon />
            </Avatar>

            <Box sx={{ width: "90%" }}>
              <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }}>
                Invite from contacts
              </Typography>
              <Typography variant="p" sx={{ color: "#818FA3", fontSize: ".8rem" }}>
                Share Shout Interactive with your friends
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Divider />
        {selectedIndexArr.length > 0 && (
          <Stack className={styles.selectedFriendsWrapper} direction="row" spacing={2}>
            {selectedArr.map((friend) => _renderSelectedFriends(friend))}
          </Stack>
        )}
        <Divider />

        <List className={styles.listWrapper}>
          {dummyFriendsData.map((data) => (
            <ListItem
              onClick={() => handleSelectFriend(data.key)}
              className={styles.listItem}
              button
              key={data.key}
            >
              <Stack direction="horizontal" gap={1} className={styles.listItemStack}>
                <Avatar
                  variant="rounded"
                  alt="Trevor Henderson"
                  src="/static/images/avatar/1.jpg"
                />
                <Box sx={{ width: "90%" }}>
                  <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }}>{data.name}</Typography>
                  <Typography variant="p" sx={{ color: "#818FA3", fontSize: ".8rem" }}>
                    {data.username}
                  </Typography>
                </Box>
                <Box sx={{}}>
                  <Radio
                    checked={selectedIndexArr.includes(data.key)}
                    onChange={() => handleSelectFriend(data.key)}
                    sx={{ color: "#818FA3" }}
                    value={data.key}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                </Box>
              </Stack>
            </ListItem>
          ))}
        </List>
        <Box
          onClick={() => handleAddFriend()}
          sx={{ marginTop: ".5rem" }}
          className={styles.buttonWrapper}
        >
          <Button className={styles.button} variant="contained" fullWidth>
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div className={styles.bottomDrawerContainer}>
      <SwipeableDrawer
        sx={{
          "& 	.MuiDrawer-paper": {
            maxHeight: "70%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          },
        }}
        modal={styles.bottomDrawerContainer}
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

export default BottomDrawer;
