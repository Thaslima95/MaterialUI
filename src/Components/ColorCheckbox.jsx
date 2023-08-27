import * as React from "react";
import { pink } from "@mui/material/colors";
import { brown } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { blueGrey } from "@mui/material/colors";

export default function ColorCheckbox() {
  return (
    <div>
      <Checkbox
        sx={{ color: brown[300], "&.Mui-checked": { color: blueGrey[900] } }}
      />
      <Checkbox color="secondary" />
      <Checkbox defaultChecked color="success" />
      <Checkbox defaultChecked color="default" />
      <Checkbox
        defaultChecked
        sx={{
          color: pink[200],
          "&.Mui-checked": {
            color: pink[900],
          },
        }}
      />
    </div>
  );
}
