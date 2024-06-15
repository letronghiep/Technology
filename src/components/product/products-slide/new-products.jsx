import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ProductSlider from "../../slider/product-slider";

function NewProducts({ products, title }) {
  return (
    <Container
      sx={{
        marginTop: "30px",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 600,
            fontFamily: "Poppins",
          }}
          variant="h2"
          children={`${title}`}
        />
        <Box component="div">
          
          <Link
            to="/products"
            style={{
              textDecoration: "underline",
              fontSize: "13px",
              color: "#0156FF",
            }}
          >
            Xem tất cả
          </Link>
        </Box>
      </Box>
      <ProductSlider slidesToScroll={5} slidesToShow={5} products={products} />
    </Container>
  );
}

export default NewProducts;
