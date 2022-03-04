import { useState, useEffect } from "react";
import { BsChevronLeft } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Container, Box, Button, Snackbar } from "@mui/material";
import { LoadingIcon } from "../../Component/Loading/Loading";
// import { getPartiesRequest } from "../../store/actions/get-parties";
// import { createPartyRequest } from "../../store/actions/create-party";
import { Header } from "../../Component/Header";
import TabsComponent from "./tabs";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import { useStyles } from "./style";
import styles from "./style.module.css";
import ModalComponent from "../../Component/Modals";
const ShoutParty = () => {
  // const userId = localStorage.getItem("userId");
  // const dispatch = useDispatch();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  // const { isLoading, error, isSuccessful, parties, message } = useSelector((s) => s.getParties);
  // const { party } = useSelector((s) => s.onBoardScreen);
  const [isLoading, setIsLoading] = useState(false);
  // Dummy loading state above
  // New input for onboarding screens

  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = (open) => {
    setOpenModal(open);
  };
  const [enabled, setEnabled] = useState(false);
  const onExit = () => {
    setEnabled(false);
  };

  const onOPen = () => {
    setEnabled(true);
    handleToggleModal(false);
  };

  const classes = useStyles();

  const fetchParties = () => {
    const obj = `{ user: ${"userId"} }`;

    dispatch(getPartiesRequest(obj));
  };

  // useEffect(() => {
  //   fetchParties();
  // }, []);

  const handleToggleDrawer = (open) => {
    setToggleDrawer(open);
  };

  return (
    <>
      <Container className={classes.root}>
        <Header
          type="nav"
          title="🎉 Shout! Party"
          leftLink="/home"
          rightLink={"/"}
          leftIcon={<BsChevronLeft />}
          primary
          rightIcon={<TodayRoundedIcon />}
        />
        <TabsComponent partyTab="partyTab" enterParty="enterparty" shareParty="shareparty" />

        {isLoading ? (
          <LoadingIcon fullscreen />
        ) : (
          <div className="footer-box">
            <Box
              id="createParty"
              className={styles["float-botton"]}
              onClick={() => navigate("/party/create")}
              sx={{
                width: "20em",
                margin: "1.5rem auto",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#14B363",
                  color: "white",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  padding: ".8rem 0rem",
                  borderRadius: "10px",
                }}
                variant="contained"
                fullWidth
              >
                Create party
              </Button>
            </Box>
          </div>
        )}
        <ModalComponent show={openModal} toggleModal={handleToggleModal}>
          <Container className={classes.container}>
            <Box className={classes.modalBox}>
              <h4>Shout! Party</h4>
              <span>Welcome to the Party. This is where all things party relative live</span>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                <Box onClick={() => onOPen()} sx={{ margin: "0.5rem 0rem", cursor: "pointer" }} s>
                  <Button size="small" variant="text">
                    Take A Tour
                  </Button>
                </Box>
                <Box
                  onClick={() => handleToggleModal(false)}
                  sx={{ margin: "0.5rem 0rem", cursor: "pointer" }}
                  s
                >
                  <Button size="small" variant="text">
                    Skip Tour
                  </Button>
                </Box>
              </div>
            </Box>
          </Container>
        </ModalComponent>
      </Container>
    </>
  );
};

export default ShoutParty;
