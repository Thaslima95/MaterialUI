import React from "react";
import { ButtonGroup } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { Grid } from "@mui/material";

export default function ButtonGroupComponent() {
  const [value, setValue] = useState(0);
  const handleAdd = () => {
    setValue(value + 1);
  };
  const handleDec = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <Stack>
      <ButtonGroup variant="outlined">
        <Button onClick={handleAdd}>+</Button>
        <TextField value={value}>{value}</TextField>
        <Button onClick={handleDec}>-</Button>
      </ButtonGroup>
    </Stack>
  );
}
