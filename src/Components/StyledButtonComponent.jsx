import React from "react";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)({
  backgroundColor: "Red",
  color: "White",
  "&:hover": {
    backgroundColor: "White",
    color: "red",
  },
});

export default function StyledButtonComponent() {
  return (
    <>
      <StyledButton>MyButton</StyledButton>
      <Button variant="contained" color="primary"></Button>
    </>
  );
}
