import React from "react";
import Title from "../../Component/TitleComponent";
import { Container } from "@mui/material";
import CalenderCard from "../../Component/CalendarCard";
import { useSelector } from "react-redux";
import moment from "moment";
const Otherevent = () => {
  const { parties } = useSelector((s) => s.getParties);

  const groups = parties.reduce((groups, event) => {
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
  const checkToday = groupArrays?.map((data) => moment(data?.date).format("ddd d, MMM "));
  const d = new Date();
  console.log(groupArrays);
  return (
    <>
      <Container>
        {groupArrays?.map((data) => {
          const event = data?.event.map((user) => (
            <CalenderCard
              backgroundColor={
                checkToday === moment(d).format("ddd d, MMM ") ? "#FA9330" : "#162767"
              }
              data={user?.name}
              id={user?.id}
            />
          ));
          return (
            <>
              <Title title={moment(data?.date).format("ddd d, MMM ")} />
              {event}
            </>
          );
        })}
      </Container>
    </>
  );
};
export default Otherevent;
