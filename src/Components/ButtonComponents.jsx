import React from "react";
import { Button } from "@mui/material";
export default function ButtonComponents() {
  return (
    <div>
      ButtonComponents <br />
      <Button variant="contained">Button Contained</Button>
      Types of Contained <br />
      <Button disabled>Disabled Contained</Button> <br />
      <Button href="#">Link</Button>
      <br />
      <br />
      <br />
      <Button variant="outlined">Outlined Button</Button>
      <br />
      <br />
      <br />
      <Button variant="text">Text Button</Button>
    </div>
  );
}
