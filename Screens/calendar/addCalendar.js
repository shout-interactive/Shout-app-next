import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  SwipeableDrawer,
  TextField,
  MenuItem,
  Typography,
  Button,
  Avatar,
  Snackbar,
  Alert,
  Select,
  OutlinedInput,
  Input,
} from "@mui/material";
import { BsChevronLeft } from "react-icons/bs";
import { useStyles } from "./style";
import { FormLabel } from "@mui/material";
import { Header } from "../../Component/Header/index";
import FormControl from "@mui/material/FormControl";
import { useRouter } from "next/router";
import { createCalendarRequest } from "../../store/actions/create-calendar";

export const AddCalendar = () => {
  const classes = useStyles();
  const route = useRouter();
  const [partyDate, setSelectedPartyDate] = useState("");
  const [description, setDescription] = useState("");
  const [eventName, setEventName] = useState("");
  const [repeat, setRepeat] = useState("");
  const [eventType, setEventType] = useState("");
  const [err, setErr] = useState(false);
  const handleChange = (event) => {
    setRepeat(event.target.value);
  };
  const handleChangeEvent = (event) => {
    setEventType(event.target.value);
  };

  // create calendar
  const handleCreateCalendar = async () => {
    if (!eventName && !eventType && !partyDate && !partyDesc) {
      setErr(true);
    } else if (partyName && partyDate && partyDesc) {
      setErr(false);
      const obj = {
        name: eventName,
        event_type: eventType,
        date: partyDate,
        repeat: repeat,
        party: "",
        description: partyDesc,
      };

      dispatch(createPartyRequest(obj));
      resetState();
      setTimeout(() => {
        route.push(`/party/${token}`);
      }, 2000);
    }
  };

  const resetState = () => {
    setSelectedPartyDate("");
    setDescription("");
    setEventName("");
    setRepeat("");
    setBirthday("");
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ width: "auto" }} role="presentation">
        <Header
          type="nav"
          title="Add Calendar Event"
          leftLink="/mycalendar"
          leftIcon={<BsChevronLeft onClick={() => route.push("/mycalendar")} />}
          primary
        />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "",
          }}
        >
          <Box sx={{ margin: "1rem 0" }}>
            <FormLabel
              required
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#0a1f44",
              }}
            >
              Event Name
            </FormLabel>
            <TextField
              error={err}
              id="outlined-select-currency"
              fullWidth
              placeholder="David's 25th Birthday Bash"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              sx={{
                "& .css-nnbavb": { float: "left" },
                "& .MuiOutlinedInput-root": { borderRadius: "20px" },
              }}
            />
          </Box>

          <Box
            sx={{
              margin: "1rem 0rem",
              cursor: "pointer",
              // display: "flex",
              flex: "1",
              flexDirection: "row",
              flexBasis: "100%",
              justifyContent: "space-between",
              borderRadius: "20px",
            }}
          >
            <FormLabel
              required
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#0a1f44",
              }}
            >
              Required
            </FormLabel>
            <FormControl fullWidth>
              <Select
                error={err}
                sx={{
                  borderRadius: "20px",
                }}
                value={repeat}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">Birthday</MenuItem>
                <MenuItem value="yearly">Yearly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              margin: "1rem 0rem",
              cursor: "pointer",
              // display: "flex",
              flex: "1",
              flexDirection: "row",
              flexBasis: "100%",
              justifyContent: "space-between",
              borderRadius: "20px",
            }}
          >
            <FormLabel
              required
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#0a1f44",
              }}
            >
              Event Type
            </FormLabel>
            <FormControl fullWidth>
              <Select
                error={err}
                sx={{
                  borderRadius: "20px",
                }}
                value={eventType}
                onChange={setEventType}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">Birthday</MenuItem>
                <MenuItem value="house warming">House Warming</MenuItem>
                <MenuItem value="wedding">Wedding</MenuItem>
                <MenuItem value="anniversary">Anniversary</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box id="date" sx={{ width: "100%", margin: "1rem 0" }}>
            <FormLabel
              required
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#0a1f44",
              }}
            >
              Date
            </FormLabel>
            <TextField
              error={err}
              type="date"
              id="outlined-select-currency"
              defaultValue="2022-03-11"
              fullWidth
              value={partyDate}
              onChange={(e) => setSelectedPartyDate(e.target.value)}
              sx={{
                "& .css-nnbavb": { float: "left" },
                "& .MuiOutlinedInput-root": { borderRadius: "20px" },
              }}
            />
          </Box>
          <Box id="description" sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
            <FormLabel
              required
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#0a1f44",
              }}
            >
              Description
            </FormLabel>
            <TextField
              error={err}
              multiline
              minRows={4}
              style={{ width: "100%", padding: "0.5rem" }}
              placeholder="Come and have a blast and party with me as I turn 25! 🍾"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{
                "& .css-nnbavb": { float: "left" },
                "& .MuiOutlinedInput-root": { borderRadius: "20px" },
              }}
            />
          </Box>

          <Box
            onClick={handleCreateCalendar}
            sx={{
              marginTop: "4rem",
              position: "relative",
              bottom: "10px",
              width: "100%",
              cursor: "pointer",
              display: "flex",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#110066",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: ".8rem 0rem",
                borderRadius: "10px",
                margin: "0 .8rem",
              }}
              variant="outlined"
              fullWidth
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
