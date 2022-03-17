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
    "eyJpZCI6IjFmODg5MjdmLWMyYTgtNGM0Mi1hOTZjLWM3N2I0ZDdhYTcyYyIsImZpcnN0bmFtZSI6Ik9ib2RvIiwibGFzdG5hbWUiOiJCcmlnaHQiLCJtaWRkbGVuYW1lIjpudWxsLCJwcm9ub3VuY2UiOm51bGwsImVtYWlsIjoiYnJpZ2h0QGRldi5jb20iLCJwaG9uZSI6bnVsbCwicm9sZSI6WyJ1c2VyIl0sInBlcm1pc3Npb25zIjpbInVzZXIiXSwiY29udGFjdHMiOm51bGwsImlzT25ib2FyZGVkIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMi0wMy0xNFQwNTozNTo0MC4yMTVaIiwidXBkYXRlZEF0IjoiMjAyMi0wMy0xNFQwNTozNTo0MC4yMTVaIiwiQ29udGFjdCI6bnVsbH0=";

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
