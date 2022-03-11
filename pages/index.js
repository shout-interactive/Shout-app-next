import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import LandingPage from "../Screens/LandingPage";
import CircularProgress from "@mui/material/CircularProgress";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  });
  return (
    <div style={{ display: "flex", "justify-content": "center" }}>
      {" "}
      <CircularProgress color="inherit" />
    </div>
  );
}
