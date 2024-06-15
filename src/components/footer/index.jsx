import { Box, Container, Grid } from "@mui/material";
import React from "react";
import FooterItem from "./footer-item";

// type Props = {};

function Footer() {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "white",
      }}
    >
      <Container sx={{
        padding: '14px 26px'
      }}>
        <Grid container columnGap="10px" flexWrap="nowrap">
          <Grid item md={2.5}>
            <FooterItem title="Về chúng tôi" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
