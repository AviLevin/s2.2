import React from "react";
import { Typography } from "@material-ui/core";
import * as Style from "./style";

const Text = ({ size = "14px", children, bold }) => {
  return (
    <Typography>
      <Style.Text size={size} bold={bold}>
        {children}
      </Style.Text>
    </Typography>
  );
};

export default Text;
