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
import { partyCreated } from "../../store/actions/track-state";
export const CreateParty = () => {
  const classes = useStyles();
  // localstorage data
  const userCoin = localStorage.getItem("coin");
  // const userCoin = 20;
  // useSelector and dispatch
  const token = useSelector((state) => state.verifyToken.token);
  const { parties } = useSelector((s) => s.getParties);
  const { isLoading, partyData } = useSelector((s) => s.createParty);
  const { data } = useSelector((s) => s.checkCoinReducer);

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
  const [loading, setLoading] = useState(false);
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

  // const handleGetCoin = () => {
  //   route.push("/wallet");
  // };

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
    if (!partyName && !partyDate && !partyDesc) {
      setErr(true);
    } else if (partyName && partyDate && partyDesc) {
      setErr(false);
      const obj = {
        owner: localStorage.getItem("userId"),
        name: partyName,
        date: partyDate,
        description: partyDesc,
        geusts: guestName,
        user: localStorage.getItem("userId"),
      };

      dispatch(createPartyRequest(obj));
      resetState();
      setTimeout(() => {
        route.push(`/party/${token}`);
      }, 2000);
    }
  };
  // console.log(partyData?.id);

  // Route to buy coins
  const getCoins = () => {
    route.push(`/wallet/${token}`);
    dispatch(partyCreated());
  };

  // console.log("my party", parties[0]);
  const resetState = () => {
    setSelectedPartyName("");
    setSelectedPartyDate("");
    setSelectedPartyDesc("");
    // setGuest("");
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ width: "auto" }} role="presentation">
        <Header
          type="nav"
          title="New Shout! Party"
          // leftLink="/party"
          leftIcon={<BsChevronLeft onClick={() => route.back()} />}
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
            onClick={data?.coins >= 100 ? () => handleCreateParty() : () => handleToggleModal(true)}
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
              <Box onClick={getCoins} sx={{ margin: "2rem 0rem", cursor: "pointer" }}>
                <ButtonComponent title="Get Coins" button="#162767" width="100%" />
              </Box>
            </Box>
          </Container>
        </ModalComponent>
      </Container>
    </>
  );
};
