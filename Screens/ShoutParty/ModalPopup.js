import { Container, Box, Typography, Button } from "@mui/material";
import ModalComponent from "../../Component/Modals";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ClearRoundedIcon from "@mui/icons-material/Clear";
import { useStyles } from "./style";
import { useRouter } from "next/router";
const ModalPopup = ({ show, toggleModal }) => {
  const classes = useStyles();
  const route = useRouter();
  const handleEnterParty = () => {
    // if (userCoin >= 200) {
    //   navigate("/live/celebrant");
    // } else {
    //   handleToggleModal(false);
    // //   handleMoreCoinModal(true);
    // }
    route.push("/live");
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
                  height: "45px",
                  borderRadius: "10px",
                  color: "#162767",
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
                  height: "45px",
                  borderRadius: "10px",
                  color: "#fff",
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
