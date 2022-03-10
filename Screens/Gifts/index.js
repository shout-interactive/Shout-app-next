import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Container, Box, Typography } from "@mui/material";
import { Header } from "../../Component/Header";
import ButtonComponent from "../../Component/Button";
const GiftScreen = () => {
  return (
    <Container className="">
      <Header
        type="nav"
        title="Gift goal"
        leftLink="/home"
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
        <img
          src="/assets/giftboxx.png"
          alt=""
          style={{ width: "150px", padding: "10px 0" }}
        />
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
        <Typography variant="p" sx={{ color: "#818FA3", fontSize: "1.2rem" }}>
          You have not selected a gift goal
        </Typography>
        <ButtonComponent title={"Select Gift goal"} button="#110066" />
      </Box>
    </Container>
  );
};

export default GiftScreen;