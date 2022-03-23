import React, { useState, useEffect } from "react";
import { Box, SwipeableDrawer, Stack, Paper, Typography } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import ButtonComponent from "../../Component/Button";
import { useStyles } from "./style";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getPartyDetailsRequest } from "../../store/actions/get-party-details";

const GiftGoalDrawer = ({ show, toggleDrawer }) => {
  let giftId;
  let userId;
  const { partyDetails } = useSelector((s) => s.getPartyDetails);
  const [allGift, setAllGift] = useState([]);
  const route = useRouter();
  const dispatch = useDispatch();
  if (typeof window !== "undefined") {
    // Perform localStorage action
    giftId = localStorage.getItem("giftId");
    userId = localStorage.getItem("userId");
  }

  const getAllGiftOptions = async () => {
    const response = await axios({
      method: "POST",
      url: "https://dev-server.shoutng.com/v1/party/gift/all",
    });
    setAllGift(response.data.gifts);
    console.log(response.data.gifts);
  };
  const createPartyGoal = async () => {
    const response = await axios({
      method: "POST",
      data: {
        party: partyDetails?.party.id,
        gift: giftId,
        user: userId,
      },
      url: "https://dev-server.shoutng.com/v1/party/gift",
    });
    console.log(response.data);
    console.log("click");
    setTimeout(() => {
      // const getDetail = {
      //   id: partyDetails?.party.id,
      //   user: localStorage.getItem("userId"),
      // };
      // dispatch(getPartyDetailsRequest(getDetail));
      route.back();
    }, 2000);
  };
  useEffect(() => {
    getAllGiftOptions();
  }, []);
  const [selected, setSelected] = useState(0);

  const selectedGift = (index, id) => {
    setSelected(index);
    console.log(id);
    localStorage.setItem("giftId", id);
  };
  const classes = useStyles();
  const goals = () => (
    <Box sx={{ width: "auto" }} role="presentation">
      <Box className={classes.bottomDrawerContainer}>
        <Stack
          direction="horizontal"
          gap={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div />
          <DragHandleIcon />
          <CloseIcon onClick={() => toggleDrawer(false)} sx={{ cursor: "pointer" }} />
        </Stack>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }} variant="h5">
            Gifts
          </Typography>
          <Typography sx={{ color: "#0A1F44" }} variant="body1">
            {" "}
            Select a gift you would like to win
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          {allGift.map((data, index) => {
            const { title, price, image, description, id } = data;
            return (
              <Paper
                onClick={() => selectedGift(index, id)}
                // onClick={() => console.log(id)}
                key={id}
                elevation={1}
                className={classes.paperHover}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  margin: "1.4rem auto 0rem",
                  width: "100%",
                  borderRadius: "",
                  padding: "5px",
                  boxShadow: "0",
                  border: "1px solid lightgray",
                }}
                style={
                  selected === index
                    ? { border: "1px solid #110066" }
                    : { border: "1px solid lightgray" }
                }
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "3px",
                  }}
                >
                  <img
                    src={image || title.chatAt(0)}
                    alt=""
                    className={classes.giftImg}
                    style={{
                      backgroundColor: "",
                      height: "60px",
                      width: "60px",
                      borderRadius: "10px",
                    }}
                  />
                  <Box sx={{ padding: "2px 1rem", color: "#0A1F44" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {title}
                    </Typography>
                    <Typography variant="body1">{description}</Typography>
                  </Box>
                </Box>
              </Paper>
            );
          })}
          <Box sx={{ marginTop: "3em" }} onClick={() => createPartyGoal()}>
            <ButtonComponent
              title="Sumbit"
              button="#12B363"
              width="100%"
              large
              //   handleClick={createPartyGoal}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
  return (
    <SwipeableDrawer
      sx={{
        "& 	.MuiDrawer-paper": {
          maxHeight: "70%",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          maxWidth: "sm",
          margin: "0 auto",
          padding: "1rem",
        },
      }}
      modal={classes.bottomDrawerContainer}
      anchor={"bottom"}
      open={show}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
    >
      {goals()}
    </SwipeableDrawer>
  );
};
export default GiftGoalDrawer;
