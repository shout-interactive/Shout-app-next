import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { Container, Box, List, ListItem, Stack, Typography, Button, Avatar } from "@mui/material";

import { useStyles } from "./style";
import { Header } from "../../Component/Header";
import Musiclist from "./musiclistDrawer";

// const { localStorage } = window;

const MusicPost = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const [musiclist, setMusiclist] = useState([]);

  const handleMusicDrawer = (open) => {
    setToggle(open);
  };

  useEffect(() => {
    const tempMusicList = localStorage.getItem("music");
    setMusiclist(JSON.parse(tempMusicList));
  }, [toggle]);

  return (
    <Container className={classes.root}>
      <Header
        type="nav"
        title="Music post"
        leftLink="/detail"
        leftIcon={<BsChevronLeft />}
        primary
      />
      {musiclist?.length > 0 ? (
        <Box>
          <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }} variant="h5">
            Your selected songs
          </Typography>
          <Typography sx={{ color: "#0A1F44" }} variant="body1">
            {" "}
            Select 5 songs to enter the song raffle
          </Typography>
          <List className={classes.listWrapper}>
            {musiclist.map((data) => (
              <ListItem className={classes.listItem} button key={data.key}>
                <Stack direction="horizontal" gap={1} className={classes.listItemStack}>
                  <Avatar
                    variant="rounded"
                    alt="Trevor Henderson"
                    src="/static/images/avatar/1.jpg"
                  />
                  <Box sx={{ width: "90%" }}>
                    <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }}>
                      {data.name}
                    </Typography>
                    <Typography variant="p" sx={{ color: "#818FA3", fontSize: ".8rem" }}>
                      {data.username}
                    </Typography>
                  </Box>
                  <Box sx={{}}></Box>
                </Stack>
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxHeight: "90vh",
            height: "85vh",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 0rem",
            }}
          >
            <img
              src="https://res.cloudinary.com/de8vrxbqq/image/upload/v1644325907/shout/musicalnotes_sdc2eh.svg"
              alt="musical_note"
              className={classes.img}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#110066", fontSize: "1.5rem", fontWeight: "bold" }}
            >
              No Songs
            </Typography>
            <Typography variant="p" sx={{ color: "#818FA3", fontSize: "1.2rem" }}>
              You have not selected any songs
            </Typography>
          </Box>
          <Box
            onClick={() => handleMusicDrawer(true)}
            sx={{
              width: "50%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              backgroundColor: "transparent",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#110066",
                color: "white",
                textTransform: "capitalize",
                padding: ".8rem 0rem",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
              variant="contained"
              fullWidth
            >
              Select songs
            </Button>
          </Box>
        </Box>
      )}

      <Musiclist show={toggle} toggleDrawer={handleMusicDrawer} />
    </Container>
  );
};

export default MusicPost;
