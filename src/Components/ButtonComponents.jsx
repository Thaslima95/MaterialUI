import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function ButtonComponents() {
  return (
    <div>
      ButtonComponents <br />
      <Button variant="contained">Button Contained</Button>
      <br />
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
      <br />
      <br />
      <br />
      Buttons with icons and label
      <br />
      <Button></Button>
    </div>
  );
}
