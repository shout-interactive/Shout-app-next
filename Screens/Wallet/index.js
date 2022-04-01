import { useState, Fragment } from "react";
import Dynamic from "next/dynamic";
import { BsChevronLeft } from "react-icons/bs";
import {
  Container,
  // Button,
  Box,
  Card,
  Typography,
  Divider,
} from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/Clear";
import { useRouter } from "next/router";
import { Header } from "../../Component/Header";
const WalletPaymentDrawer = Dynamic(() => import("./walletPaymentDrawer"));
const FundWalletDrawer = Dynamic(() => import("./fundWalletDrawer"));
import { useStyles } from "./style";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import BuyCoinModal from "./modal";

// import BuyCoinModal from "./modal"

const coinBundles = [
  {
    name: "2,000 Coins",
    value: "N400",
    img: "/assets/coin.png",
    amount: 2000,
  },
  {
    name: "5,500 Coins",
    value: "N2,000",
    img: "/assets/coin2.png",
    amount: 3500,
  },
  {
    name: "12,000 Coins",
    value: "N3,000",
    img: "/assets/coin3.png",
    amount: 12000,
  },
  {
    name: "20,000 Coins",
    value: "N10,000",
    img: "/assets/coin4.png",
    amount: 20000,
  },
  {
    name: "27,000 Coins",
    value: "N20,000",
    img: "/assets/coin5.png",
    amount: 27000,
  },
];

const Wallet = () => {
  // const userCoin = localStorage.getItem("coin");
  const route = useRouter();
  const { data } = useSelector((s) => s.checkCoinReducer);
  const [togglePaymentDrawer, setTogglePaymentDrawer] = useState(false);
  const [toggleFundWalletDrawer, setToggleFundWalletDrawer] = useState(false);
  const [buyModal, setBuyModal] = useState(false);
  const [amount, setAmount] = useState();
  console.log(amount);
  const classes = useStyles();
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  const token = useSelector((state) => state.verifyToken.token) || sessionStorage.getItem("token");

  const handleTogglePaymentDrawer = (open) => {
    setTogglePaymentDrawer(open);
  };

  const handleToggleFundWalletDrawer = (open) => {
    setToggleFundWalletDrawer(open);
  };

  const handleBuyModal = (open) => {
    setBuyModal(open);
  };
  const handleSetAmount = (input) => {
    setAmount(input);
  };
  const coinBundleItem = (item, i) => (
    <Container
      key={i}
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        padding: "1rem 1rem",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <img style={{ width: "3em", padding: "0 0.6em" }} src={item.img} />
      <Typography
        sx={{
          width: "80%",
          color: "#0A1F44",
          fontWeight: "bold",
          padding: "0 0.3em",
        }}
      >
        {item.name}
      </Typography>
      <Box
        onClick={() => {
          handleBuyModal(true);
          handleSetAmount(item.amount);
          console.log(item.amount);
        }}
        // onClick={() => console.log(item.amount)}
        // onClick={() => handleTogglePaymentDrawer(true)}
        sx={{
          width: "6em",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "7px",
          backgroundColor: "#FFBB38",
          color: "#0A1F44",
          cursor: "pointer",
        }}
      >
        <Typography sx={{ color: "#0A1F44", fontWeight: "bold", textAlign: "center" }}>
          {item.value}
        </Typography>
      </Box>
    </Container>
  );

  return (
    <>
      <Container className={`${styles.rootContainer} ${classes.root}`}>
        <Card
          // className={styles.card}
          sx={{
            backgroundColor: "#121163",
            borderRadius: "0",
            height: "200px",
          }}
        >
          <Header
            type="nav"
            title="Wallet"
            // leftLink={`/home/${token}`}
            leftIcon={<BsChevronLeft onClick={() => route.push(`/home/${token}`)} />}
            rightIcon={<ClearRoundedIcon onClick={() => route.push(`/home/${token}`)} />}
          />
          <Box
            sx={{
              height: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              id="balance"
              sx={{
                width: "80%",
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "36px",
              }}
            >
              <img className={styles.coin} src="/assets/coin.png" />
              {data?.coins || 0}
            </Typography>
          </Box>
        </Card>
        <Card
          id="buyCoins"
          elevation={4}
          sx={{
            marginTop: "2rem",
            marginBottom: "6rem",
            borderRadius: "25px",
            marginRight: "1.4rem",
            marginLeft: "1.4rem",
          }}
        >
          <Container sx={{ margin: "1.5rem 0rem 2rem 0rem" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#121163" }}
            >
              Buy Coins
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "#121163" }}>
              Get more coins to gift your friends and win more!
            </Typography>
          </Container>

          {coinBundles.map((item, index) => (
            <Fragment key={index}>
              {coinBundleItem(item)}
              <Divider />
            </Fragment>
          ))}
        </Card>
        <WalletPaymentDrawer
          show={togglePaymentDrawer}
          toggleDrawer={handleTogglePaymentDrawer}
          toggleFundWalletDrawer={handleToggleFundWalletDrawer}
        />
        <FundWalletDrawer
          show={toggleFundWalletDrawer}
          toggleDrawer={handleToggleFundWalletDrawer}
        />
        <BuyCoinModal show={buyModal} toggleModal={handleBuyModal} amount={amount} />
      </Container>
    </>
  );
};

export default Wallet;
