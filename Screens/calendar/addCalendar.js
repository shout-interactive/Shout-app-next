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
export const AddCalendar = () => {
  const classes = useStyles();
  const route = useRouter();
  const [partyDate, setSelectedPartyDate] = useState("");
  const [description, setDescription] = useState("");
  const [eventName, setEventName] = useState("");
  const [repeat, setRepeat] = useState("");
  const [birthday, setBirthday] = useState("");
  const [err, setErr] = useState(false);
  const handleChange = (event) => {
    setRepeat(event.target.value);
  };
  const handleChangeBirthday = (event) => {
    setBirthday(event.target.value);
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
            <Typography
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "##0a1f44",
              }}
            >
              Repeat*
            </Typography>
            <FormControl fullWidth>
              <Select
                sx={{
                  borderRadius: "20px",
                }}
                value={repeat}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">Birthday</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
            <Typography
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "##0a1f44",
              }}
            >
              Event
            </Typography>
            <FormControl fullWidth>
              <Select
                sx={{
                  borderRadius: "20px",
                }}
                value={birthday}
                onChange={handleChangeBirthday}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">Birthday</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
            <Typography
              sx={{
                marginBottom: ".7rem",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#0a1f44",
              }}
            >
              Description
            </Typography>
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
