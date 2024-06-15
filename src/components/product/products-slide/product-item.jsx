import { Box, CardActionArea, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { BiCheckCircle } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";
import { convertPrice } from "~/libs/convertNumber";
export default function ProductItem({
  name,
  avatar,
  quantity_import,
  price,
  promotion,
  slug,
}) {
  return (
    <Card
      sx={{
        height: { xs: "", md: "346px" },
        margin: "2px",
        maxHeight: "100%",
        borderRadius: "10px",
        padding: "10px",
        position: "relative",
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
        <Box component="div">
          {quantity_import && quantity_import > 0 ? (
            <span
              style={{
                color: "#78A962",
              }}
              className="flex items-center gap-x-2  text-sm ml-4"
            >
              <BiCheckCircle
                style={{
                  color: "#78A962",
                }}
              />
              Còn hàng
            </span>
          ) : (
            <span className="text-red-600 flex items-center gap-x-2 text-sm ml-4">
              <FaRegTimesCircle /> Hết hàng
            </span>
          )}
        </Box>
        <div className="relative">
          <CardMedia
            component="img"
            image={avatar}
            alt={name}
            sx={{
              width: { xs: "100px", lg: "210px" },
              height: { xs: "100px", lg: "175px" },
              margin: "0 auto",
            }}
            className="hover:scale-x-105 duration-300 ease-in transition-all mx-auto rounded-md "
          />
        </div>
        <CardContent>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "Poppins",
            }}
            className="hover:opacity-90 line-clamp-2"
          >
            {name}
          </Typography>
          <Box component="div">
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
              variant="inherit"
            >
              {promotion > 0 ? (
                <del>
                  {convertPrice(price)}
                  <sup>đ</sup>
                </del>
              ) : (
                <span>
                  {convertPrice(price)}
                  <sup>đ</sup>
                </span>
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
                  fontSize: "18px",
                  fontWeight: 600,
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
                <span className="border px-1 border-red-600 text-[13px] text-red-600 bg-red-100 font-semibold">
                  {-promotion}%
                </span>
              )}
            </Box>
            {/* <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                columnGap: { xs: "4px", md: "10px" },
                marginBottom: "10px",
              }}
            >
              {rateAvg} <Star />
              <Typography
                sx={{
                  fontSize: "12px",
                }}
                variant="subtitle2"
              >
                Review(3)
              </Typography>
            </Box> */}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
