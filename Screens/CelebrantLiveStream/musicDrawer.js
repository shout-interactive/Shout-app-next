import React, { useState } from "react";
import {
  Box,
  SwipeableDrawer,
  Stack,
  Paper,
  Typography,
  IconButton,
  InputBase,
  Button,
  Avatar,
  Radio,
  Container,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ModalComponent from "../../Component/Modals";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";
import ClearRoundedIcon from "@mui/icons-material/Clear";
import ButtonComponent from "../../Component/Button";
import { useStyles } from "./style";

// const { localStorage } = window

const MusicDrawer = ({ show, toggleDrawer }) => {
  const classes = useStyles();
  const [selectedArr, setSelectedArray] = useState([]);
  const [selectedIndexArr, setSelectedIndexArray] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = (open) => {
    setOpenModal(open);
  };
  // const handleClose = () => {
  // 	toggleDrawer(false);
  // };

  const handleSelectMusic = (id) => {
    if (selectedArr.length >= 5) {
      return;
    }
    const tempID = selectedArr.findIndex((friend) => friend.key === id);

    if (tempID === -1) {
      const friendData = dummyMusicData.filter((friend) => friend.key === id);
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

  const dummyMusicData = [
    {
      key: 1,
      name: "Ginger",
      username: "Wizkid feat Burna Boy",
    },
    {
      key: 2,
      name: "Anybody",
      username: "Wizkid feat Burna Boy",
    },
    {
      key: 3,
      name: "Level",
      username: "Flavour",
    },
    {
      key: 4,
      name: "Move",
      username: "Bad Boy TImz",
    },
    {
      key: 5,
      name: "Ginger",
      username: "Wizkid feat Burna Boy",
    },
    {
      key: 6,
      name: "Anybody",
      username: "Wizkid feat Burna Boy",
    },
    {
      key: 7,
      name: "Level",
      username: "Flavour",
    },
    {
      key: 8,
      name: "Move",
      username: "Bad Boy TImz",
    },
    {
      key: 9,
      name: "Ginger",
      username: "Wizkid feat Burna Boy",
    },
    {
      key: 10,
      name: "Anybody",
      username: "Wizkid feat Burna Boy",
    },
    {
      key: 11,
      name: "Level",
      username: "Flavour",
    },
    {
      key: 12,
      name: "Move",
      username: "Bad Boy TImz",
    },
  ];

  const handleAddMusic = () => {
    if (selectedArr.length < 5) {
      return;
    }
    handleToggleModal(true);
    localStorage.setItem("music", JSON.stringify(selectedArr));
    setSelectedIndexArray([]);
    setSelectedArray([]);
    toggleDrawer(false);
  };

  const list = () => (
    <Box sx={{ width: "auto" }} role="presentation">
      <Box className={classes.bottomDrawerWrapper}>
        <Stack
          direction="horizontal"
          gap={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div />
          <DragHandleIcon />
          <CloseIcon onClick={() => toggleDrawer(false)} sx={{ cursor: "pointer" }} />
        </Stack>
        <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }} variant="h5">
          Musicpost
        </Typography>
        <Typography sx={{ color: "#0A1F44" }} variant="body1">
          {" "}
          Select 5 songs to enter the song raffle
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
            placeholder="Search songs"
            inputProps={{ "aria-label": "search songs" }}
          />
        </Paper>

        <List className={classes.listWrapper}>
          {dummyMusicData.map((data) => (
            <ListItem
              onClick={() => handleSelectMusic(data.key)}
              className={classes.listItem}
              button
              key={data.key}
            >
              <Stack
                direction="horizontal"
                gap={1}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
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
                    onChange={() => handleSelectMusic(data.key)}
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
        <Box onClick={() => handleAddMusic()} sx={{ marginTop: ".5rem" }}>
          <Button
            sx={{
              backgroundColor: selectedArr.length > 5 ? "#3CC13B" : "#818FA3",
              textTransform: "capitalize",
              padding: ".8rem 0rem",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
            className={classes.button}
            variant="contained"
            fullWidth
          >
            {selectedArr.length < 5 ? `${selectedArr.length} of 5 songs selected` : "Submit"}
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div className={classes.bottomDrawerContainer}>
      <SwipeableDrawer
        sx={{
          "& 	.MuiDrawer-paper": {
            maxHeight: "70%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            maxWidth: "sm",
            margin: "0 auto",
            padding: "1rem",
          },
        }}
        modal={classes.bottomDrawerContainer}
        anchor={"bottom"}
        open={show}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
      <ModalComponent show={openModal} toggleModal={handleToggleModal}>
        <Container className={classes.container}>
          <Box className={classes.modalBox}>
            <QueueMusicRoundedIcon className={classes.icon} />

            <Typography
              sx={{
                padding: "0 40px",
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              Music Post Selected!
            </Typography>
            <ClearRoundedIcon
              className={classes.btnRemove}
              onClick={() => handleToggleModal(false)}
            />

            <Box
              onClick={() => handleToggleModal(false)}
              sx={{ margin: "2rem 0rem", cursor: "pointer" }}
              className={classes.getBtn}
            >
              <div variant="contained" fullWidth>
                Okay
              </div>
            </Box>
          </Box>
        </Container>
      </ModalComponent>
    </div>
  );
};

export default MusicDrawer;
