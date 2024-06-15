import { Box, Container, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import bg_flash from "~/assets/images/bg_flash.png";
import SaleSlider from "~/components/slider/sales-slider";
function FlashSales({ products }) {
  const TAB = {
    LAPTOP: "Laptop giá tốt",
    SALE: "Bán chạy",
  };
  let contentBody;
  const [value, setValue] = useState(TAB.LAPTOP);
  const salesFilter = useMemo(() => {
    return products
      ?.filter((item) => item.quantity_sold > 0)
      .sort((a, b) => b.quantity_sold - a.quantity_sold)
      .filter((_, idx) => idx < 10)
      .map((item) => item);
  }, [products]);
  const laptopsFilter = useMemo(() => {
    return products
      ?.filter(
        (item) =>
          item.category_id?.category_name === "Laptop" && item.quantity_sold > 0
      )
      .sort((a, b) => b.quantity_sold - a.quantity_sold)
      .filter((_, idx) => idx < 10)
      .map((item) => item);
  }, [products]);
  if (value === TAB.LAPTOP) {
    contentBody = (
      <Box
        component="div"
        sx={{
          padding: "20px 10px",
        }}
      >
        <SaleSlider
          products={laptopsFilter}
          slidesToScroll={6}
          slidesToShow={6}
        />
      </Box>
    );
  }
  if (value === TAB.SALE) {
    contentBody = (
      <Box
        component="div"
        sx={{
          padding: "20px 10px",
        }}
      >
        <SaleSlider
          products={salesFilter}
          slidesToScroll={6}
          slidesToShow={6}
        />
      </Box>
    );
  }

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
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(180deg, #0a0c8f 0%, #2940B8 100%)",
          padding: "10px 20px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "24px",
            color: "yellow",
            fontFamily: "bold",
            fontStyle: "italic",
          }}
        >
          Sản phẩm bán chạy
        </Typography>
        <Box component="div">
          <button
            className={`${
              value === TAB.LAPTOP
                ? "bg-white text-black"
                : "text-white bg-inherit"
            }  font-bold border border-white py-2 px-4 text-base mr-3`}
            onClick={() => {
              setValue("Laptop giá tốt");
            }}
          >
            Laptop giá tốt
          </button>
          <button
            className={`${
              value === TAB.SALE
                ? "bg-white text-black"
                : "text-white bg-inherit"
            }  font-bold border border-white py-2 px-4 text-base mr-3`}
            onClick={() => {
              setValue("Bán chạy");
            }}
          >
            Bán chạy
          </button>
        </Box>
      </Box>
      <div
        style={{
          backgroundImage: `url(${bg_flash})`,
          backgroundPosition: "top-center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {contentBody}
        <Link
          className="text-white rounded-md px-4 py-2 mb-5 mx-auto bg-[#0a0c8f] font-bold hover:opacity-90"
          to={`${
            value === TAB.LAPTOP
              ? "/products/flash-sale-laptop"
              : "/products/san-pham-ban-chay"
          }`}
        >
          Xem thêm khuyến mãi
        </Link>
      </div>
    </Container>
  );
}

export default FlashSales;
