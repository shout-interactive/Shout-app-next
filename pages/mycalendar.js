import React from "react";
import { useRouter } from "next/router";
import CalendarList from "../Screens/calendar";
import { useDispatch, useSelector } from "react-redux";

import { AddCalendar } from "./../Screens/calendar/addCalendar";

const MyCalender = () => {
  return <CalendarList />;
};
export default MyCalender;
