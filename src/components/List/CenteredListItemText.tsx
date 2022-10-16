import { ListItemText } from "@mui/material";
import React, { FunctionComponent } from "react";

type ElementProps = { children: React.ReactNode };

export const CenteredListItemText: FunctionComponent<ElementProps> = (
  props
) => {
  return (
    <ListItemText sx={{ textAlign: "center" }}>{props.children}</ListItemText>
  );
};
