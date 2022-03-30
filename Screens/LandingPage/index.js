import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { verifyTokenRequest } from "../../store/actions/get-token";
import { checkCoin } from "../../store/actions/check-coin";

const LandingPage = () => {
  const token =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzE4MTM2ZGEtMzkzNC00MjI3LTk3YTEtNzkzNDFjOGQ1NGE1IiwiZmlyc3RuYW1lIjoiQ2h1a3MiLCJsYXN0bmFtZSI6Ik9naGViZSIsIm1pZGRsZW5hbWUiOm51bGwsInByb25vdW5jZSI6bnVsbCwiZW1haWwiOiJjaHVrc29nZW5lQGdtYWlsLmNvbSIsInBob25lIjpudWxsLCJyb2xlIjpbInVzZXIiXSwicGVybWlzc2lvbnMiOlsidXNlciJdLCJjb250YWN0cyI6bnVsbCwiaXNPbmJvYXJkZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDIyLTAzLTMwVDEyOjM2OjA1LjQ3M1oiLCJ1cGRhdGVkQXQiOiIyMDIyLTAzLTMwVDEyOjM2OjA1LjQ3M1oiLCJDb250YWN0IjpudWxsfSwiaWF0IjoxNjQ4NjQzNzc0LCJleHAiOjE2ODAxNzk3NzR9.X68Ey2fdzwQmYHe5l5YE3yJhTTgWwpAvqBSozPrPKVnSvF-N5hhXi9cLYEfEnk73qrt_Rj3jaLk-6ApIQ9sgig";

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
        // dispatch(checkCoin());
        setTimeout(() => router.push(`/home/${token}`), 1000);
      } else {
        router.push("/noconnection");
      }
    }
  });

  return <></>;
};

export default LandingPage;
