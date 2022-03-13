import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AuthWrapper = ({ children }) => {
  const isAuthenticated = useSelector(
    (state) => state.verifyToken.isSuccessful
  );
  const router = useRouter();

  useEffect(() => {
    console.log("lets");
    if (isAuthenticated) return null;
    router.push("/login");
  }, []);
  return <>{isAuthenticated && children}</>;
};

export default AuthWrapper;
