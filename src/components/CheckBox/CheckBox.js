import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as Style from "./style";

const CheckBox = ({ isChecked, onChange, label, value }) => {
  const handleChange = (e) => {
    onChange && onChange(value);
  };

  return (
    <Style.CheckBox>
      <FormControlLabel
        control={
          <Checkbox
            name={label}
            checked={isChecked}
            onChange={(e) => handleChange(e)}
            color="primary"
          />
        }
        label={label}
      />
    </Style.CheckBox>
  );
};

export default CheckBox;
