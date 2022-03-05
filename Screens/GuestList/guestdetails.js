import React from "react";
import { Box, SwipeableDrawer, Stack, Container, Typography, Button, Avatar } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./style.module.css";
const GuestDetails = ({ show, toggleDrawer }) => {
  // const classes = useStyles();

  const handleClose = () => {
    toggleDrawer(false);
  };

  const list = () => (
    <Container sx={{ width: "auto" }} role="presentation">
      <Box className={styles.bottomDrawerWrapper}>
        <Stack direction="horizontal" gap={3} className={styles.bottomDrawerHeader}>
          <div />
          <DragHandleIcon />
          <CloseIcon onClick={() => toggleDrawer(false)} sx={{ cursor: "pointer" }} />
        </Stack>
      </Box>
      <Box>
        <Avatar variant="rounded" alt="Trevor Henderson" src="/static/images/avatar/1.jpg" />
      </Box>
      <Box sx={{ width: "90%", padding: "1rem 0rem" }}>
        <Typography sx={{ color: "#0A1F44", fontWeight: "bold" }}>Anbody Cole</Typography>
        <Typography variant="p" sx={{ color: "#818FA3", fontSize: ".8rem" }}>
          @anybody
        </Typography>
      </Box>
      <Box>
        <Typography>
          I love football and food, I'm a product manager and I love to have fun and party
        </Typography>
      </Box>
      <Box
        onClick={() => handleClose()}
        sx={{ marginTop: "1.5rem", marginBottom: "1.5rem", backgroundColor: "transparent" }}
      >
        <Button
          sx={{
            borderColor: "#90979E",
            color: "#90979E",
            textTransform: "capitalize",
            padding: ".8rem 0rem",
            borderRadius: "10px",
          }}
          variant="outlined"
          fullWidth
        >
          Close
        </Button>
      </Box>
    </Container>
  );

  return (
    <div className={styles.bottomDrawerContainer}>
      <SwipeableDrawer
        sx={{
          "& 	.MuiDrawer-paper": {
            maxHeight: "70%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          },
        }}
        modal={styles.bottomDrawerContainer}
        anchor={"bottom"}
        open={show}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default GuestDetails;
