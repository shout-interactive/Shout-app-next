import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box, Container, Paper, Grid, Typography, IconButton, Button } from "@mui/material";
import VideocamSharpIcon from "@mui/icons-material/VideocamSharp";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import GroupIcon from "@mui/icons-material/Group";
import RedeemIcon from "@mui/icons-material/Redeem";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import RedoIcon from "@mui/icons-material/Redo";
import ModalComponent from "../../Component/Modals";
import ButtomDrawer from "./bottomDrawer";
import { PartyCardTwo } from "../../Component/PartyCard";
import Title from "../../Component/TitleComponent";
import { useStyles } from "./style";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ClearRoundedIcon from "@mui/icons-material/Clear";
import ButtonComponent from "../../Component/Button";
import { getPartyDetailsRequest } from "../../store/actions/get-party-details";
import { enterParty } from "../../store/actions/track-state";
import { checkPartyStatus } from "../../store/actions/check-party";
import { joinPartyPayment } from "../../store/actions/join-party";

const PartyDetails = ({ query }) => {
  const userId = localStorage.getItem("userId");
  const route = useRouter();
  // const queryKey = "detail";
  // const queryValue =
  //   route.query[queryKey] || route.asPath.match(new RegExp(`[&?]${queryKey}=(.*)(&|$)`));
  const id = route.query.detail;
  // dispatch initialization
  const dispatch = useDispatch();

  // Get current party details
  const fetchPartyDetails = () => {
    const obj = {
      id: id,
      user: userId,
    };
    // console.log(id);
    dispatch(getPartyDetailsRequest(obj));
  };
  // styles
  const classes = useStyles();
  // console.log("party id", id);

  // mount details

  useEffect(() => {
    fetchPartyDetails();
  }, []);
  // dynamic states
  const [paid, setPaid] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [moreCoinModal, setMoreCoinModal] = useState(false);
  const [joined, setJoined] = useState(false);
  const [tempPaid, setTempPaid] = useState(paid);
  const [toggle, setToggle] = useState(false);

  // useSelector Redux
  const { partyDetails } = useSelector((s) => s.getPartyDetails);
  const { token } = useSelector((s) => s.verifyToken);
  const { data } = useSelector((s) => s.checkCoinReducer);
  const { message, isSuccessful } = useSelector((s) => s.checkParty);
  const { successful } = useSelector((s) => s.joinPayment);

  const handleGetCoin = () => {
    route.push(`/wallet/${token}`);
    dispatch(enterParty());
  };
  const userCoin = localStorage.getItem("coin");
  const handleToggleModal = (open) => {
    setOpenModal(open);
  };
  const handleMoreCoinModal = (open) => {
    setMoreCoinModal(open);
  };
  const handleEnterParty = () => {
    if (data?.coins >= 200) {
      route.push("/live");
    } else {
      handleToggleModal(false);
      handleMoreCoinModal(true);
    }
  };
  const partyStatus = () => {
    const payload = {
      party: id,
    };
    dispatch(checkPartyStatus(payload));
    if (isSuccessful === true) {
      route.push("/live");
    } else {
      handleToggleModal(true);
    }
  };

  const partyPayment = () => {
    const payload = {
      party: id,
    };
    if (data?.coins >= 2000) {
      dispatch(joinPartyPayment(payload));
      if (successful) {
        route.push();
      }
    } else {
      handleToggleModal(false);
      handleMoreCoinModal(true);
    }
  };

  const checkPartyOwner = partyDetails?.party?.owner === localStorage.getItem("userId");
  const activities = [
    {
      color: "#FA9330",
      label: "Guestlist",
      Icon: GroupIcon,
      link: "/details/guestlist",
      id: "guestList",
    },
    {
      color: "#FA4A0C",
      label: "Gift goal",
      Icon: RedeemIcon,
      link: "/details/giftgoal",
      id: "giftGoal",
    },
    {
      color: "#B57BFF",
      label: "Musicpost",
      Icon: AudiotrackIcon,
      link: "/details/musicpost",
      id: "musicPost",
    },
    {
      color: "#110066",
      label: "Share",
      Icon: RedoIcon,
      id: "share",
    },
  ];

  const handleClick = () => {
    if (!tempPaid) {
      setTempPaid(true);
    } else if (paid) {
      setJoined(true);
    }
  };

  const handleToggleDrawer = (open) => {
    setToggle(open);
  };

  const Item = ({ data: { color, label, Icon, link, id } }) => (
    <Paper
      id={id}
      onClick={() => route.push(link)}
      sx={{ backgroundColor: color, cursor: "pointer" }}
      className={classes.paper}
    >
      <IconButton className={classes.iconWrapper}>
        <Icon sx={{ color: color }} />
      </IconButton>
      <Typography className={classes.label}>{label}</Typography>
    </Paper>
  );

  return (
    <>
      <PartyCardTwo
        onClick={() => handleToggleDrawer(true)}
        header="0"
        secondary="#FA9330"
        id="invite"
      />
      <Container className={classes.container}>
        <Title title="Welcome message" />
        {partyDetails?.party?.vedio ? (
          <Box className={classes.playerBox} id="welcome">
            <ReactPlayer
              style={{ borderRadius: "25px", backgroundColor: "black" }}
              width="100%"
              height="100%"
              className={classes.player}
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </Box>
        ) : (
          <>
            <Box id="videoInvite" sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
              <input
                style={{ display: "none" }}
                type="file"
                accept="video/*"
                className="video-box"
                id="video-input"
              />
              <label htmlFor="video-input">
                <Box
                  sx={{
                    width: "100%",
                    height: "10em",
                    margin: "0 auto",
                    backgroundColor: "#C1C7D1",
                    border: "1px dashed #110066",
                    borderRadius: "5px",
                    padding: "4.5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  {/* <Input type="file" accept="image/*" className="video-box" /> */}
                  <VideocamSharpIcon
                    sx={{
                      marginBottom: "1rem",
                      fontWeight: "bold",
                      fontSize: "3rem",
                    }}
                  />
                  <Typography
                    sx={{
                      marginBottom: ".7rem",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textAlign: "center",
                    }}
                  >
                    Record or upload a video message to your guests
                  </Typography>
                </Box>
              </label>
            </Box>
            <Box
              sx={{ width: "100%", margin: "7px auto" }}
              // onClick={() => route.push("/editparty")}
            >
              <ButtonComponent title="Upload a Video" button="#110166" width="100%" />
            </Box>
          </>
        )}

        <Title title="Activities" />
        <Box className={classes.activitiesWrapper}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {activities.map((activity, i) => (
              <Grid item xs={6} key={i}>
                <Item data={activity} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Title title="About Party" />
        <Box>
          <Typography>{partyDetails?.party?.description}</Typography>
        </Box>

        <div className={classes.buttonWrapper} id="join">
          <Button
            onClick={checkPartyOwner ? handleEnterParty : partyStatus}
            sx={{
              width: "100%",
              padding: "1rem",
              marginTop: "25px",
              // borderColor: "#90979E",
              textTransform: "capitalize",
              color: "white",
              fontWeight: "bold",
              backgroundColor: "#14B363",
              // backgroundColor: tempPaid ? "#14B363" : joined ? "#818FA3" : "",
            }}
            size="medium"
            variant="contained"
          >
            {checkPartyOwner ? "Join party" : "Join party for 2000 🪙"}
          </Button>
        </div>

        <ButtomDrawer show={toggle} toggleDrawer={handleToggleDrawer} />
        <ModalComponent
          // onAfterOpen={disableBody}
          // onBeforeClose={enableBody}
          show={openModal}
          toggleModal={handleToggleModal}
        >
          <Container className={classes.containerDetails}>
            <Box className={classes.modalBox}>
              <WarningAmberRoundedIcon className={classes.icon} />

              <Typography
                sx={{
                  padding: "0 40px",
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                You will be charged 2000 coins to join this party
              </Typography>
              <ClearRoundedIcon
                className={classes.btnRemove}
                onClick={() => handleToggleModal(false)}
              />
              <Box
                // onClick={handleGetCoin}
                sx={{
                  margin: "2rem auto",
                  cursor: "pointer",
                  width: "100%",
                  display: "flex",
                }}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Button
                  onClick={() => handleToggleModal(false)}
                  variant="outlined"
                  style={{
                    borderColor: "#162767",
                    width: "200px",
                    margin: "0 10px",
                    height: "45px",
                    borderRadius: "10px",
                    color: "#162767",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={partyPayment}
                  variant="contained"
                  style={{
                    backgroundColor: "#162767",
                    width: "200px",
                    margin: "0 10px",
                    height: "45px",
                    borderRadius: "10px",
                    color: "#fff",
                  }}
                >
                  Okay
                </Button>
              </Box>
            </Box>
          </Container>
        </ModalComponent>
        <ModalComponent show={moreCoinModal} toggleModal={() => setMoreCoinModal(false)}>
          <Container className={classes.myContainer}>
            <Box className={classes.modalBox}>
              <img src={"/assest/images/coinImg.png"} alt="" className={classes.icon} />
              <Typography
                sx={{
                  padding: "0 40px",
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                You need more coins to enter this party
              </Typography>
              <ClearRoundedIcon
                className={classes.btnRemove}
                onClick={() => setMoreCoinModal(false)}
              />
              <ButtonComponent
                title="Get Coins"
                handleClick={handleGetCoin}
                button="#162767"
                width="100%"
              />
            </Box>
          </Container>
        </ModalComponent>
      </Container>
    </>
  );
};

export default PartyDetails;
