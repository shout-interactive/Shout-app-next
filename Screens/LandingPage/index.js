import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { verifyTokenRequest } from "../../store/actions/get-token";

// export const getStaticProps = async () => {

//   const userData = await dispatch(verifyTokenRequest(token));
//   console.log(userData);
//   return {
//     props: {
//       user: userData,
//       token,
//     },
//   };
// };
const LandingPage = () => {
  const token =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNzJlMDJjY2YtOTVkOC00N2MwLTlkYjgtNDJmYzQ2Yzg4ZjY4IiwiZmlyc3RuYW1lIjoiQW5uIiwibGFzdG5hbWUiOiJXdW5taSIsIm1pZGRsZW5hbWUiOm51bGwsInByb25vdW5jZSI6bnVsbCwiZW1haWwiOiJhbm53dW5taUBkZXYuY29tIiwicGhvbmUiOm51bGwsInJvbGUiOlsidXNlciJdLCJwZXJtaXNzaW9ucyI6WyJ1c2VyIl0sImNvbnRhY3RzIjpudWxsLCJpc09uYm9hcmRlZCI6ZmFsc2UsImNyZWF0ZWRBdCI6IjIwMjItMDMtMTlUMDY6MTE6MjEuODg4WiIsInVwZGF0ZWRBdCI6IjIwMjItMDMtMTlUMDY6MTE6MjEuODg4WiIsIkNvbnRhY3QiOm51bGx9LCJpYXQiOjE2NDc2NzAyOTMsImV4cCI6MTY3OTIwNjI5M30.dmQiOlPT4Z34iJCwzTorRzPN_Wu5qwmb_kSekJEUOdqCdDrgo83ljdRFRTlbt5BTKy7tMp86V7dA8wVb_q4QQw";

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(async () => {
    const userData = await dispatch(verifyTokenRequest(token));
    // console.log(userData);
    if (typeof window !== "undefined") {
      // Perform localStorage action
      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        sessionStorage.setItem("token", userData.token);
        localStorage.setItem("coin", userData.coin);
        localStorage.setItem("userId", userData.user.id);
        setTimeout(() => router.push(`/home/${token}`), 1000);
      } else {
        router.push("/noconnection");
      }
    }
  });

  return <></>;
};

export default LandingPage;
