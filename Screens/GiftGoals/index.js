import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { styled } from "@mui/material/styles";
import { Container, Box, Stack, Typography, Button, TextField } from "@mui/material";
import ModalComponent from "../../Component/Modals";

import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import CheckCircleOutlineRounded from "@mui/icons-material/CheckCircleOutlineRounded";
import ClearRoundedIcon from "@mui/icons-material/Clear";
// import { createGiftSend } from "../../store/actions/create-gift";
// import { ReactComponent as BeachImage } from "../../assest/images/beach.svg";
import styles from "./style.module.css";
import { Header } from "../../Component/Header";

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

const GiftGoals = () => {
  // const dispatch = useDispatch();
  const [amount, setAMount] = useState();
  const [error, setError] = useState(false);
  const [coins, setCoins] = useState(0);
  const [totalCoins, setTotalCoins] = useState(140000);
  // const {
  //   isLoading,
  //   error: err,
  //   isSuccessful,
  //   partyDetails,
  //   message,
  // } = useSelector((s) => s.createGift);
  const [openModal, setOpenModal] = useState(false);

  const handleSend = () => {
    if (Number(amount) < 1 || !amount) {
      setError(true);
      return;
    } else if (Number(amount) > 0) {
      // navigate("/party/details");
      const obj = {
        giftGoal: amount,
      };
      dispatch(createGiftSend(obj));
      setCoins(amount);
      setTimeout(() => {
        setOpenModal(true);
      }, 3000);
      setAMount();
    }
  };
  const handleToggleModal = (open) => {
    setOpenModal(open);
  };

  return (
    <Container className={styles.root}>
      <Header
        type="nav"
        title="Gift goal"
        leftLink="/detail"
        leftIcon={<BsChevronLeft />}
        primary
      />
      <Box
        sx={{
          border: "1px solid #90979E",
          width: "90%",
          borderRadius: "10px",
          marginTop: "1rem",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.2rem",
          }}
        >
          <img
            src={
              // partyDetails?.GiftGoal?.gift?.image ||
              "https://res.cloudinary.com/de8vrxbqq/image/upload/v1644325906/shout/beach_jqgnsm.svg"
            }
            alt="beach"
            className={styles.img}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "0rem 1.5rem",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#110066", fontSize: "1.3rem", fontWeight: "bold" }}
          >
            2 Week Trip to Dubai
          </Typography>
          <Typography variant="p" sx={{ color: "#818FA3", fontSize: "1rem" }}>
            A 2 week all expense paid trip to Dubai brought to you by Emirate Airline
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            flexGrow: 1,
            display: "flex",
            padding: "0rem 1.5rem",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <BorderLinearProgress
            variant="determinate"
            value={Math.floor((amount / totalCoins) * 100)}
          />
          <Typography
            variant="h5"
            sx={{ color: "#110066", marginTop: ".3rem", fontSize: "1rem", fontWeight: "bold" }}
          >
            {/* {`${isSuccessful ? coins : 0} / ${totalCoins}`} Coins */}0 coins
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: "90%", margin: "0 auto", marginTop: "1.5rem", marginBottom: "1.5rem" }}>
        <Stack sx={{ justifyContent: "space-between" }} direction="horizontal" gap={1}>
          <Typography variant="h4" sx={{ color: "#110066", fontSize: "1rem", fontWeight: "bold" }}>
            Coins
          </Typography>
          <Typography variant="p" sx={{ color: "#818FA3", fontSize: "1rem" }}>
            {/* {isSuccessful ? coins : 0} */}0 Coins Available
          </Typography>
        </Stack>
        <Box
          component="form"
          sx={{
            width: "100%",
            borderRadius: "25px",
            "& .MuiTextField-root": { m: 1, width: "100%", borderRadius: "25px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            error={error}
            id="outlined-error-helper-text"
            label="Enter coin amount"
            placeholder="Enter coin amount"
            helperText="⚠ You need more coins to send this amount."
            onChange={(e) => {
              setError(false);
              setAMount(e.target.value);
            }}
            type="number"
            value={amount}
          />
        </Box>
      </Box>

      <Box
        onClick={() => handleSend()}
        sx={{ width: "90%", margin: "1.5rem auto", backgroundColor: "transparent" }}
      >
        <Button
          sx={{
            backgroundColor: amount > 0 && !error ? "#110066" : "#818FA3",
            color: "white",
            textTransform: "capitalize",
            fontWeight: "bold",
            padding: ".8rem 0rem",
            borderRadius: "10px",
          }}
          variant="contained"
          fullWidth
        >
          Send Coin
          {/* {isLoading ? "Sending coins" : "Send Coins"} */}
        </Button>
      </Box>
      <ModalComponent show={openModal} toggleModal={handleToggleModal}>
        <Container className={styles.containerDetails}>
          <Box className={styles.modalBox}>
            <CheckCircleOutlineRounded className={styles.icon} />

            <Typography sx={{ padding: "0 40px", textAlign: "center", marginBottom: "40px" }}>
              You just gifted David {coins} coins
            </Typography>
            <ClearRoundedIcon
              className={styles.btnRemove}
              onClick={() => handleToggleModal(false)}
            />
          </Box>
        </Container>
      </ModalComponent>
    </Container>
  );
};

export default GiftGoals;