import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";

export default function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: green[500], width: 56, height: 56 }}
        variant="rounded"
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      ></Avatar>
    </Stack>
  );
}
