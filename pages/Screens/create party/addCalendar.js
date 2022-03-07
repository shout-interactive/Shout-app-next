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
import Link from "@mui/material/Link";

// import { useDispatch, useSelector } from "react-redux";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CakeIcon from "@mui/icons-material/Cake";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { BsChevronLeft } from "react-icons/bs";
import VideocamSharpIcon from "@mui/icons-material/VideocamSharp";
import { useStyles } from "./style";
// import { Header } from "./../../../Component/Header/index";
import ClearRoundedIcon from "@mui/icons-material/Clear";
import coinImg from "../../../assest/images/coinImg.png";
import ModalComponent from "../../../Component/Modals";
import ButtonComponent from "../../../Component/Button";
import AddIcon from "@mui/icons-material/Add";

import { FormLabel } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

import { Header } from "../../../Component/Header/index";
import FormControl from "@mui/material/FormControl";

export const AddCalendar = () => {
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(true);

  const [partyuser, setSelectedPartyUser] = useState("myself one");
  const [partyName, setSelectedPartyName] = useState("");
  const [partyDate, setSelectedPartyDate] = useState("");
  const [partyDesc, setSelectedPartyDesc] = useState("");
  const [partyGuests, setSelectedPartyGuests] = useState([]);
  const [repeat, setRepeat] = useState("");
  const [birthday, setBirthday] = useState("");
  const [enabled, setEnabled] = useState(true);
  const [err, setErr] = useState(false);
  const handleChange = (event) => {
    setRepeat(event.target.value);
  };
  const handleChangeBirthday = (event) => {
    setBirthday(event.target.value);
  };
  const onExit = () => {
    setEnabled(false);
  };
  //const { enqueueSnackbar } = useSnackbar();
  // const [selectedIndexArr, setSelectedIndexArray] = useState([]);

  // const handleCreate = () => {};
  const preventDefault = (event) => event.preventDefault();
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = (open) => {
    setOpenModal(open);
  };

  return (
    <>
      <Box
        sx={{
          height: "400px",
          width: "100%",

          borderRadius: "0px",
        }}
      >
        <Header
          type="nav"
          title="Add Calendar Event"
          leftLink="/party"
          leftIcon={<BsChevronLeft onClick={() => handleGoBack()} />}
          rightLink=""
          primary
        />
        <Box
          id="partyName"
          sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}
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
            Event Name
          </FormLabel>
          <TextField
            error={err}
            // helperText="⚠ You need more coins to send this amount."
            id="outlined-select-currency"
            fullWidth
            placeholder="David's 25th Birthday Bash"
            // value={partyName}
            // onChange={handleChangePartyName}
            sx={{
              "& .css-nnbavb": { float: "left" },
              "& .MuiOutlinedInput-root": { borderRadius: "20px" },
            }}
          />
        </Box>

        <Box
          id="editCalendar"
          // onClick={handleGoBack}
          // onClick={userCoin >= 100 ? handleGoBack : () => handleToggleModal(true)}
          sx={{
            margin: "2rem 0rem",
            cursor: "pointer",
            // display: "flex",
            flex: "1",
            flexDirection: "row",
            flexBasis: "100%",
            justifyContent: "space-between",
            borderRadius: "20px",
          }}
          className={classes.buttonWrapper}
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
          id="editCalendar"
          // onClick={handleGoBack}
          // onClick={userCoin >= 100 ? handleGoBack : () => handleToggleModal(true)}
          sx={{
            margin: "2rem 0rem",
            cursor: "pointer",
            // display: "flex",
            flex: "1",
            flexDirection: "row",
            flexBasis: "100%",
            justifyContent: "space-between",
            borderRadius: "20px",
          }}
          className={classes.buttonWrapper}
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
        <Box id="date" sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
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
            defaultValue="2017-05-24"
            fullWidth
            placeholder="David's 25th Birthday Bash"
            // value={partyDate}
            // onChange={handleChangePartyDate}
            sx={{
              "& .css-nnbavb": { float: "left" },
              "& .MuiOutlinedInput-root": { borderRadius: "20px" },
            }}
          />
        </Box>
        <Box
          id="description"
          sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}
        >
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
            // type="multiline"
            // id="outlined-select-currency"
            minRows={4}
            style={{ width: "100%", padding: "0.5rem" }}
            // maxRows={4}
            // fullWidth
            placeholder="Come and have a blast and party with me as I turn 25! 🍾"
            // value={partyDesc}
            // onChange={handleChangePartyDesc}
            sx={{
              "& .css-nnbavb": { float: "left" },
              "& .MuiOutlinedInput-root": { borderRadius: "20px" },
            }}
          />
        </Box>

        <Box
          // onClick={handleGoBack}
          // onClick={userCoin >= 100 ? handleGoBack : () => handleToggleModal(true)}
          sx={{
            margin: "17rem 0rem",
            cursor: "pointer",
            display: "flex",
            flex: "1",
            flexDirection: "row",
            flexBasis: "100%",
            justifyContent: "space-between",
          }}
          className={classes.buttonWrapper}
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
            {/* {isLoading ? "Loading..." : "Create"} */}Save
          </Button>
        </Box>
      </Box>
    </>
  );
};
