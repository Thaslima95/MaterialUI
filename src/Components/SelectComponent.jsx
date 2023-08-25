import React from "react";
import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";

export default function SelectComponent() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 200, minHeight: 20 }}>
        <InputLabel id="demo-simple-select-label">Food Preference</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Food Preference"
          value={value}
          className="food-preference"
          onChange={(e) => setValue(e.target.value)}
        >
          <MenuItem value={"Veg"}>Veg</MenuItem>
          <MenuItem value={"Nonveg"}>Non-Veg</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
