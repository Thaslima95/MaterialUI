import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function RatingComponent() {
  const [value, setValue] = useState(1);
  return (
    <div>
      RatingComponent
      <Stack spacing={3}>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
        <Typography component="legend">No rating given</Typography>
        <Rating name="half-rating" value={null} />
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Stack>
    </div>
  );
}
