import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
} from "@mui/material";
import Link from "@mui/material/Link";

// import { useDispatch, useSelector } from "react-redux";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CakeIcon from "@mui/icons-material/Cake";
import { BsChevronLeft } from "react-icons/bs";
import { useStyles } from "./style";
import ButtonComponent from "../../Component/Button";
import AddIcon from "@mui/icons-material/Add";
import TabsComponent from "./Tabs"
import { FormLabel } from "@mui/material";
// import "./style.js";
// import { createPartyRequest } from "../../store/actions/create-party";
// import { Navigate } from "react-router-dom";
import { Header } from "../../Component/Header/index";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#110066",
      dark: "#00000",
      contrastText: "#0000",
    },
    secondary: {
      light: "#110066",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

// const userCoin = localStorage.getItem("coins");
// const userId = localStorage.getItem("userId");

//
export const Calendar = () => {
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(true);

  const [partyuser, setSelectedPartyUser] = useState("myself one");
  const [partyName, setSelectedPartyName] = useState("");
  const [partyDate, setSelectedPartyDate] = useState("");
  const [partyDesc, setSelectedPartyDesc] = useState("");
  const [partyGuests, setSelectedPartyGuests] = useState([]);
  const [openSnackbar, setOPenSnackBar] = useState(true);
  const [enabled, setEnabled] = useState(true);
  const [err, setErr] = useState(false);
  const onExit = () => {
    setEnabled(false);
  };
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //const { enqueueSnackbar } = useSnackbar();
  // const [selectedIndexArr, setSelectedIndexArray] = useState([]);

  // const handleCreate = () => {};
  const preventDefault = (event) => event.preventDefault();
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = (open) => {
    setOpenModal(open);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ width: "auto" }} role="presentation">
        <Header
          type="nav"
          title="Calendar"
          leftLink="/party"
          leftIcon={<BsChevronLeft onClick={() => handleGoBack()} />}
          rightIcon={<AddIcon onClick={() => handleGoBack()} />}
          rightLink=""
          primary
        />
        <TabsComponent />

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            id="calendar"
            // onClick={handleGoBack}
            // onClick={userCoin >= 100 ? handleGoBack : () => handleToggleModal(true)}
            sx={{ margin: "2rem 0rem", cursor: "pointer", flex: "1" }}
            className={classes.buttonWrapper}
          >
            <Typography
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "##0a1f44",
              }}
            >
              Today
            </Typography>
            <Button
              sx={{
                backgroundColor: "#FA9330",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: ".8rem 0rem",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-around",
              }}
              variant="contained"
              fullWidth
              endIcon={<CakeIcon />}
            >
              {"Mitch's Birthday"}
            </Button>
            <Button
              endIcon={<CakeIcon />}
              sx={{
                backgroundColor: "#FA9330",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: ".8rem 0rem",
                borderRadius: "10px",
                margin: " 10px 0",
                display: "flex",
                justifyContent: "space-around",
              }}
              variant="contained"
              fullWidth
            >
              {"Mitch's Birthday"}
            </Button>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
          }}
        >
          <Box
            id="calendar"
            // onClick={handleGoBack}
            // onClick={userCoin >= 100 ? handleGoBack : () => handleToggleModal(true)}
            sx={{ margin: "2rem 0rem", cursor: "pointer", flex: "1" }}
            className={classes.buttonWrapper}
          >
            <Typography
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "##0a1f44",
              }}
            >
              Tomorrow
            </Typography>
            <Button
              sx={{
                backgroundColor: "#110066",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: ".8rem 0rem",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-around",
              }}
              variant="contained"
              fullWidth
              endIcon={<CakeIcon />}
            >
              {"Tayo Longe's Birthday"}
            </Button>
            <Button
              sx={{
                backgroundColor: "#110066",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: ".8rem 0rem",
                borderRadius: "10px",
                margin: " 10px 0",
                display: "flex",
                justifyContent: "space-around",
              }}
              variant="contained"
              fullWidth
              endIcon={<CakeIcon />}
            >
              {"Tayo Longe's Birthday"}
            </Button>
          </Box>
          <Box
            id="calendar"
            // onClick={handleGoBack}
            // onClick={userCoin >= 100 ? handleGoBack : () => handleToggleModal(true)}
            sx={{ margin: "2rem 0rem", cursor: "pointer", flex: "1" }}
            className={classes.buttonWrapper}
          >
            <Typography
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "##0a1f44",
              }}
            >
              Tuesday, 18 Jan
            </Typography>
            <Button
              sx={{
                backgroundColor: "#110066",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: ".8rem 0rem",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-around",
              }}
              variant="contained"
              fullWidth
              endIcon={<CakeIcon />}
            >
              {"Tayo Longe's Birthday"}
            </Button>
            <Button
              sx={{
                backgroundColor: "#110066",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: ".8rem 0rem",
                borderRadius: "10px",
                margin: " 10px 0",
                display: "flex",
                justifyContent: "space-around",
              }}
              variant="contained"
              fullWidth
              endIcon={<CakeIcon />}
            >
              Tayo LongesBirthday
            </Button>
          </Box>
          <Box
            id="calendar"
            // onClick={handleGoBack}
            // onClick={userCoin >= 100 ? handleGoBack : () => handleToggleModal(true)}
            sx={{ margin: "2rem 0rem", cursor: "pointer", flex: "1" }}
            className={classes.buttonWrapper}
          >
            <Typography
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "##0a1f44",
              }}
            >
              Wednesday 18 Jan
            </Typography>
            <Button
              sx={{
                backgroundColor: "#110066",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: ".8rem 0rem",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-around",
              }}
              variant="contained"
              fullWidth
              endIcon={<CakeIcon />}
            >
              {"Tayo Longe's Birthday"}
            </Button>
            <Button
              sx={{
                backgroundColor: "#110066",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: ".8rem 0rem",
                borderRadius: "10px",
                margin: " 10px 0",
                display: "flex",
                justifyContent: "space-around",
              }}
              variant="contained"
              fullWidth
              endIcon={<FavoriteIcon />}
            >
              {"Tim Cook's Wedding anniversary"}
            </Button>
            <Button
              sx={{
                backgroundColor: "#110066",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: ".8rem 0rem",
                borderRadius: "10px",
                margin: "10px 0",
                display: "flex",
                justifyContent: "space-around",
              }}
              variant="contained"
              fullWidth
              endIcon={<CelebrationIcon />}
            >
              {"Tolu's Graduation"}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
