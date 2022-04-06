import React from "react";
import { Box, SwipeableDrawer, Stack, Typography, Avatar } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import ButtonComponent from "../../Component/Button";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

import { useRouter } from "next/router";
// import { ReactComponent as BaseImage } from "../../assest/images/Base.svg";

import { useStyles } from "./style";

const cloudName = process.env.REACT_APP_CLOUD_NAME || "de8vrxbqq";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width: "100%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#818FA3",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "red",
  },
}));

const GiftGoalsDrawer = ({ show, toggleDrawer }) => {
  const classes = useStyles();
  const { partyDetails } = useSelector((s) => s.getPartyDetails);

  const route = useRouter();
  const giftPrice = partyDetails?.party?.GiftGoal?.Gift?.price;
  const amountContributed = partyDetails?.party?.GiftGoal?.contributed;
  const contributors = partyDetails?.party?.GiftGoal?.contributors;
  const contributorsData = [
    // {
    //   username: "Levels Akinkunle",
    //   message: "Just sent you 1,000 Coins🎉🎉",
    // },
    // {
    //   username: "Levels Akinkunle",
    //   message: "Just sent you 1,000 Coins🎉🎉",
    // },
    // {
    //   username: "Tayo Kenneth",
    //   message: "Just sent you 500 Coins🎉🎉",
    // },
    // {
    //   username: "Tayo Kenneth",
    //   message: "Just sent you 500 Coins🎉🎉",
    // },
    // {
    //   username: "Nifemi Cole",
    //   message: "Just sent you 5000 Coins🎉🎉",
    // },
    // {
    //   username: "Nifemi Cole",
    //   message: "Just sent you 5000 Coins🎉🎉",
    // },
  ];

  const contributorsItem = (data) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "1rem",
      }}
    >
      <Box sx={{ width: "10%" }}>
        <Avatar variant="rounded" alt="Trevor Henderson" src="/static/images/avatar/1.jpg" />
      </Box>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          color: "#90979E",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>
          <Box component="span" sx={{ color: "#C0C9D2" }}>
            {data?.fistname}{" "}
          </Box>
          {/* {data.message} */}
        </Typography>
      </Box>
    </Box>
  );

  const list = () => (
    <Box sx={{ width: "auto" }} role="presentation">
      <Box className={classes.bottomDrawerWrapper}>
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
        <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }} variant="h5">
          Gift goal
        </Typography>
        <Typography sx={{ color: "#0A1F44" }} variant="body1">
          {" "}
          Check your gift goal progress
        </Typography>

        <Box
          sx={{
            border: ".4px solid #90979E",
            width: "100%",
            borderRadius: "10px",
            marginTop: "1.5rem",
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                width: "20%",
                height: "20%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <BaseImage className={classes.img} /> */}
              <img src={partyDetails?.party?.GiftGoal?.Gift?.image} alt="" />
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: ".5rem",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                marginBottom: "1rem",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#110066",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                }}
              >
                {partyDetails?.party?.GiftGoal?.Gift?.title}
              </Typography>
              <Typography variant="p" sx={{ color: "#818FA3", fontSize: "1rem" }}>
                {partyDetails?.party?.GiftGoal?.Gift?.description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              flexGrow: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "1rem",
              marginBottom: "2rem",
            }}
          >
            <BorderLinearProgress variant="determinate" value={30} />
            <Typography
              variant="h5"
              sx={{
                color: "#110066",
                marginTop: ".3rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              {`${amountContributed} / {giftPrice}`}Coins
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "100%", marginTop: "2rem" }}>
          <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }} variant="h6">
            Contributors
          </Typography>
          {contributors?.map((data) => contributorsItem(data))}
        </Box>
      </Box>
    </Box>
  );

  const noGift = () => (
    <Box sx={{ width: "auto" }} role="presentation">
      <Box className={"classes.bottomDrawerWrapper"}>
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
        <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }} variant="h5">
          Gift goal
        </Typography>
        <Typography sx={{ color: "#0A1F44" }} variant="body1">
          {" "}
          Check your gift goal progress
        </Typography>
        <Typography sx={{ color: "#0A1F44", marginTop: "15px", textAlign: "center" }} variant="h6">
          {" "}
          Ooopsss!
        </Typography>
        <p style={{ color: "#0A1F44", textAlign: "center" }}>You have not created any Gift Goal</p>
        <ButtonComponent title="Create Gift Goal" handleClick={() => route.push("/details/giftgoal")} button="#0A1F44" width="100%" />
      </Box>
    </Box>
  );

  if (partyDetails?.party?.GiftGoal === null) {
    <div>
      <h1>You have not yet created any Gift Goal.</h1>
      <p>Create a gift goal so that you can </p>
    </div>;
  }
  return (
    <div className={classes.bottomDrawerContainer}>
      <SwipeableDrawer
        sx={{
          "& 	.MuiDrawer-paper": {
            maxHeight: "90%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            maxWidth: "sm",
            margin: "0 auto",
            padding: "1rem 1.5rem",
          },
        }}
        modal={classes.bottomDrawerContainer}
        anchor={"bottom"}
        open={show}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        {partyDetails?.party?.GiftGoal === null ? noGift() : list()}
      </SwipeableDrawer>
    </div>
  );
};

export default GiftGoalsDrawer;
