import React from "react";
import Title from "../../Component/TitleComponent";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import CalenderCard from "../../Component/CalendarCard";
import { todayDate } from "../../utils/CalendarData";
import moment from "moment";
const EventTab = () => {
  const { parties } = useSelector((s) => s.getParties);
  const { calendar } = useSelector((s) => s.getCalendar);

  const d = new Date();
  const groups = calendar.calenders.reduce((groups, event) => {
    const date = event.date.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(event);
    return groups;
  }, {});

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      event: groups[date],
    };
  });

  // console.log(groupArrays);

  // moment(d).format("ddd d, MMM ");
  // Initiale
  const myTodayEvent = groupArrays?.map((data) =>
    data?.event?.map((user) => <CalenderCard backgroundColor=" #FA9330" data={user?.name} />)
  );

  const checkToday = groupArrays?.map((data) => moment(data?.date).format("ddd d, MMM "));

  return (
    <>
      <Container>
        <Title title="Today" />
        {checkToday === moment(d).format("ddd Do, MMM") ? myTodayEvent : "You have no event today"}
      </Container>
    </>
  );
};
export default EventTab;
