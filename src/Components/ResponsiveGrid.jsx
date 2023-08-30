import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, width: 500 }}>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={9} sm={4} md={6} key={index} sx={{ width: 100 }}>
            <Button sx={{ width: 100 }} variant="contained" color="primary">
              My Button
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
