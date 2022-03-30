import React, { useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { Header } from "../../Component/Header";
import { BsChevronLeft } from "react-icons/bs";
import AddIcon from "@mui/icons-material/Add";
import TableTab from "./Tabs";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getCalendarRequest } from "../../store/actions/get-calendar";

const CalendarList = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.verifyToken.token) || sessionStorage.getItem("token");

  const fetchCalendar = () => {
    const obj = {
      user: localStorage.getItem("userId"),
    };
    dispatch(getCalendarRequest(obj));
  };

  useEffect(() => {
    fetchCalendar();
  }, []);
  return (
    <>
      <Container maxWidth="sm" sx={{ width: "auto" }} role="presentation">
        <Header
          type="nav"
          title="Calendar"
          // leftLink="/party"
          leftIcon={<BsChevronLeft onClick={() => route.push(`/party/${token}`)} />}
          rightIcon={<AddIcon onClick={() => route.push("/calendar/addcalendar")} />}
          primary
        />
        <TableTab />
      </Container>
    </>
  );
};
export default CalendarList;
