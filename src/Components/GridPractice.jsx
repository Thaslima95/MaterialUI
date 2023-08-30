import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";

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

export default function GridPractice() {
  return (
    <div style={{ width: "30%" }}>
      <Box
        sx={{
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
  );
}
