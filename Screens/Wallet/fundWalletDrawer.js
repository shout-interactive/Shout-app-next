import React, { useState, Fragment } from "react";
import {
  Box,
  SwipeableDrawer,
  Stack,
  Typography,
  InputAdornment,
  TextField,
  Input,
  Button,
  Container,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { BsChevronLeft } from "react-icons/bs";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import AdjustSharpIcon from "@mui/icons-material/AdjustSharp";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ButtonComponent from "../../Component/Button";
import { useStyles } from "./style";
import { Header } from "../../Component/Header";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { partyCreated } from "../../store/actions/track-state";

const FundWalletDrawer = ({ show, toggleDrawer }) => {
  const classes = useStyles();
  const route = useRouter();
  const dispatch = useDispatch();
  // const [selectedArr, setSelectedArray] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [showWarningModel, setShowWarningModel] = useState(false);
  const [showAddCardModel, setShowAddCardModel] = useState(false);
  const [showSuccessModel, setShowSuccessModel] = useState(false);
  const [fundWallet, setFundWallet] = useState(false);
  const [fundAmount, setFundAmount] = useState("");
  const [err, setErr] = useState(false);
  const { partyCreate } = useSelector((s) => s.trackState);
  const handleSelect = (index) => {
    setSelectedIndex(index);
    console.log(index);
    if (index === 3) {
      console.log("This is the payment method");
      setShowAddCardModel(true);
    }
  };

  const handleGoBack = () => {
    toggleDrawer(false);
  };

  const handleToggleErrorModal = (open) => {
    setShowWarningModel(open);
  };
  const handleToggleSuccessModal = (open) => {
    setShowSuccessModel(open);
  };
  const handleToggleAddCardModal = (open) => {
    setShowAddCardModel(open);
  };
  const handleFundWalletSuccess = (open) => {
    if (!fundAmount) {
      setErr(true);
    } else {
      setFundWallet(open);
    }
  };
  const handleAddCardStatus = (success) => {
    if (success === 200) {
      setShowWarningModel(false);
      setShowSuccessModel(true);
      setShowAddCardModel(false);
    } else if (success === 403) {
      setShowWarningModel(true);
      setShowSuccessModel(false);
      setShowAddCardModel(false);
    }
  };

  const handleAddFundSuccess = () => {
    if (partyCreate) {
      route.push("/create");
      setFundWallet(false);
      dispatch(partyCreated());
    } else {
      setFundWallet(false);
    }
  };

  const paymentMethodData = [
    {
      key: 1,
      name: "**** **** **** **87",
      leftIcon: <CreditCardTwoToneIcon />,
      rightIcon: <FiberManualRecordOutlinedIcon />,
      rightSelectedIcon: <AdjustSharpIcon sx={{ color: "#121163" }} />,
    },
    {
      key: 2,
      name: "**** **** **** **87",
      leftIcon: <CreditCardTwoToneIcon />,
      rightIcon: <FiberManualRecordOutlinedIcon />,
      rightSelectedIcon: <AdjustSharpIcon sx={{ color: "#121163" }} />,
    },
    {
      key: 3,
      name: "Add new card",
      leftIcon: <AddOutlinedIcon />,
      rightIcon: <ChevronRightOutlinedIcon />,
      rightSelectedIcon: <ChevronRightOutlinedIcon />,
    },
  ];

  const _renderitems = (data) => (
    <Container
      sx={{
        cursor: "pointer",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        padding: "1rem 0rem",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onClick={() => handleSelect(data.key)}
    >
      <Box sx={{ width: "5%" }}>{data.leftIcon}</Box>
      <Typography
        sx={{
          width: "90%",
          marginLeft: ".5rem",
          fontWeight: "400",
          fontSize: "1.3rem",
          color: "#121163",
        }}
      >
        {data.name}
      </Typography>
      <Box sx={{ width: "5%" }}>
        {selectedIndex === data.key ? data.rightSelectedIcon : data.rightIcon}
      </Box>
    </Container>
  );

  const list = () => (
    <Container maxWidth="sm" sx={{}} role="presentation">
      <Header
        type="nav"
        title="Fund Shout! wallet"
        leftLink="/wallet"
        leftIcon={<BsChevronLeft onClick={() => handleGoBack()} />}
        primary
      />
      <Box sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
        <Typography sx={{ marginBottom: ".7rem", fontWeight: "bold", fontSize: "1rem" }}>
          Amount
        </Typography>
        <TextField
          error={err}
          id="outlined-select-currency"
          fullWidth
          placeholder="Enter amount"
          value={fundAmount}
          type="number"
          onChange={(e) => setFundAmount(e.target.value)}
          sx={{
            "& .css-nnbavb": { float: "left" },
            "& .MuiOutlinedInput-root": { borderRadius: "10px" },
          }}
        />
      </Box>
      <Box sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
        <Typography sx={{ marginBottom: ".7rem", fontWeight: "bold", fontSize: "1rem" }}>
          Payment methods
        </Typography>
        {paymentMethodData.map((method, index) => (
          <Fragment key={index}>
            {_renderitems(method)}
            <Divider />
          </Fragment>
        ))}
      </Box>
      <Box
        onClick={() => handleFundWalletSuccess(true)}
        sx={{ margin: "8rem 0rem 2rem 0rem", cursor: "pointer" }}
        className={classes.buttonWrapper}
      >
        <Button
          sx={{
            backgroundColor: "#818FA3",
            color: "white",
            textTransform: "capitalize",
            fontWeight: "bold",
            padding: ".8rem 0rem",
            borderRadius: "10px",
          }}
          variant="contained"
          fullWidth
        >
          Fund Wallet
        </Button>
      </Box>
    </Container>
  );

  const ToggleWarningModal = () => {
    return (
      <div>
        <SwipeableDrawer
          sx={{
            "& 	.MuiDrawer-paper": {
              maxHeight: "50%",
              height: "60%",
              width: "sm",
              maxWidth: "sm",
              margin: "0 auto",
              borderRadius: "20px",
            },
          }}
          modal={classes.bottomDrawerContainer}
          anchor={"bottom"}
          open={showWarningModel}
          onClose={() => setShowWarningModel(false)}
          onOpen={() => setShowWarningModel(true)}
        >
          <Container
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CloseIcon
              onClick={() => handleToggleErrorModal(false)}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                cursor: "pointer",
              }}
            />
            <Stack sx={{ margin: "0 auto" }} space={3}>
              <ReportGmailerrorredIcon
                sx={{
                  color: "red",
                  fontSize: "5rem",
                  textAlign: "center",
                  width: "100%",
                }}
              />

              <Typography
                sx={{
                  color: "#818FA3",
                  fontSize: "1.3rem",
                  textAlign: "center",
                }}
              >
                Failed to add Card. Please try a different payment method
              </Typography>

              <Box
                onClick={() => handleToggleErrorModal(false)}
                sx={{ margin: "2rem 0rem 0rem 0rem", cursor: "pointer" }}
                className={classes.buttonWrapper}
              >
                <Button
                  sx={{
                    backgroundColor: "#121163",
                    color: "white",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    padding: ".8rem 0rem",
                    borderRadius: "10px",
                  }}
                  variant="contained"
                  fullWidth
                >
                  Go back
                </Button>
              </Box>
            </Stack>
          </Container>
        </SwipeableDrawer>
      </div>
    );
  };
  const ToggleSuccessModal = () => {
    return (
      <div>
        <SwipeableDrawer
          sx={{
            "& 	.MuiDrawer-paper": {
              maxHeight: "50%",
              height: "60%",
              width: "sm",
              maxWidth: "sm",
              margin: "0 auto",
              borderRadius: "20px",
            },
          }}
          modal={classes.bottomDrawerContainer}
          anchor={"bottom"}
          open={showSuccessModel}
          onClose={() => setShowSuccessModel(false)}
          onOpen={() => setShowSuccessModel(true)}
        >
          <Container
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CloseIcon
              onClick={() => handleToggleSuccessModal(false)}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                cursor: "pointer",
              }}
            />
            <Stack sx={{ margin: "0 auto" }} space={3}>
              <CheckCircleOutlineRoundedIcon
                sx={{
                  color: "green",
                  fontSize: "5rem",
                  textAlign: "center",
                  width: "100%",
                }}
              />

              <Typography
                sx={{
                  color: "#818FA3",
                  fontSize: "1.3rem",
                  textAlign: "center",
                }}
              >
                Payment Method added!
              </Typography>

              <Box
                onClick={() => handleToggleSuccessModal(false)}
                sx={{ margin: "2rem 0rem 0rem 0rem", cursor: "pointer" }}
                className={classes.buttonWrapper}
              >
                <ButtonComponent title="Okay" button="#121163" width="100%" />
              </Box>
            </Stack>
          </Container>
        </SwipeableDrawer>
      </div>
    );
  };
  const ToggleFundWalletSuccessModal = () => {
    return (
      <div>
        <SwipeableDrawer
          sx={{
            "& 	.MuiDrawer-paper": {
              maxHeight: "50%",
              height: "60%",
              width: "sm",
              maxWidth: "sm",
              margin: "0 auto",
              //   borderRadius: "20px",
            },
          }}
          modal={classes.bottomDrawerContainer}
          anchor={"bottom"}
          open={fundWallet}
          onClose={() => setFundWallet(false)}
          onOpen={() => setFundWallet(true)}
        >
          <Container
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CloseIcon
              onClick={() => setFundWallet(false)}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                cursor: "pointer",
              }}
            />
            <Stack sx={{ margin: "0 auto" }} space={3}>
              <CheckCircleOutlineRoundedIcon
                sx={{
                  color: "green",
                  fontSize: "5rem",
                  textAlign: "center",
                  width: "100%",
                }}
              />

              <Typography
                sx={{
                  color: "#818FA3",
                  fontSize: "1.3rem",
                  textAlign: "center",
                }}
              >
                Wallet Funded
              </Typography>

              <Box
                onClick={handleAddFundSuccess}
                sx={{ margin: "2rem 0rem 0rem 0rem", cursor: "pointer" }}
                className={classes.buttonWrapper}
              >
                <ButtonComponent title="Okay" button="#121163" width="100%" />
              </Box>
            </Stack>
          </Container>
        </SwipeableDrawer>
      </div>
    );
  };
  const ToggleAddCardModal = () => {
    return (
      <div>
        <SwipeableDrawer
          sx={{
            "& 	.MuiDrawer-paper": {
              maxHeight: "80%",
              height: "80%",
              width: "100%",
              maxWidth: "100%",
              margin: "0 auto",
            },
          }}
          modal={classes.bottomDrawerContainer}
          anchor={"bottom"}
          open={showAddCardModel}
          onClose={() => setShowAddCardModel(false)}
          onOpen={() => setShowAddCardModel(true)}
        >
          <>
            <Header
              type="nav"
              title="Add card"
              leftLink="/wallet"
              leftIcon={<BsChevronLeft onClick={() => handleToggleAddCardModal(false)} />}
              primary
            />
            <Container
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "100%",
              }}
            >
              <Box sx={{ width: "100%", margin: "1.5rem auto 1rem auto" }}>
                <Typography
                  sx={{
                    marginBottom: ".7rem",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  Card number
                </Typography>
                <TextField
                  error={err}
                  id="outlined-select-currency"
                  fullWidth
                  placeholder=""
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardTwoToneIcon />
                      </InputAdornment>
                    ),
                  }}
                  // value={partyuser}
                  // onChange={}
                  sx={{
                    "& .css-nnbavb": { float: "left" },
                    "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                  }}
                />
              </Box>
              <Stack direction="row" sx={{ width: "100%" }} space={2}>
                <Box sx={{ width: "100%", margin: "1.5rem 1rem 1rem auto" }}>
                  <Typography
                    sx={{
                      marginBottom: ".7rem",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Exp. date
                  </Typography>
                  <div className={classes.monthWrapper}>
                    <input
                      type="text"
                      name="month"
                      placeholder="MM"
                      maxlength="2"
                      size="2"
                      className={classes.expInput}
                    />
                    <span style={{ paddingRight: "5px" }}>/</span>
                    <input
                      type="text"
                      name="year"
                      placeholder="YY"
                      maxlength="5"
                      size="2"
                      className={classes.expInput}
                    />
                  </div>
                </Box>
                <Box sx={{ width: "100%", margin: "1.5rem auto 1rem 1rem" }}>
                  <Typography
                    sx={{
                      marginBottom: ".7rem",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Cvv
                  </Typography>
                  <input type="text" className={classes.cvvInput} placeholder="123" maxlength={3} />
                </Box>
              </Stack>
              <Box
                onClick={() => {
                  handleAddCardStatus(200);
                }}
                sx={{
                  margin: "4rem 0rem 0rem 0rem",
                  width: "100%",
                  cursor: "pointer",
                }}
                className={classes.buttonWrapper}
              >
                <Button
                  sx={{
                    backgroundColor: "#818FA3",
                    color: "white",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    padding: ".8rem 0rem",
                    borderRadius: "10px",
                  }}
                  variant="contained"
                  fullWidth
                >
                  Save
                </Button>
              </Box>
            </Container>
          </>
        </SwipeableDrawer>
      </div>
    );
  };

  return (
    <div className={classes.bottomDrawerContainer}>
      <SwipeableDrawer
        sx={{ "& 	.MuiDrawer-paper": { maxHeight: "80%", height: "80%" } }}
        modal={classes.bottomDrawerContainer}
        anchor={"bottom"}
        open={show}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
      <ToggleFundWalletSuccessModal />
      <ToggleSuccessModal />
      <ToggleWarningModal />
      <ToggleAddCardModal />
    </div>
  );
};

export default FundWalletDrawer;
