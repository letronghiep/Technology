import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { convertPrice } from "~/libs/convertNumber";

function RelatedProduct({ product }) {
  const { name, avatar, slug, price, promotion } = product;
  return (
    <Link to={`/products/${slug}`}>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img className="w-[114px] h-[114px]" src={avatar} alt={name} />
        <Box component="div">
          <Typography
            variant="h6"
            sx={{
              fontSize: "13px",
              fontWeight: "600",
            }}
            className=" line-clamp-1 hover:underline"
          >
            {name}
          </Typography>
          <Typography
              sx={{
                fontSize: "13px",
              }}
              variant="inherit"
            >
              {promotion > 0 ? (
                <del>
                  {convertPrice(price)}
                  <sup>đ</sup>
                </del>
              ) : (
                <span>{convertPrice(price)}đ</span>
              )}
            </Typography>
          <Box
            component="div"
            sx={{
            //   marginY: "10px",
              display: "flex",
              alignItems: "center",
              columnGap: "16px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                fontFamily: "Poppins",
                color: "red",
              }}
              variant="inherit"
            >
              {promotion > 0 && (
                <span>
                  {convertPrice(price * (1 - promotion / 100))}
                  <sup>
                    <u>đ</u>
                  </sup>
                </span>
              )}
            </Typography>
            
            {promotion > 0 && (
              <Box
                component="span"
                className="border px-1 border-red-500 text-[13px] text-red-500 bg-red-100"
              >
                {-promotion}%
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default RelatedProduct;
