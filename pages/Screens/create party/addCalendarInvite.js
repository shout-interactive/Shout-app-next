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
import { display } from "@mui/system";
import CardActions from "@mui/material/CardActions";
import { MoreHoriz } from "@mui/icons-material";
import ButtonComponent from "../../../Component/Button";
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
import Link from "@mui/material/Link";
import CakeIcon from "@mui/icons-material/Cake";

export const AddCalendarInvite = () => {
  return (
    <Box
      sx={{
        // height: "2500px",
        width: "100%",

        borderRadius: "0px",
      }}
    >
      <Box>
        <Card
          fullWidth
          sx={{
            backgroundColor: "#14B363",

            height: "180px",
            left: "0px",
            top: "0px",
            boxShadow: "out",
          }}
          variant="outlined"
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#14B363" }} aria-label="settings">
                <CloseIcon />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" sx={{ color: "white" }}>
                <MoreHorizIcon />
              </IconButton>
            }
          />
        </Card>
        <Card
          fullWidth
          sx={{
            backgroundColor: "white",

            height: "800px",
            left: "0px",
            top: "0px",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{ color: "#14B363", bgcolor: "white" }}
                aria-label="settings"
              >
                <CakeIcon />
              </Avatar>
            }
            title="Mitch's Birthday"
            subheader={
              <span>
                Thursday, 12 March • All day. <br />
                Repeats every year
              </span>
            }
          />
          <CardContent>
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
                // error={err}
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
              sx={{
                margin: "18rem 0rem",
                cursor: "pointer",
                display: "flex",
                flex: "1",
                flexDirection: "row",
                flexBasis: "100%",
                justifyContent: "space-between",
              }}
              //  className={classes.buttonWrapper}
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
                {/* {isLoading ? "Loading..." : "Create"} */}Update
              </Button>
              <Button
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
                {/* {isLoading ? "Loading..." : "Create"} */}Cancel
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
