import React from "react";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function SwitchComponent() {
  const [state, setState] = useState(false);
  const handleChange = (e) => {
    setState(e.target.checked);
  };
  return (
    <>
      <FormControlLabel
        label={state ? "On" : "Off"}
        control={<Switch checked={state} onChange={handleChange} />}
      ></FormControlLabel>
    </>
  );
}
