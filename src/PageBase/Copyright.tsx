import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      position={"fixed"}
      bottom="5px"
      align="center"
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="https://ivbeck.de/">
        Iven Beck
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
