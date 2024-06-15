import { Box, Typography } from "@mui/material";
import React from "react";



function FooterItem({ title }) {
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
      
    </Box>
  );
}

export default FooterItem;
