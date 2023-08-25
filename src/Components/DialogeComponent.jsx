import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function DialogeComponent() {
  const [open, setOpen] = React.useState(false);
  const [log, setLog] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(!open);
    setLog(!log);
  };
  const handleNoClose = () => {
    setOpen(!open);
    setLog(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {log ? "Log In" : "Log Out"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Shop Cart"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNoClose}>No</Button>
          <Button onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
