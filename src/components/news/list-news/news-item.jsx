import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


function NewsItem({ news }) {
  const { avatar, title, _id } = news;
  return (
    <Link to={`/blogs/${_id}`}>
      <Box
        component="div"
        sx={{
          display: "flex",
          columnGap: "10px",
          cursor: "pointer",
        }}
      >
        <img className="w-[110px]" src={avatar} />
        <Typography
          variant="h6"
          sx={{
            fontSize: "13px",
            fontWeight: "600",
          }}
          className=" line-clamp-1 hover:underline"
        >
          {title}
        </Typography>
      </Box>
    </Link>
  );
}

export default NewsItem;
