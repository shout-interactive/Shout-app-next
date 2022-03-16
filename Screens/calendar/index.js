import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { Header } from "../../Component/Header";
import { BsChevronLeft } from "react-icons/bs";
import AddIcon from "@mui/icons-material/Add";
import TableTab from "./Tabs";
import { useRouter } from "next/router";

const CalendarList = () => {
  const route = useRouter();
  return (
    <>
      <Container maxWidth="sm" sx={{ width: "auto" }} role="presentation">
        <Header
          type="nav"
          title="Calendar"
          leftLink="/party"
          leftIcon={<BsChevronLeft />}
          rightIcon={
            <AddIcon onClick={() => route.push("/calendar/addcalendar")} />
          }
          primary
        />
        <TableTab />
      </Container>
    </>
  );
};
export default CalendarList;
