import React from "react";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NotificationAdd } from "@mui/icons-material";
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
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <br />
      <br />
      <Button variant="contained" endIcon={<Edit />}>
        Edit
      </Button>
      <br />
      <br />
      <div>Icon button</div>
      <div>
        <IconButton color="success" aria-label="add-to-shopping-cart">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton color="primary" arial-label="NotificationAdd">
          <NotificationAdd />
        </IconButton>
      </div>
    </div>
  );
}
