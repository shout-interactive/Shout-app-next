import { Row, Col } from "react-bootstrap";
import { Header } from "../../Component/Header";
import CarouselComponent from "../../Component/Carousel";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
// import { onboardHome } from "../../store/actions/onboard-screen";
import Confetti from "react-dom-confetti";
import { Encrypt } from "../../utils/helpers";
import { checkCoin } from "../../store/actions/check-coin";
import { getCalendarRequest } from "../../store/actions/get-calendar";
const HomeScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.verifyToken.token);
  const [splash, setSplash] = useState(false);
  // State to toggle the onboarding screen
  const fetchCalendar = () => {
    const obj = {
      user: localStorage.getItem("userId"),
    };
    dispatch(getCalendarRequest(obj));
  };
  useEffect(() => {
    setTimeout(() => {
      setSplash(!splash);
    }, 1500);
    dispatch(checkCoin());
    fetchCalendar();
  }, []);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 200,
    dragFriction: 0.12,
    duration: 10000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <>
      <div className={styles.wfull}>
        <div>
          <Header type="homepage" />

          <div className={styles.wrap}>
            <div>
              <CarouselComponent />
            </div>
            <Row>
              <Col>
                {/* <Link href="/party"> */}
                <div
                  style={{ overflow: "hidden" }}
                  className={`${styles.homecard} ${styles.sparty}`}
                  onClick={() => router.push(`/party/${token}`)}
                >
                  <div className={styles.partytext}>
                    <h2>Shout! Party</h2>
                    <p>Party with your friends everyday!</p>
                  </div>
                  <div style={{ marginLeft: "336px" }}>
                    <Confetti active={splash} config={config} />
                  </div>
                  <img
                    src={"/assets/shout-bottle.png"}
                    alt=""
                    className={`${styles.shoutimage} ${splash ? styles.shake : ""} `}
                  />
                </div>
                {/* </Link> */}
              </Col>
            </Row>

            <Row xs="auto">
              <Col xs={6}>
                <div
                  style={{ overflow: "hidden" }}
                  className={`${styles.homecard} ${styles.splay}`}
                  id="shout-game"
                  onClick={() => router.push(`/party/${token}`)}
                >
                  <div className={styles.partytext}>
                    <h2 className={styles.title}>Shout Play</h2>
                    <p>Play games and win big</p>
                  </div>
                  <img src="/assets/shout-games.png" className={`${styles.playimg}`} alt="" />
                </div>
              </Col>

              <Col xs={6}>
                <div
                  style={{ overflow: "hidden" }}
                  className={`${styles.homecard} ${styles.sauction}`}
                  id="aunction"
                  onClick={() => router.push(`/party/${token}`)}
                >
                  <div>
                    <h2 className={styles.title}>
                      Celebrity <br /> Auction
                    </h2>
                    <p style={{ zIndex: "20", position: "relative" }}>
                      Win big prizes from your fave celebs
                    </p>
                  </div>
                  <img src="/assets/shout-award.png" className={styles.auctionImg} alt="" />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className={styles.ads}>AD</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
