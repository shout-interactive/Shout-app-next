import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { Header } from "../../Component/Header";
import { BsChevronLeft } from "react-icons/bs";
import AddIcon from "@mui/icons-material/Add";
import TableTab from "./Tabs";
import { useRouter } from "next/router";
import { getPartiesRequest } from "../../store/actions/get-parties";
import { useDispatch, useSelector } from "react-redux";

const CalendarList = () => {
  const route = useRouter();
  const dispatch = useDispatch();

  // const fetchParties = () => {
  //   const obj = {
  //     user: localStorage.getItem("userId"),
  //   };

  //   dispatch(getPartiesRequest(obj));
  // };

  // const fetchInvite = () => {
  //   const obj = {
  //     user: localStorage.getItem("userId"),
  //   };

  //   dispatch(getInviteRequest(obj));
  // };

  // useEffect(() => {
  //   fetchParties();
  //   fetchInvite();
  // }, []);
  return (
    <>
      <Container maxWidth="sm" sx={{ width: "auto" }} role="presentation">
        <Header
          type="nav"
          title="Calendar"
          // leftLink="/party"
          leftIcon={<BsChevronLeft onClick={() => route.back()} />}
          rightIcon={<AddIcon onClick={() => route.push("/calendar/addcalendar")} />}
          primary
        />
        <TableTab />
      </Container>
    </>
  );
};
export default CalendarList;
