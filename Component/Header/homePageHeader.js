import { Container, Navbar, Nav } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import CoinIcon from "../../assets/coin.png";
import TrophyIcon from "../../assets/cup.svg";
import GiftIcon from "../../assets/gift-box.svg";

import styles from "./index.module.css";
// const userCoin = localStorage.getItem("coins");
// import { ReactComponent as CoinIcon } from "../../assest/images/coin.svg";
// import { ReactComponent as GiftIcon } from "../../assest/images/gift.svg";
// import { ReactComponent as TrophyIcon } from "../../assest/images/trophy.svg";

// import { useStyles } from './style'

const HomePageHeader = ({ coinId, giftId, leaderId }) => {
  // const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigateToLeaderBoard = () => {
    navigate("/leaderboard");
  };
  const handleNavigateToWallet = () => {
    navigate("/wallet");
  };
  function intToString(value) {
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = parseFloat(
      (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
        2
      )
    );
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
  }
  console.log(coinId);
  return (
    <Navbar className="">
      <Container
        className={styles["nav-header-wrapper"]}
        style={{ margin: "0 20px" }}
      >
        <Navbar.Brand>
          <img src={"/favicon.svg"} alt="shout" />
          {/* <h1 className="title"> Home </h1> */}
        </Navbar.Brand>
        <Nav>
          <Nav onClick={handleNavigateToWallet}>
            <div className={styles["badge-header"]} id={coinId}>
              <img src={CoinIcon} alt="Coin" />
              {userCoin === "undefined"
                ? intToString(2000)
                : intToString(userCoin)}
            </div>
          </Nav>

          <Nav onClick={handleNavigateToLeaderBoard}>
            <div className={styles["badge-header"]} id={leaderId}>
              <img src={TrophyIcon} alt="Leaderboard" />
            </div>
          </Nav>

          <Nav
            onClick={handleNavigateToLeaderBoard}
            style={{ paddingRight: 0 }}
          >
            <div className="badge-header" id={giftId}>
              <img src={GiftIcon} alt="Gift box" />
            </div>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HomePageHeader;
