import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import {
  Container,
  Box,
  List,
  ListItem,
  Stack,
  Paper,
  Typography,
  IconButton,
  InputBase,
  Avatar,
} from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import SentimentVeryDissatisfiedSharpIcon from "@mui/icons-material/SentimentVeryDissatisfiedSharp";
import { useRouter } from "next/router";

import styles from "./style.module.css";
import ButtomDrawer from "./bottomDrawer";
import GuestDetailsDrawer from "./guestdetails";
import { Header } from "../../Component/Header";

const Guestlist = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleGuestDetails, setToggleGuestDetails] = useState(false);
  const route = useRouter();

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

  const handleToggleDrawer = (open) => {
    setToggle(open);
  };

  const handleToggleGuestDetailsDrawer = (open) => {
    setToggleGuestDetails(open);
  };

  return (
    <Container className={styles.root}>
      <Header
        type="nav"
        title="View Guests"
        // leftLink="/detail"
        leftIcon={<BsChevronLeft onClick={() => route.back()} />}
        rightIcon={<PersonAddAltIcon onClick={() => handleToggleDrawer(true)} />}
        primary
      />
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
          placeholder="Search guests"
          inputProps={{ "aria-label": "search guests" }}
        />
      </Paper>
      <List className={styles.listWrapper}>
        {/* {partyDetails?.Geust?.geusts.length < 1 ? (
          <Box
            sx={{
              // backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              height: "60vh",
            }}
          >
            <SentimentVeryDissatisfiedSharpIcon sx={{ fontSize: "10rem", width: "40%" }} />
            <Typography>Guest list is empty</Typography>
          </Box>
        ) : (
          partyDetails?.Geust?.geusts.map((data) => (
            <ListItem
              onClick={() => handleToggleGuestDetailsDrawer(true)}
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
                <Box sx={{}} />
              </Stack>
            </ListItem>
          ))
        )} */}
        {dummyFriendsData.map((data) => (
          <ListItem
            onClick={() => handleToggleGuestDetailsDrawer(true)}
            className={styles.listItem}
            button
            key={data.key}
          >
            <Stack direction="horizontal" gap={1} className={styles.listItemStack}>
              <Avatar variant="rounded" alt="Trevor Henderson" src="/static/images/avatar/1.jpg" />
              <Box sx={{ width: "90%" }}>
                <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }}>{data.name}</Typography>
                <Typography variant="p" sx={{ color: "#818FA3", fontSize: ".8rem" }}>
                  {data.username}
                </Typography>
              </Box>
              <Box sx={{}} />
            </Stack>
          </ListItem>
        ))}
      </List>

      <ButtomDrawer show={toggle} toggleDrawer={handleToggleDrawer} />
      <GuestDetailsDrawer show={toggleGuestDetails} toggleDrawer={handleToggleGuestDetailsDrawer} />
    </Container>
  );
};

export default Guestlist;
