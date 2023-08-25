import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Delete } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export default function FloatingActionComponent() {
  return (
    <Stack spacing={4} m={6} direction="row">
      <Tooltip title="Add">
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Delete">
        <Fab color="warning">
          <Delete />
        </Fab>
      </Tooltip>
      <Tooltip title="Edit">
        <Fab color="success">
          <EditIcon />
        </Fab>
      </Tooltip>
      <Fab size="small" color="primary">
        <AddIcon />
      </Fab>
      <Fab size="small" color="warning">
        <Delete />
      </Fab>
      <Fab size="small" color="success">
        <EditIcon />
      </Fab>
    </Stack>
  );
}
