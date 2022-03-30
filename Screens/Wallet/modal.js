import React from "react";
import { useEffect } from "react";
import ModalComponent from "../../Component/Modals";
import { Container, Box, Typography, Button } from "@mui/material";
import styles from "./style.module.css";
import ClearRoundedIcon from "@mui/icons-material/Clear";
import { BuyCoin } from "../../store/actions/buy-coin";
import { useDispatch } from "react-redux";
const BuyCoinModal = ({ show, toggleModal, amount }) => {
  const dispatch = useDispatch();
  const topupBalance = () => {
    dispatch(BuyCoin(amount));
    toggleModal(false);
  };

  useEffect(() => {
    console.log("rerender");
  }, [amount]);

  return (
    <Container>
      <ModalComponent show={show} toggleModal={toggleModal}>
        <Container className={styles.containerDetail}>
          <Box className={styles.modalBox}>
            <img src={"/assest/images/coinImg.png"} alt="" className={styles.icon} />
            <Typography sx={{ padding: "0 40px", textAlign: "center", marginBottom: "40px" }}>
              Proceed to buy {amount} coins
            </Typography>
            <ClearRoundedIcon className={styles.btnRemove} onClick={() => toggleModal(false)} />
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
                  height: "40px",
                  borderRadius: "10px",
                  color: "#162767",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={topupBalance}
                variant="contained"
                style={{
                  backgroundColor: "#162767",
                  width: "200px",
                  margin: "0 10px",
                  height: "40px",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              >
                Buy Coin
              </Button>
            </Box>
          </Box>
        </Container>
      </ModalComponent>
    </Container>
  );
};
export default BuyCoinModal;
