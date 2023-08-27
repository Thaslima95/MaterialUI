import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { pink } from "@mui/material/colors";
import { brown } from "@mui/material/colors";

export default function IconCheckbocXomponent() {
  return (
    <div>
      <Checkbox
        sx={{ color: brown[300], "&.Mui-checked": { color: pink[900] } }}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
    </div>
  );
}
