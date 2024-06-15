/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import Banner from "../banner/banner";
import SidebarDesktop from "./sidebar-desktop";

export default function Sidebar({ categories }) {
  return (
    <Container
      sx={{
        marginTop: "20px",
      }}
    >
      <Grid container columnGap={1.5} flexWrap="nowrap">
        <Grid
          item
          xs={3}
          className="shadow shadow-neutral-800/30 rounded-md bg-white"
          sx={{
            height: "fit-content",
          }}
        >
          <SidebarDesktop categories={categories} />
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            maxHeight: "635px",
            overflow: "hidden",
          }}
        >
          <Banner />
        </Grid>
      </Grid>
    </Container>
  );
}
