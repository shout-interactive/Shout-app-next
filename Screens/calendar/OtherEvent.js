import React from "react";
import Title from "../../Component/TitleComponent";
import { Container } from "@mui/material";
import CalenderCard from "../../Component/CalendarCard";
import { useSelector } from "react-redux";
import moment from "moment";
const Otherevent = () => {
  const { calendar } = useSelector((s) => s.getCalendar);

  // console.log("calendar", calendar.calenders);

  const groups = calendar.calenders.reduce((groups, event) => {
    const date = event.date.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(event);
    return groups;
  }, {});
  const enterCalendarDetails = (data, id) => {
    // const userId = localStorage.getItem("userId");
    const checkParty = data?.filter((element) => element.id === id);
    return checkParty;
    // const obj = {
    //   id: checkParty[0].id,
    //   user: userId,
    // };
    // dispatch(getPartyDetailsRequest(obj));
    // route.push("/detail");
    // console.log(checkParty);
    // console.log(checkParty[0].id);
  };

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

  if (calendar.calenders.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <p>You have not created a calendar schedule yet</p>
      </div>
    );
  }
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
              click={enterCalendarDetails(calendar.calenders, user?.id)}
            />
          ));
          return (
            <>
              <Title title={moment(data?.date).format("ddd Do, MMM ")} />
              {event}
            </>
          );
        })}
      </Container>
    </>
  );
};
export default Otherevent;
