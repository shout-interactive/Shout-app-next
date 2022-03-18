import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { verifyTokenRequest } from "../../store/actions/get-token";

const AuthWrapper = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated =
    useSelector((state) => state.verifyToken.isSuccessful) ||
    sessionStorage.getItem("token");

  useEffect(() => {
    const { token } = router.query;
    console.log(token);
    if (token) dispatch(verifyTokenRequest(token));

    if (isAuthenticated) return true;
    router.push("/login");
  }, [router.isReady]);
  return <>{isAuthenticated && router.isReady && children}</>;
};

export default AuthWrapper;
