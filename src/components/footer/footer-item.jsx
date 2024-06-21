import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function FooterItem({ title, items }) {
  return (
    <Box component="div">
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "600",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
      {items.map((item) => (
        <div
          key={item.title}
          className="flex items-center gap-x-2 text-[14px] my-1"
        >
          <Link to={item.link}>{item.title}</Link>
          {item.email && <p>{item.email}</p>}
        </div>
      ))}
    </Box>
  );
}

export default FooterItem;
