/* eslint-disable react/prop-types */
import { Star } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

function ProgressBar({ review = 0, stars }) {
  return (
    <Box component="div" sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    }}>
      <div className="flex items-center text-[13px] gap-x-1">
        <p>{stars}</p>
        <Star
          color="warning"
          sx={{
            fontSize: "18px",
          }}
        />
      </div>
      <Box
        component="div"
        sx={{
          display: "flex",
          columnGap: "10px",
          bgcolor: "#ddd",
          height: "10px",
          width: "100%",
          position: "relative",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            width: `${review}%`,
            display: "flex",
            //   padding: "4px 6px",
            alignItems: "center",
            columnGap: "10px",
            bgcolor: "red",
            borderRadius: "10px",
            position: "absolute",
            top: 0,
            bottom: 0,
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default ProgressBar;
