import { useEffect, useState } from "react";
import { Container, Button, Typography, Grow } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./style";

import { verifyTokenRequest } from "../../store/actions/get-token";

export const getStaticProps = async () => {
  const userData = await dispatch(verifyTokenRequest());
  return {
    props: {
      user: userData,
    },
  };
};
const LandingPage = ({ user }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const route
  const [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    const userData = await dispatch(verifyTokenRequest());
    if (typeof window !== 'undefined') {
  // Perform localStorage action
  localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userData.token);
    localStorage.setItem("coin", userData.coin);
    localStorage.setItem("userId", userData.user.id);
}
   
  });

  return (
    <Container
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Grow in={loaded}>
        <Link href="/home">
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              height: "30%",
              cursor: "pointer",
              marginBottom: "1rem",
            }}
          >
            <img className={classes.root} src={"/assest/images/shoutLogo.svg"} alt="Shout logo" />
          </Button>
        </Link>
      </Grow>
      <Typography sx={{ color: "#14B363" }}>Click image above to enter</Typography>
    </Container>
  );
};

export default LandingPage;
