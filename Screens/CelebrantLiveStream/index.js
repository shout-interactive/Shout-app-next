import { useState, useEffect, useRef } from "react";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import RedeemSharpIcon from "@mui/icons-material/RedeemSharp";
import AudiotrackSharpIcon from "@mui/icons-material/AudiotrackSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  Button,
  Container,
  Box,
  Stack,
  Typography,
  Avatar,
  TextField,
  InputAdornment,
} from "@mui/material";

import LiveStreamDrawer from "./liveStreamMode";
import GuestDrawer from "./guestDrawer";
import AddGuestDrawer from "./addGuestDrawer";
import GiftGoalDrawer from "./goalsDrawer";
import MusicDrawer from "./musicDrawer";

// import { useStyles } from "./style";

const CelebrantLiveStream = () => {
  const router = useRouter();
  //   const dispatch = useDispatch();
  //   const { livestream } = useSelector((s) => s.onBoardScreen);
  const token = useSelector((state) => state.verifyToken.token);

  const [liveStreamMode, setLiveStreamMode] = useState("My Party");
  const [liveChat, setLiveChat] = useState("");
  const [toggleLiveStreamMode, setoggleLiveStreamMode] = useState(false);
  const [toggleGuestDrawer, setoggleGuestDrawer] = useState(false);
  const [toggleAddGuestDrawer, setoggleAddGuestDrawer] = useState(false);
  const [toggleGiftGoalDrawer, setoggleGiftGoaltDrawer] = useState(false);
  const [toggleMusicDrawer, setoggleMusicDrawer] = useState(false);
  const [liveChatData, setLiveChatData] = useState([]);

  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const handleCloseLiveparty = () => {
    router.push(`/party/${token}`);
  };

  const handleToggleLiveStreamMode = (open) => {
    setoggleLiveStreamMode(open);
  };
  const handleToggleGuestDrawer = (open) => {
    setoggleGuestDrawer(open);
  };

  const handleToggleAddGuestDrawer = (open) => {
    setoggleAddGuestDrawer(open);
  };

  const handleToggleGiftGoalDrawer = (open) => {
    setoggleGiftGoaltDrawer(open);
  };

  const handleToggleMusicDrawer = (open) => {
    setoggleMusicDrawer(open);
  };

  const handleSetLiveStreamMode = (mode) => {
    setLiveStreamMode(mode);
  };

  const handleSetLiveChat = (event) => {
    setLiveChat(event.target.value);
  };

  const handleLiveChat = () => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const obj = {
          username: "newuser",
          post: liveChat,
        };
        setLiveChatData([...liveChatData, obj]);
        setLiveChat("");
      }
    });
  };

  useEffect(() => {
    handleLiveChat();
  }, [liveChat]);

  // console.log(livestream)

  const liveChatItem = (chatItem, i) => (
    <Box
      key={i}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "1rem",
      }}
    >
      <Box sx={{ width: "10%", marginRight: "1em" }}>
        <Avatar variant="rounded" alt="Trevor Henderson" src="" />
      </Box>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          color: "white",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>
          <Box component="span" sx={{ color: "#C0C9D2" }}>
            {chatItem.username}{" "}
          </Box>
          {chatItem.post}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          padding: "1rem 0rem",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          // backgroundImage: `url(https://res.cloudinary.com/de8vrxbqq/image/upload/v1644325919/shout/guysAtParty_vdbxyb.svg)`,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          direction="horizontal"
          spacing={3}
        >
          <Box
            id="views"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(96, 100, 106, 0.4)",
              borderRadius: "25px",
              padding: ".2rem .7rem",
              cursor: "pointer",
            }}
            onClick={() => handleToggleLiveStreamMode(true)}
          >
            <Typography sx={{ color: "white", marginRight: "5px", fontWeight: "600" }}>
              {liveStreamMode}
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: "white", fontWeight: "600" }} />
          </Box>
          <Box
            id="audience"
            onClick={() => handleToggleGuestDrawer(true)}
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: ".2rem 0rem",
            }}
          >
            <PersonSharpIcon sx={{ color: "white", marginRight: "5px", fontWeight: "600" }} />
            <Typography sx={{ color: "white", fontWeight: "600" }}>20</Typography>
          </Box>
          <Box
            onClick={() => handleCloseLiveparty()}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              padding: ".5rem .3rem",
            }}
          >
            <CloseSharpIcon sx={{ color: "white", fontSize: "1.5rem", fontWeight: "bolder" }} />
          </Box>
        </Stack>
        <Stack
          sx={{
            marginTop: "1rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
          spacing={3}
        >
          <Box
            id="inviteGuest"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(96, 100, 106, 0.4)",
              borderRadius: "10px",
              width: "2rem !important",
              height: "2rem !important",

              cursor: "pointer",
            }}
            onClick={() => handleToggleAddGuestDrawer(true)}
          >
            <PersonAddAltSharpIcon
              sx={{ fontSize: "1.4rem", color: "white", fontWeight: "bold" }}
            />
          </Box>
          <Box
            id="gift"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(96, 100, 106, 0.4)",
              borderRadius: "10px",
              width: "2rem !important",
              height: "2rem !important",
              cursor: "pointer",
            }}
            onClick={() => handleToggleGiftGoalDrawer(true)}
          >
            <RedeemSharpIcon sx={{ fontSize: "1.4rem", color: "white", fontWeight: "bold" }} />
          </Box>
          <Box
            id="musicPost"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(96, 100, 106, 0.4)",
              borderRadius: "10px",
              width: "2rem !important",
              height: "2rem !important",
              cursor: "pointer",
              position: "relative",
              zIndex: "999",
            }}
            onClick={() => handleToggleMusicDrawer(true)}
          >
            <AudiotrackSharpIcon
              sx={{ fontSize: "1.4rem", color: "white", fontWeight: "bold" }}
              onClick={() => handleToggleMusicDrawer(true)}
            />
          </Box>
          {liveStreamMode === "My Party" ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(96, 100, 106, 0.4)",
                borderRadius: "10px",
                width: "2rem !important",
                height: "2rem !important",
              }}
            >
              <VideoCallSharpIcon sx={{ fontSize: "1.4rem", color: "white", fontWeight: "bold" }} />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                borderRadius: "10px",
                width: "2rem !important",
                height: "2rem !important",
              }}
            />
          )}
        </Stack>

        <Box
          sx={{
            width: "100%",
            position: "relative",
            top: "-154px",
            borderColor: "red",
            maxHeight: "60%",
            marginTop: "2rem",
            height: "100%",
            overflow: "hidden",
            // background: "blue",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              flex: "1",
              width: "90%",
              position: "relative",
              paddingLeft: "9px",
              bottom: "1px",
              maxHeight: "500px",
              overflowY: "hidden",
              // background: "red",
            }}
          >
            <Box
              sx={{
                height: "40%",
                background: "black",
                opacity: "1",
                zIndex: "1000",
              }}
            >
              <Box
                sx={{
                  position: "fixed",
                  height: "25%",
                  width: "50%",
                  // background: "blue",
                  background: "rgb(0, 0, 0)",
                  background:
                    "linear-gradient(180deg, black, rgba(0, 0, 0, 0.5), rgb(0, 0, 0, 0.02));",
                  // background: "rgba(0, 0, 0, 0.5)",
                  opacity: "1",
                  zIndex: "1000",
                }}
              ></Box>
            </Box>
            {liveChatData.map((chatItem) => liveChatItem(chatItem))}
            <div ref={myRef} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            // margin: "1.5rem auto 1rem auto",
            marginBottom: "",
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: "-120px",
            padding: "0 1em",
            // display: "none",
          }}
        >
          <TextField
            id="outlined-select-currency"
            fullWidth
            placeholder="Message here"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SendSharpIcon />
                </InputAdornment>
              ),
            }}
            value={liveChat}
            onChange={handleSetLiveChat}
            sx={{
              "& .css-nnbavb": { float: "left" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                borderColor: "white",
                color: "white !important",
              },
              "& .MuiInputAdornment-root": { color: "white" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
            }}
          />
          <FavoriteSharpIcon
            sx={{ color: "white", marginLeft: ".8rem", fontSize: "3rem" }}
            id="coins"
          />
        </Box>
        <LiveStreamDrawer
          show={toggleLiveStreamMode}
          handleSetLiveStreamMode={handleSetLiveStreamMode}
          toggleDrawer={handleToggleLiveStreamMode}
        />
        <GuestDrawer show={toggleGuestDrawer} toggleDrawer={setoggleGuestDrawer} />
        <AddGuestDrawer show={toggleAddGuestDrawer} toggleDrawer={handleToggleAddGuestDrawer} />
        <GiftGoalDrawer show={toggleGiftGoalDrawer} toggleDrawer={handleToggleGiftGoalDrawer} />
        <MusicDrawer show={toggleMusicDrawer} toggleDrawer={handleToggleMusicDrawer} />
      </Container>
    </>
  );
};

export default CelebrantLiveStream;
