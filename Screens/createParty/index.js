import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  SwipeableDrawer,
  TextField,
  MenuItem,
  Typography,
  Button,
  Avatar,
  Snackbar,
  Alert,
  Select,
  OutlinedInput,
  Input,
} from "@mui/material";

// import { useDispatch, useSelector } from "react-redux";
import { BsChevronLeft } from "react-icons/bs";
import VideocamSharpIcon from "@mui/icons-material/VideocamSharp";
import { useStyles } from "./style";
import ClearRoundedIcon from "@mui/icons-material/Clear";
import ModalComponent from "../../Component/Modals";
import ButtonComponent from "../../Component/Button";
import { FormLabel } from "@mui/material";
import { Header } from "../../Component/Header";
import { useRouter } from "next/router";

export const CreateParty = () => {
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(true);
  const route = useRouter();
  const [partyuser, setSelectedPartyUser] = useState("myself one");
  const [partyName, setSelectedPartyName] = useState("");
  const [partyDate, setSelectedPartyDate] = useState("");
  const [partyDesc, setSelectedPartyDesc] = useState("");
  const [partyGuests, setSelectedPartyGuests] = useState([]);
  const [openSnackbar, setOPenSnackBar] = useState(true);
  const [enabled, setEnabled] = useState(true);
  const [err, setErr] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = (open) => {
    setOpenModal(open);
  };
  const party_users = [
    {
      key: 1,
      value: "myself one",
      label: "Myself One",
    },
    {
      key: 2,
      value: "myself two",
      label: "Myself Two",
    },
    {
      key: 3,
      value: "myself three",
      label: "Myself Three",
    },
    {
      key: 4,
      value: "myself four",
      label: "Myself four",
    },
    {
      key: 5,
      value: "myself five",
      label: "Myself five",
    },
  ];

  const guests = [
    {
      key: 1,
      name: "David Doe",
      value: "David Doe",
    },
    {
      key: 2,
      name: "Ayo Cole",
      value: "Ayo Cole",
    },
    {
      key: 3,
      name: "Oliver Hansen",
      value: "Oliver Hansen",
    },
    {
      key: 4,
      name: "Van Henry",
      value: "Van Henry",
    },
    {
      key: 5,
      name: "April Tucker",
      value: "April Tucker",
    },
    {
      Key: 6,
      name: "Ralph Hubbard",
      value: "Ralph Hubbard",
    },
    {
      key: 7,
      name: "Omar Alexander",
      value: "Omar Alexander",
    },
    {
      key: 8,
      name: "Carlos Abbott",
      value: "Carlos Abbott",
    },
  ];

  const handleClose = () => {
    setOpenAlert(false);
  };
  const handleGetCoin = () => {
    navigate("/wallet");
  };

  const handleChangePartyUser = (event) => {
    setSelectedPartyUser(event.target.value);
  };

  const handleChangePartyName = (event) => {
    setSelectedPartyName(event.target.value);
  };
  const handleChangePartyDate = (event) => {
    setSelectedPartyDate(event.target.value);
  };
  const handleChangePartyDesc = (event) => {
    setSelectedPartyDesc(event.target.value);
  };

  const handleAddPartyGuest = (event) => {
    setSelectedPartyGuests([...event.target.value]);
  };

  const handleGoBack = async () => {
    // if (!partyName && !partyDate && !partyDesc) {
    //   setErr(true);
    // } else if (partyName && partyDate && partyDesc) {
    //   setErr(false);
    //   const obj = {
    //     owner: partyuser,
    //     name: partyName,
    //     date: partyDate,
    //     description: partyDesc,
    //     Geust: {
    //       invites: [],
    //       geusts: partyGuests,
    //     },
    //     user: userId,
    //   };
    //   dispatch(createPartyRequest(obj));

    //   resetState();
    //   setTimeout(() => {
    //     navigate("/party");
    //   }, 2000);
    route.push("/detail");
  };

  const resetState = () => {
    setSelectedPartyUser("myself one");
    setSelectedPartyName("");
    setSelectedPartyDate("");
    setSelectedPartyDesc("");
    setSelectedPartyGuests([]);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ width: "auto" }} role="presentation">
        <Header
          type="nav"
          title="New Shout! Party"
          leftLink="/party"
          leftIcon={<BsChevronLeft onClick={() => handleGoBack()} />}
          primary
        />

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box id="partyName" sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
            <FormLabel
              required
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#0a1f44",
              }}
            >
              Party name
            </FormLabel>
            <TextField
              error={err}
              // helperText="⚠ You need more coins to send this amount."
              id="outlined-select-currency"
              fullWidth
              placeholder="David's 25th Birthday Bash"
              value={partyName}
              onChange={handleChangePartyName}
              sx={{
                "& .css-nnbavb": { float: "left" },
                "& .MuiOutlinedInput-root": { borderRadius: "20px" },
              }}
            />
          </Box>

          <Box id="date" sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
            <FormLabel
              required
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#0a1f44",
              }}
            >
              Date
            </FormLabel>
            <TextField
              error={err}
              type="date"
              id="outlined-select-currency"
              defaultValue="2017-05-24"
              fullWidth
              placeholder="David's 25th Birthday Bash"
              value={partyDate}
              onChange={handleChangePartyDate}
              sx={{
                "& .css-nnbavb": { float: "left" },
                "& .MuiOutlinedInput-root": { borderRadius: "20px" },
              }}
            />
          </Box>
          <Box id="videoInvite" sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
            <Typography
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "##0a1f44",
              }}
            >
              Video Invitation
            </Typography>
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
          <Box id="description" sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
            <Typography
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#0a1f44",
              }}
            >
              Description
            </Typography>
            <TextField
              error={err}
              multiline
              // type="multiline"
              // id="outlined-select-currency"
              minRows={4}
              style={{ width: "100%", padding: "0.5rem" }}
              // maxRows={4}
              // fullWidth
              placeholder="Come and have a blast and party with me as I turn 25! 🍾"
              value={partyDesc}
              onChange={handleChangePartyDesc}
              sx={{
                "& .css-nnbavb": { float: "left" },
                "& .MuiOutlinedInput-root": { borderRadius: "20px" },
              }}
            />
          </Box>

          {err && (
            <Typography
              sx={{
                marginBottom: ".1rem",
                fontWeight: "bold",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              Please enter all text fields
            </Typography>
          )}

          <Box
            id="createParty"
            onClick={handleGoBack}
            // onClick={userCoin >= 100 ? handleGoBack : () => handleToggleModal(true)}
            sx={{ margin: "2rem 0rem", cursor: "pointer", flex: "1" }}
            className={classes.buttonWrapper}
          >
            <Button
              sx={{
                backgroundColor: "#110066",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: ".8rem 0rem",
                borderRadius: "10px",
              }}
              variant="contained"
              fullWidth
            >
              {/* {isLoading ? "Loading..." : "Create"} */}create
            </Button>
          </Box>
          {/* {isSuccessful && (
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={() => setOPenSnackBar(false)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={() => setOPenSnackBar(false)}
                severity="success"
                sx={{ width: "100%" }}
              >
                Party Created Successfully!
              </Alert>
            </Snackbar>
          )} */}
        </Box>
        <ModalComponent show={openModal} toggleModal={handleToggleModal}>
          <Container className={classes.container}>
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
              <Box onClick={handleGetCoin} sx={{ margin: "2rem 0rem", cursor: "pointer" }}>
                <ButtonComponent title="Get Coins" button="#162767" />
              </Box>
            </Box>
          </Container>
        </ModalComponent>
      </Container>
    </>
  );
};
