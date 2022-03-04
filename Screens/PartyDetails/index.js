import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

import { Box, Container, Paper, Grid, Typography, IconButton, Button } from "@mui/material";
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

// const { localStorage } = window;

const PartyDetails = () => {
  // const userCoin = localStorage.getItem("coins");
  const classes = useStyles();
  const [, setData] = useState();
  const [paid, setPaid] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [moreCoinModal, setMoreCoinModal] = useState(false);
  // const navigate = useNavigate();
  const [joined, setJoined] = useState(false);
  const [tempPaid, setTempPaid] = useState(paid);
  const [toggle, setToggle] = useState(false);
  // const { isLoading, partyDetails } = useSelector((s) => s.getPartyDetails);

  const onExit = () => {
    setEnabled(false);
  };
  const handleGetCoin = () => {
    navigate("/wallet");
  };

  const handleToggleModal = (open) => {
    setOpenModal(open);
  };
  const handleMoreCoinModal = (open) => {
    setMoreCoinModal(open);
  };
  const handleEnterParty = () => {
    if (userCoin >= 200) {
      navigate("/live/celebrant");
    } else {
      handleToggleModal(false);
      handleMoreCoinModal(true);
    }
  };

  const activities = [
    {
      color: "#FA9330",
      label: "Guestlist",
      Icon: GroupIcon,
      link: "/party/details/guestlist",
      id: "guestList",
    },
    {
      color: "#FA4A0C",
      label: "Gift goal",
      Icon: RedeemIcon,
      link: "/party/details/giftgoal",
      id: "giftGoal",
    },
    {
      color: "#B57BFF",
      label: "Musicpost",
      Icon: AudiotrackIcon,
      link: "/party/details/musicpost",
      id: "musicPost",
    },
    {
      color: "#110066",
      label: "Share",
      Icon: RedoIcon,
      id: "share",
    },
  ];

  // useEffect(() => {
  //   const tempData = localStorage.getItem("data");
  //   const tempPaid = localStorage.getItem("paid");

  //   setData(JSON.parse(tempData));
  //   setPaid(tempPaid);
  // }, []);

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
      onClick={() => navigate(link)}
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
      {/* <Tour
        steps={steps}
        isOpen={enabled}
        onRequestClose={onExit}
        className="helper"
        disableKeyboardNavigation={true}
        lastStepNextButton={<Button>Okay</Button>}
        nextButton={<Button>Next</Button>}
        prevButton={<div>{}</div>}
        rounded={5}
        showNavigationNumber={false}
        accentColor="#091D50"
        showNumber={false}
        maskSpace={5}
      /> */}
      <PartyCardTwo
        onClick={() => handleToggleDrawer(true)}
        header="0"
        secondary="#FA9330"
        id="invite"
      />
      <Container className={classes.container}>
        <Title title="Welcome message" />
        <Box className={classes.playerBox} id="welcome">
          <ReactPlayer
            style={{ borderRadius: "25px", backgroundColor: "black" }}
            width="100%"
            height="100%"
            className={classes.player}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </Box>

        <Title title="Activities" />
        <Box className={classes.activitiesWrapper}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {activities.map((activity, i) => (
              <Grid item xs={6}>
                <Item key={i} data={activity} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Title title="About Party" />
        <Box>
          <Typography>
            I love football and food, I’m a product manager and I love to have fun and party 🎉
          </Typography>
        </Box>

        <div className={classes.buttonWrapper} id="join">
          <Button
            onClick={() => handleToggleModal(true)}
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
            Join Party
            {tempPaid ? "Join party" : joined ? "4D:23H:13M:5S" : "Join party for 2000 🪙"}
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
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleEnterParty}
                  variant="contained"
                  style={{
                    backgroundColor: "#162767",
                    width: "200px",
                    margin: "0 10px",
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
                You need more coins to create this party
              </Typography>
              <ClearRoundedIcon
                className={classes.btnRemove}
                onClick={() => handleToggleModal(false)}
              />
              <ButtonComponent title="Get Coins" handleClick={handleGetCoin} button="#162767" />
              {/* <Box
                onClick={handleGetCoin}
                sx={{ margin: "2rem 0rem", cursor: "pointer" }}
                // className={classes.getBtn}
              >
                <div
                  className={classes.getBtn}
                  style={{
                    color: "white",
                    backgroundColor: "#162767",
                    width: "100%",
                    height: "40px",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "5px",
                    cursor: "pointer",
                    margin: "0 auto",
                  }}
                  variant="contained"
                  fullWidth
                >
                  Get Coins
                </div>
              </Box> */}
            </Box>
          </Container>
        </ModalComponent>
      </Container>
    </>
  );
};

export default PartyDetails;
