import React from "react";
import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import { FormHelperText } from "@mui/material";

export default function SelectComponent() {
  const [value, setValue] = useState("");
  console.log(value);
  const [age, setAge] = React.useState(30);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

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
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          label="Age"
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only Select Component</FormHelperText>
      </FormControl>
    </Box>
  );
}
