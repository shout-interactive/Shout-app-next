import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  let userToken = localStorage.getItem("token");
  const { token } = useSelector((s) => s.verifyToken);
  return token || userToken ? children : <Navigate to="/errorpage" />;
}
