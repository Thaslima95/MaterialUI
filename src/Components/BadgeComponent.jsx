import React from "react";
import Badge from "@mui/material-next/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/material";

export default function BadgeComponent() {
  return (
    <div>
      <Box mt={5}>
        <Badge badgeContent={4} color="success" invisible={false} size="large">
          <ShoppingCartIcon />
        </Badge>
      </Box>
    </div>
  );
}
