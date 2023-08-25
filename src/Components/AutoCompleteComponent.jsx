import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import { useState } from "react";

export default function AutoCompleteComponent() {
  const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT"];
  const [value, setvalue] = useState("");
  console.log({ value });
  return (
    <>
      Auto Complete Component
      <Box m={10}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={skills}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={value}
          onChange={(e, newvalue) => setvalue(newvalue)}
          freeSolo
        />
      </Box>
    </>
  );
}
