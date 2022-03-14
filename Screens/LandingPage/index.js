import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  // const route
  const [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    const userData = await dispatch(verifyTokenRequest());
    // console.log(userData);
    if (typeof window !== "undefined") {
      // Perform localStorage action
      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        sessionStorage.setItem("token", userData.token);
        localStorage.setItem("coin", userData.coin);
        localStorage.setItem("userId", userData.user.id);
        setTimeout(() => router.push("/home"), 1000);
      } else {
        router.push("/noconnection");
      }
    }
  });

  return <></>;
};

export default LandingPage;
