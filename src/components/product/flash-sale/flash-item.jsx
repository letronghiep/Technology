/* eslint-disable react/prop-types */
import { LocalFireDepartment } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { convertPrice } from "~/libs/convertNumber";

function FlashItem({ name, avatar, quantity_sold, price, promotion, slug }) {
  return (
    <Card
      sx={{
        height: { xs: "", md: "316px" },
        margin: "2px",
        maxHeight: "100%",
        borderRadius: "4px",
        position: "relative",
        padding: "8px",
        ":hover": {
          scale: "105%",
          transitionBehavior: "initial",
          transition: "all",
        },
      }}
      className="cursor-pointer card-product transition-all duration-300 ease-linear"
    >
      <CardActionArea
        href={`/products/${slug}`}
        sx={{
          height: "100%",
        }}
      >
        <div className="relative">
          <CardMedia
            component="img"
            image={avatar}
            alt={name}
            sx={{
              width: { lg: "167px" },
              height: { lg: "167px" },
              margin: "0 auto",
            }}
            className="hover:scale-x-105 duration-300 ease-in transition-all mx-auto rounded-md "
          />
        </div>
        <CardContent
          sx={{
            padding: "10px",
          }}
        >
          <Box
            component="h4"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "Poppins",
              lineHeight: "14px",
            }}
            className="hover:opacity-90 line-clamp-2"
          >
            {name}
          </Box>
          <Box component="div">
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Poppins",
                marginTop: "10px",
              }}
              variant="inherit"
            >
              {promotion > 0 ? (
                <del>{convertPrice(price)}</del>
              ) : (
                <span>{convertPrice(price)}</span>
              )}
            </Typography>
            <Box
              component="div"
              sx={{
                display: "flex",
                columnGap: "10px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "red",
                }}
                variant="inherit"
              >
                {promotion > 0 && (
                  <span>
                    {convertPrice(price * (1 - promotion / 100))}
                    <sup>đ</sup>
                  </span>
                )}
              </Typography>
              {promotion > 0 && (
                <span className="border px-1 border-red-600 text-[13px] text-red-600 bg-red-100">
                  {-promotion}%
                </span>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "10px",

              fontSize: "14px",
              bgcolor: "#ff8d9b",
              borderRadius: "20px",
            }}
            component="div"
          >
            {quantity_sold && quantity_sold > 1 ? (
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  padding: "0px 6px",
                  alignItems: "center",
                  columnGap: "8px",
                  bgcolor: "red",
                  borderRadius: "20px",
                }}
              >
                <LocalFireDepartment
                  sx={{
                    color: "#fdd835",
                  }}
                />

                <p className="text-white font-medium">Đã bán {quantity_sold}</p>
              </Box>
            ) : (
              <Box
                component="div"
                sx={{
                  display: "flex",
                  columnGap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "20%",
                    display: "flex",
                    padding: "4px 6px",
                    alignItems: "center",
                    columnGap: "10px",
                    bgcolor: "red",
                    borderRadius: "20px",
                  }}
                ></Box>
                <p className="text-white">Vừa mở bán</p>
              </Box>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FlashItem;
