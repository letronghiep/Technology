import { Box, Container, Grid } from "@mui/material";
import FooterItem from "./footer-item";

const FOOTER_OPTIONS = [
  {
    title: "Về chúng tôi",
    items: [
      {
        title: "Giới thiệu",
        link: "/about",
      },
      {
        title: "Liên hệ",
        link: "/contact",
      },
    ],
  },
  {
    title: "CHÍNH SÁCH",
    items: [
      {
        title: "Chính sách bảo hành",
        link: "/warranty-policy",
      },
      {
        title: "Chính sách bảo mật",
        link: "/privacy-policy",
      },
      {
        title: "Chính sách thanh toán",
        link: "/payment-policy",
      },
      {
        title: "Chính sách đổi trả",
        link: "/return-policy",
      },
    ],
  },
  {
    title: "THÔNG TIN",
    items: [
      {
        title: "Hệ thống",
        link: "/showroom",
      },
      {
        title: "Hướng dẫn mua hàng",
        link: "guide",
      },
    ],
  },
  {
    title: "TỔNG ĐÀI HỖ TRỢ",
    items: [
      {
        title: "Hỗ trợ trực tuyến",
        link: "/support",
      },
      {
        title: "Email",
        link: "/group6@gmail.com",
        email: "group6@gmail.com",
      },
    ],
  },
];

function Footer() {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "white",
        marginTop: "auto",
      }}
    >
      <Container
        sx={{
          padding: "14px 26px",
        }}
      >
        <Grid container columnSpacing="10px" flexWrap="nowrap">
          {FOOTER_OPTIONS.map((option) => (
            <Grid item md={4} key={option.title}>
              <FooterItem title={option.title} items={option.items} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
