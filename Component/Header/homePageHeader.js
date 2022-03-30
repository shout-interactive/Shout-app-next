import { Container, Navbar, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { useStyles } from "./style";

const HomePageHeader = () => {
  const { user, token } = useSelector((s) => s.verifyToken);
  const { data } = useSelector((s) => s.checkCoinReducer);
  console.log(data.coins);

  // const classes = useStyles();
  const router = useRouter();
  const handleNavigateToLeaderBoard = () => {
    router.push("/leaderboard");
  };
  const handleNavigateToWallet = () => {
    router.push(`/wallet/${token}`);
  };

  function intToString(value) {
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = parseFloat(
      (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
    );
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
  }
  return (
    <Navbar className="">
      <Container className={styles.navHeaderWrapper} style={{ margin: "0 20px" }}>
        <Navbar.Brand>
          {/* <img src={"/assest/images/shoutLogo.svg"} alt="shout" /> */}
          <h1 className={styles.title}> Hi, {user?.firstname || null} </h1>
        </Navbar.Brand>
        <Nav>
          <Nav onClick={handleNavigateToWallet}>
            <div className={styles["badge-header"]}>
              <img src={"/assets/coin.png"} alt="Coin" />
              {intToString(data?.coins) || 0}
            </div>
          </Nav>

          <Nav onClick={handleNavigateToLeaderBoard}>
            <div className={styles["badge-header"]}>
              <img src={"/assets/cup.svg"} alt="Leaderboard" />
            </div>
          </Nav>

          {/* <Nav
            onClick={handleNavigateToLeaderBoard}
            style={{ paddingRight: 0 }}
          >
            <div className={styles["badge-header"]}>
              <img src={"/assets/gift-box.svg"} alt="Gift box" />
            </div>
          </Nav> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HomePageHeader;
