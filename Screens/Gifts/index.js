import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Container, Box, Typography } from "@mui/material";
import { Header } from "../../Component/Header";

const GiftScreen = () => {
  return (
    <Container className="">
      <Header type="nav" title="Gift goal" leftLink="/home" leftIcon={<BsChevronLeft />} primary />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h4" sx={{ color: "#110066", fontSize: "1.5rem", fontWeight: "bold" }}>
          No Gifts
        </Typography>
        <Typography variant="p" sx={{ color: "#818FA3", fontSize: "1.2rem" }}>
          Create a party and stand a chance of winning amazing gifts.
        </Typography>
      </Box>
    </Container>
  );
};

export default GiftScreen;
