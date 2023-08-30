import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "right",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  color: theme.palette.text.secondary,
  height: 100,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });

export default function PaperComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <ThemeProvider theme={darkTheme}>
            <Item key={3} elevation={3}>
              {`elevation=3`}
            </Item>
          </ThemeProvider>
        </Box>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <ThemeProvider theme={darkTheme}>
            <Item key={3} elevation={3}>
              {`elevation=3`}
            </Item>
          </ThemeProvider>
        </Box>
      </Grid>
    </Grid>
  );
}
