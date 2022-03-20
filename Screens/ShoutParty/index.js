import { useState, useEffect } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Container, Box, Button, Snackbar } from "@mui/material";
import { LoadingIcon } from "../../Component/Loading/Loading";
import { Header } from "../../Component/Header";
import TabsComponent from "./tabs";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import { useStyles } from "./style";
import { useRouter } from "next/router";
import { getPartiesRequest } from "../../store/actions/get-parties";
import { useDispatch, useSelector } from "react-redux";
import { getInviteRequest } from "../../store/actions/get-invited";
import styles from "./style.module.css";

const ShoutParty = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();

  const token = useSelector((state) => state.verifyToken.token);
  const { isLoading, error, isSuccessful, parties, message } = useSelector((s) => s.getParties);

  let userId;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    userId = localStorage.getItem("userId");
  }

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = (open) => {
    setOpenModal(open);
  };

  const fetchParties = () => {
    const obj = {
      user: localStorage.getItem("userId"),
    };

    dispatch(getPartiesRequest(obj));
  };

  const fetchInvite = () => {
    const obj = {
      user: localStorage.getItem("userId"),
    };

    dispatch(getInviteRequest(obj));
  };

  useEffect(() => {
    fetchParties();
    fetchInvite();
  }, []);

  const handleToggleDrawer = (open) => {
    setToggleDrawer(open);
  };

  return (
    <>
      <Container className={classes.root}>
        <Header
          type="nav"
          title="🎉 Shout! Party"
          // leftLink={`/home/${token}`}
          leftIcon={<BsChevronLeft onClick={() => route.push(`/home/${token}`)} />}
          primary
          rightIcon={<TodayRoundedIcon onClick={() => route.push("/mycalendar")} />}
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
