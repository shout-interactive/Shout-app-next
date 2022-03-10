import React from "react";
import Title from "../../Component/TitleComponent";
import { Container } from "@mui/material";
import CalenderCard from "../../Component/CalendarCard";
import { todayDate } from "../../utils/CalendarData";
const EventTab = () => {
  return (
    <>
      <Container>
        <Title title="Today" />
        {todayDate?.map((data) => (
          <CalenderCard backgroundColor=" #FA9330" data={data} />
        ))}
      </Container>
    </>
  );
};
export default EventTab;
