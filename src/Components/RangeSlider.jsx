import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `$${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = useState([2000, 3200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      Price Range
      <Box sx={{ width: 300, mt: 5 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          step={200}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={1000}
          max={5000}
        />
      </Box>
    </div>
  );
}
