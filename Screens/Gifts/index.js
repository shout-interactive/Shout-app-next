import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Container, Box, Typography } from "@mui/material";
import { Header } from "../../Component/Header";
import ButtonComponent from "../../Component/Button";
<<<<<<< HEAD
=======
import GiftGoalDrawer from "./GiftDrawer";
import { getPartiesRequest } from "../../store/actions/get-parties";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
>>>>>>> 7dc4591d82f7c8b4852b21a021af793bee650412
const GiftScreen = () => {
  const dispatch = useDispatch();
  const [toggleGoalDrawer, setToggleGoalDrawer] = useState(false);

  const fetchParties = () => {
    const obj = {
      user: localStorage.getItem("userId"),
    };

    dispatch(getPartiesRequest(obj));
  };
  useEffect(() => {
    fetchParties();
  });
  const handleToggleGoalDrawer = (open) => {
    setToggleGoalDrawer(open);
  };
  return (
    <Container className="">
      <Header
        type="nav"
        title="Gift goal"
<<<<<<< HEAD
        leftLink="/home"
=======
        leftLink="/detail"
>>>>>>> 7dc4591d82f7c8b4852b21a021af793bee650412
        leftIcon={<BsChevronLeft />}
        primary
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "2rem",
          marginBottom: "2rem",
          minHeight: "50vh",
        }}
      >
<<<<<<< HEAD
        <img
          src="/assets/giftboxx.png"
          alt=""
          style={{ width: "150px", padding: "10px 0" }}
        />
=======
        <img src="/assets/giftboxx.png" alt="" style={{ width: "150px", padding: "10px 0" }} />
>>>>>>> 7dc4591d82f7c8b4852b21a021af793bee650412
        <Typography
          variant="h4"
          sx={{
            color: "#110066",
            fontSize: "2rem",
            fontWeight: "bold",
            marginTop: "15PX",
          }}
        >
          No Gifts
        </Typography>
<<<<<<< HEAD
        <Typography variant="p" sx={{ color: "#818FA3", fontSize: "1.2rem" }}>
          You have not selected a gift goal
        </Typography>
        <ButtonComponent title={"Select Gift goal"} button="#110066" />
=======
        <Typography variant="p" sx={{ color: "#818FA3", fontSize: "1.2rem", marginBottom: "40px" }}>
          You have not selected a gift goal
        </Typography>
        <ButtonComponent
          title={"Select Gift goal"}
          button="#110066"
          width="50%"
          handleClick={() => handleToggleGoalDrawer(true)}
        />
>>>>>>> 7dc4591d82f7c8b4852b21a021af793bee650412
      </Box>
      <GiftGoalDrawer show={toggleGoalDrawer} toggleDrawer={handleToggleGoalDrawer} />
    </Container>
  );
};

export default GiftScreen;