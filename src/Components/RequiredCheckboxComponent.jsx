import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function RequiredCheckboxComponent() {
  const getValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel
        required
        value="1"
        control={<Checkbox />}
        label="Required"
        onChange={(e) => getValue(e)}
      />
      <FormControlLabel
        disabled
        value="2"
        control={<Checkbox />}
        label="Disabled"
      />
    </FormGroup>
  );
}
