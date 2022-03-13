import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { verifyTokenRequest } from "../../store/actions/get-token";
const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.verifyToken.isSuccessful);
  const router = useRouter();

  useEffect(() => {
    dispatch(verifyTokenRequest);
    console.log("lets");
    if (isAuthenticated) return null;
    router.push("/login");
  }, []);
  return <>{isAuthenticated && children}</>;
};

export default AuthWrapper;
