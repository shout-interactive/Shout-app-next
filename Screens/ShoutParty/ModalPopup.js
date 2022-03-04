import { Container, Box, Typography, Button } from "@mui/material";
import ModalComponent from "../../Component/Modals";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ClearRoundedIcon from "@mui/icons-material/Clear";
import { useStyles } from "./style";

const ModalPopup = ({ show, toggleModal }) => {
  const classes = useStyles();

  const handleEnterParty = () => {
    // if (userCoin >= 200) {
    //   navigate("/live/celebrant");
    // } else {
    //   handleToggleModal(false);
    // //   handleMoreCoinModal(true);
    // }
    navigate("/live/celebrant");
  };
  return (
    <Container>
      <ModalComponent show={show} toggleModal={() => toggleModal(false)}>
        <Container className={classes.containerDetails}>
          <Box className={classes.modalBoxx}>
            <WarningAmberRoundedIcon className={classes.icon} />

            <Typography
              sx={{
                padding: "0 40px",
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              You will be charged 2000 coins to join this party
            </Typography>
            <ClearRoundedIcon className={classes.btnRemove} onClick={() => toggleModal(false)} />
            <Box
              // onClick={handleGetCoin}
              sx={{
                margin: "2rem auto",
                cursor: "pointer",
                width: "100%",
                display: "flex",
              }}
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Button
                onClick={() => toggleModal(false)}
                variant="outlined"
                style={{
                  borderColor: "#162767",
                  width: "200px",
                  margin: "0 10px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleEnterParty}
                variant="contained"
                style={{
                  backgroundColor: "#162767",
                  width: "200px",
                  margin: "0 10px",
                }}
              >
                Okay
              </Button>
            </Box>
          </Box>
        </Container>
      </ModalComponent>
    </Container>
  );
};
export default ModalPopup;
