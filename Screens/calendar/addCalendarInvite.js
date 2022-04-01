import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CardHeader from "@mui/material/CardHeader";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import {
  Container,
  SwipeableDrawer,
  TextField,
  MenuItem,
  Button,
  Avatar,
  Snackbar,
  Alert,
  Select,
  OutlinedInput,
  Input,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getPartyDetailsRequest } from "../../store/actions/get-party-details";
import { useEffect } from "react";
import CakeIcon from "@mui/icons-material/Cake";

export const AddCalendarInvite = () => {
  const route = useRouter();
  const { isLoading, partyDetails } = useSelector((s) => s.getPartyDetails);
  const userId = localStorage.getItem("userId");
  const id = route.query.invite;
  const dispatch = useDispatch();
  const fetchPartyDetails = () => {
    const obj = {
      id: id,
      user: userId,
    };
    // console.log(id);
    dispatch(getPartyDetailsRequest(obj));
  };
  useEffect(() => {}, []);

  return (
    <div style={{ width: "100%" }}>
      <Box>
        <Card
          sx={{
            backgroundColor: "#14B363",
            height: "180px",
          }}
          variant="outlined"
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#14B363" }} aria-label="settings">
                <CloseIcon onClick={() => route.push("/mycalendar")} />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" sx={{ color: "white" }}>
                <MoreHorizIcon />
              </IconButton>
            }
          />
        </Card>
        <Box
          // fullWidth
          sx={{
            backgroundColor: "white",
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ color: "#14B363", bgcolor: "white" }} aria-label="settings">
                <CakeIcon />
              </Avatar>
            }
            title={partyDetails?.party?.name}
            subheader={
              <span>
                Thursday, 12 March • All day. <br />
                Repeats every year
              </span>
            }
          />
          <CardContent>
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
                multiline
                minRows={4}
                style={{ width: "100%", padding: "0.5rem" }}
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
              sx={{
                width: "90%",
                margin: "auto",
                cursor: "pointer",
                display: "flex",
                flex: "1",
                flexDirection: "row",
                flexBasis: "100%",
                justifyContent: "space-between",
                position: "fixed",
                bottom: "20px",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => route.push("/mycalendar")}
                sx={{
                  backgroundColor: "white",
                  color: "#110066",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  padding: ".8rem 0rem",
                  borderRadius: "10px",
                  margin: "0 .8rem",
                }}
                variant="outlined"
                fullWidth
              >
                Cancel
              </Button>
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
                Update
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </div>
  );
};
