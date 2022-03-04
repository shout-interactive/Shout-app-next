import { Row, Col } from "react-bootstrap";
import { Header } from "../../Component/Header";
import CarouselComponent from "../../Component/Carousel";
import { useState, useEffect } from "react";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
// import { onboardHome } from "../../store/actions/onboard-screen";

const HomeScreen = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { home } = useSelector((s) => s.onBoardScreen);

  // State to toggle the onboarding screen

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
                <Link href="/party">
                  <div className={`${styles.homecard} ${styles.sparty}`}>
                    <div className={styles.partytext}>
                      <h2>Shout! Party</h2>
                      <p>Party with your friends everyday!</p>
                    </div>
                    <img src={"/assets/shout-bottle.png"} alt="" className={styles.shoutimage} />
                  </div>
                </Link>
              </Col>
            </Row>

            <Row xs="auto">
              <Col xs={6}>
                <div
                  className={`${styles.homecard} ${styles.splay}`}
                  id="shout-game"
                  onClick={() => navigate("/party")}
                >
                  <div>
                    <h2 className={styles.title}>Shout Play</h2>
                    <p>Play games and win big</p>
                  </div>
                  {/* <img src="" alt="" /> */}
                </div>
              </Col>

              <Col xs={6}>
                <div
                  className={`${styles.homecard} ${styles.sauction}`}
                  id="aunction"
                  onClick={() => navigate("/party")}
                >
                  <h2 className={styles.title}>
                    Celebrity <br /> Auction
                  </h2>
                  <p>Win big prizes from your fave celebs</p>
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
