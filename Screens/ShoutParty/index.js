import { useState, useEffect } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Container, Box, Button, Snackbar } from "@mui/material";
import { LoadingIcon } from "../../Component/Loading/Loading";
import { Header } from "../../Component/Header";
import TabsComponent from "./tabs";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import { useStyles } from "./style";
import { useRouter } from "next/router";
import styles from "./style.module.css";
const ShoutParty = () => {
  const route = useRouter();
  // const userId = localStorage.getItem("userId");
  // const dispatch = useDispatch();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
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
        <TabsComponent />

        {isLoading ? (
          <LoadingIcon fullscreen />
        ) : (
          <div className={styles["footer-box"]}>
            <Box
              className={styles["float-botton"]}
              onClick={() => route.push("/create")}
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
      </Container>
    </>
  );
};

export default ShoutParty;
