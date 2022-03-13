import React from "react";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function noconnection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" gutterBottom>
        Check your network connection
      </Typography>
      <Link href="/">
        <Button size="small" variant="contained">
          Reload
        </Button>
      </Link>
    </div>
  );
}
