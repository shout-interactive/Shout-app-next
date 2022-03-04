import { useEffect, useState } from "react";
import { Container, Button, Typography, Grow } from "@mui/material";
import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./style";

// import { verifyTokenRequest } from "../../store/actions/get-token";

const LandingPage = () => {
  // const dispatch = useDispatch();
  const classes = useStyles();
  // const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);
  // const { isLoading, error, isSuccessful, token, user, message } = useSelector(
  //   (s) => s.verifyToken
  // );

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
            <img className={classes.root} src={"/favicon.png"} alt="Shout logo" />
          </Button>
        </Link>
      </Grow>
      <Typography sx={{ color: "#14B363" }}>Click image above to enter</Typography>
    </Container>
  );
};

export default LandingPage;