import React from "react";
import Title from "../../Component/TitleComponent";
import { Container } from "@mui/material";
import CalenderCard from "../../Component/CalendarCard";
import {
  todayDate,
  tomorrowDate,
  nextDate,
  futureDate,
} from "../../utils/CalendarData";
const Otherevent = () => {
  return (
    <>
      <Container>
        <Title title="Today" />
        {todayDate?.map((data) => (
          <CalenderCard backgroundColor=" #FA9330" data={data} />
        ))}
        <Title title="Tomorrow" />
        {tomorrowDate?.map((data) => (
          <CalenderCard backgroundColor="#110066" data={data} />
        ))}
        <Title title="Tuesday, 18 Jan" />
        {nextDate?.map((data) => (
          <CalenderCard backgroundColor="#110066" data={data} />
        ))}
        <Title title="Tuesday, 28 Jan" />
        {futureDate?.map((data) => (
          <CalenderCard backgroundColor="#110066" data={data} />
        ))}
      </Container>
    </>
  );
};
export default Otherevent;
