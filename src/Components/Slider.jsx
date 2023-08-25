import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function SliderComponent() {
  return (
    <Box sx={{ width: 300, mt: 5 }}>
      Slider
      <Slider
        size="small"
        defaultValue={30}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={20} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
}
