import React, { useState, useEffect } from "react";
import { Container, Box, TextField, Typography, Button, Snackbar, Alert } from "@mui/material";
import { createPartyCleanUp, createPartyRequest } from "../../store/actions/create-party";
import { useDispatch, useSelector } from "react-redux";
import { BsChevronLeft } from "react-icons/bs";
import VideocamSharpIcon from "@mui/icons-material/VideocamSharp";
import { useStyles } from "./style";
import ClearRoundedIcon from "@mui/icons-material/Clear";
import ModalComponent from "../../Component/Modals";
import ButtonComponent from "../../Component/Button";
import { FormLabel } from "@mui/material";
import { Header } from "../../Component/Header";
import { useRouter } from "next/router";
import { getPartyDetailsRequest } from "../../store/actions/get-party-details";
import PersonRemoveAlt1OutlinedIcon from "@mui/icons-material/PersonRemoveAlt1Outlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { generate } from "shortid";
export const CreateParty = () => {
  const classes = useStyles();
  // localstorage data
  const userCoin = localStorage.getItem("coin");

  // useSelector and dispatch
  const { parties } = useSelector((s) => s.getParties);
  const { isLoading, partyData } = useSelector((s) => s.createParty);
  const dispatch = useDispatch();

  // route
  const route = useRouter();

  // Input value fields
  const [partyName, setSelectedPartyName] = useState("");
  const [partyDate, setSelectedPartyDate] = useState("");
  const [partyDesc, setSelectedPartyDesc] = useState("");
  const [openSnackbar, setOPenSnackBar] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [err, setErr] = useState(false);

  const inputGuestField = [
    {
      type: "text",
      id: "1",
      guestName: "",
    },
  ];
  const [guest, setGuest] = useState(inputGuestField);
  const guestName = guest.map((guest) => guest.guestName);
  // console.log(guestName);
  // add new guest input field
  const addInput = () => {
    setGuest((s) => {
      return [
        ...s,
        {
          id: generate(),
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handleToggleModal = (open) => {
    setOpenModal(open);
  };

  const handleGetCoin = () => {
    route.push("/wallet");
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

  const handleCreateParty = async () => {
    console.log("create party");
    if (!partyName && !partyDate && !partyDesc) {
      setErr(true);
    } else if (partyName && partyDate && partyDesc) {
      setErr(false);
      const obj = {
        owner: "bright",
        name: partyName,
        date: partyDate,
        description: partyDesc,
        geusts: guestName,
        user: localStorage.getItem("userId"),
      };

      dispatch(createPartyRequest(JSON.stringify(obj)));
      // const newParty = localStorage.setItem("partyData?.id")
      resetState();
      setTimeout(() => {
        parties.filter((element) => element.id === partyData?.id);
        const getDetail = {
          id: partyData?.id,
          user: localStorage.getItem("userId"),
        };
        dispatch(getPartyDetailsRequest(getDetail));
        route.push("/detail");
      }, 4000);
      dispatch(createPartyCleanUp());
    }
  };
  const resetState = () => {
    setSelectedPartyName("");
    setSelectedPartyDate("");
    setSelectedPartyDesc("");
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ width: "auto" }} role="presentation">
        <Header
          type="nav"
          title="New Shout! Party"
          leftLink="/party"
          leftIcon={<BsChevronLeft onClick={() => route.push("/party")} />}
          primary
        />

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
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
          <Box sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FormLabel
                required
                sx={{
                  marginBottom: ".7rem",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#0a1f44",
                  paddingRight: "5px",
                  // height: "50px",
                  // background: "blue",
                }}
              >
                Add Guest
              </FormLabel>
              <PersonAddAltIcon
                onClick={addInput}
                sx={{ cursor: "pointer" }}
                style={{ position: "relative", top: "-5px" }}
              />
            </div>

            {guest.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  marginBottom: "15px",
                  alignItems: "center",
                }}
              >
                <TextField
                  error={err}
                  // id="outlined-select-currency"
                  id={item.id}
                  placeholder="Guest email"
                  value={item.guestName}
                  onChange={(e) =>
                    setGuest((currentGuest) =>
                      currentGuest.map((x) =>
                        x.id === item.id
                          ? {
                              ...x,
                              guestName: e.target.value,
                            }
                          : x
                      )
                    )
                  }
                  sx={{
                    "& .css-nnbavb": { float: "left" },
                    "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                    width: "550px",
                    paddingRight: "8px",
                  }}
                />
                {guest.length === 1 ? (
                  ""
                ) : (
                  <PersonRemoveAlt1OutlinedIcon
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setGuest((currentGuest) => currentGuest.filter((x) => x.id !== item.id))
                    }
                  />
                )}
              </Box>
            ))}
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
              minRows={4}
              style={{ width: "100%", padding: "0.5rem" }}
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
            // onClick={handleCreateParty}
            onClick={userCoin >= 100 ? () => handleCreateParty() : () => handleToggleModal(true)}
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
              {isLoading ? (
                <img
                  aria-disabled
                  src="/assest/images/Shoutassets/loader.gif"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />
              ) : (
                "Create"
              )}
            </Button>
          </Box>
          {/* {isSuccessful ? (
            <Snackbar
              open={openSnackbar}
              autoHideDuration={2000}
              onClose={() => setOPenSnackBar(false)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert onClose={handleCloseAlert} severity="success" sx={{ width: "100%" }}>
                Party Created Successfully!
              </Alert>
            </Snackbar>
          ) : (
            ""
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
