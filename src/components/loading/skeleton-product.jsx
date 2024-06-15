import { Box, Skeleton, Grid } from "@mui/material";
function SkeletonProduct() {
  return (
    <Box component="div">
      <Grid
        container
        columnSpacing={3}
        sx={{
          bgcolor: "white",
          padding: "20px 0px",
        }}
      >
        <Grid item xs={4}>
          <Grid item xs={12}>
            <Skeleton
              variant="rectangular"
              sx={{
                height: { xs: "380px", md: "396px" },
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={7} margin={2}>
          <Skeleton variant="text" />
          <Skeleton
            variant="text"
            sx={{
              width: "200px",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              width: "200px",
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              width: "200px",
              height: "50px",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              width: "200px",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              width: "200px",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              width: "200px",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        columnSpacing={3}
        sx={{
          marginTop: "20px",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{
            bgcolor: " white",
            padding: "20px 0px",
          }}
        >
          <Skeleton variant="text" className="w-[300px]" />
          <Skeleton
            variant="rectangular"
            sx={{
              height: "300px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: " white",
            padding: "20px 0px",
          }}
        >
          <Skeleton variant="text" className="w-[300px]" />
          <Skeleton
            variant="rectangular"
            sx={{
              height: "300px",
              marginRight: "20px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SkeletonProduct;
