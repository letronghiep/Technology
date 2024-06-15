import { Box, Skeleton } from "@mui/material";
import React from "react";

function SkeletonRelated() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        columnGap: "10px",
      }}
    >
      <Skeleton variant="rectangular" width={114} height={114} />
      <Box
        component="div"
        sx={{
          flex: 1,
        }}
      >
        <Skeleton
          variant="text"
          width="100%"
          sx={{
            width: "100%",
          }}
        />
        <Skeleton
          variant="text"
          width="100%"
          sx={{
            marginY: '10px',
            width: "100%",
          }}
        />
        <Skeleton
          variant="text"
          width="100%"
          sx={{
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
}

export default SkeletonRelated;
