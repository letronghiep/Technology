import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NewsListSlider from "../../slider/news-slider";

function SliderNews({ news, title }) {
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
        >
          {title}
        </Typography>
        <Box component="div">
          <Link
            to="/blogs"
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
      <NewsListSlider slidesToScroll={5} slidesToShow={5} newsList={news} />
    </Container>
  );
}

export default SliderNews;
