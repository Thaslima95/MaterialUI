import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { BoxProps } from "@mui/material/Box";

const Item1 = styled(Paper)(({ theme }) => ({
  textAlign: "right",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  color: theme.palette.text.secondary,
  height: 100,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        borderBottom: "2px solid red",
        borderColor: "red",
        p: 1,
        borderRadius: 1,
        textAlign: "center",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function PaperComponent() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              width: "57%",
              p: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 2,
            }}
          >
            <ThemeProvider theme={darkTheme}>
              <Item1 key={3} elevation={3}>
                {`elevation=3`}
              </Item1>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
      <div style={{ width: "30%" }}>
        <Box
          sx={{
            p: 2,
            display: "grid",
            gridAutoFlow: "row",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(1, 50px)",
            gap: 1,
          }}
        >
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </Box>
        <Box
          sx={{
            display: "grid",
            p: 2,
            gridAutoFlow: "row",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(1, 50px)",
            gap: 1,
          }}
        >
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </Box>
        <Box
          sx={{
            display: "grid",
            p: 2,
            gridAutoFlow: "row",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(1, 50px)",
            gap: 1,
          }}
        >
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </Box>
        <Box
          sx={{
            display: "grid",
            p: 2,
            gridAutoFlow: "row",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(1, 50px)",
            gap: 1,
          }}
        >
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </Box>
        <Box
          sx={{
            display: "grid",
            p: 2,
            gridAutoFlow: "row",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(1, 50px)",
            gap: 1,
          }}
        >
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </Box>
      </div>
    </>
  );
}
