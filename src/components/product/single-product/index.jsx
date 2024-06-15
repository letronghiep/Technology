import { ArrowDropDown } from "@mui/icons-material";
import { Box, Grid, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductFeedback from "~/components/feedback/product-feedback";
import SkeletonRelated from "~/components/loading/skeleton-related";
import Modal from "~/components/modal";
import NewsItem from "~/components/news/list-news/news-item";
import { SliderSyncing } from "~/components/slider/slider-sync/slider-sync";
import { convertPrice } from "~/libs/convertNumber";
import RelatedProduct from "../related-product";
import { getAllNews } from "../../../services/news";
import { useDispatch, useSelector } from "react-redux";
import { onClose, onOpen } from "../../../hooks/useSpecModal";

function SingleProduct({ product }) {
  const { name, price, promotion, specs, gallery, description } = product;
  const { products } = useSelector((state) => state.data);
  const { isOpen } = useSelector((state) => state.useSpecModal);
  // const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(onOpen());
  };
  // List news
  const [isFetching, setIsFetching] = useState(false);
  const [listNews, setListViews] = useState();
  useEffect(() => {
    async function fetchNews() {
      setIsFetching(true);
      const data = await getAllNews();
      if (data) {
        setListViews(data.metadata);
      }
      setIsFetching(false);
    }
    fetchNews();
  }, []);

  const handleCloseModal = () => {
    dispatch(onClose());
  };
  if (!product) return <h2>Loading...</h2>;
  const bodyContent = (
    <ul>
      {specs.length > 0 &&
        specs.map((item) => (
          <li
            key={item._id}
            className="flex items-center px-3 py-4 bg-neutral-100"
          >
            <div className="flex-1 font-semibold">{item.k}</div>
            <div className="flex-1">
              {item.u} {item?.v}
            </div>
          </li>
        ))}
    </ul>
  );
  return (
    <>
      <Grid
        container
        sx={{
          height: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            height: "100%",
          }}
        >
          <SliderSyncing images={gallery} />
          {/* <CustomPaging images={gallery!} /> */}
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            padding: "20px",
            bgcolor: "white",
          }}
        >
          <Typography variant="h6">{name}</Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              columnGap: "10px",
              alignItems: "center",
              fontSize: "13px",
              marginY: "10px",
            }}
          >
            <Box component="span">
              <Rating readOnly defaultValue={4} />
            </Box>
            <NavLink to="">Xem đánh giá</NavLink>
          </Box>
          <Box
            component="div"
            sx={{
              marginY: "10px",
              display: "flex",
              alignItems: "center",
              columnGap: "16px",
            }}
          >
            <Typography
              sx={{
                fontSize: "32px",
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
            <Typography
              sx={{
                fontSize: "18px",
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
                <span>{convertPrice(price)}đ</span>
              )}
            </Typography>
            {promotion > 0 && (
              <Box
                component="span"
                className="border px-1 border-red-600 text-[13px] text-red-600 bg-red-100 font-semibold"
              >
                {-promotion}%
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "red",
              width: { xs: "100%", md: "60%" },
              color: "white",
              padding: "10px 20px",
              marginY: "16px",
              borderRadius: "6px",
              ":hover": { opacity: "90%" },
              cursor: "pointer",
              transition: "all .5s linear",
            }}
          >
            <p className="uppercase text-[18px]">Mua ngay</p>
            <p className="text-[13px] ">Giao tận nơi hoặc nhận tại cửa hàng</p>
          </Box>
        </Grid>
      </Grid>
      <Grid
        // columnSpacing="10px"
        columnGap={2}
        container
        sx={{
          flexWrap: "nowrap",
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            bgcolor: "white",
            padding: "16px 24px",
            marginY: "20px",
            borderRadius: "6px",
            boxShadow: "1px 1px 1px rgba(0,0,0,0.4)",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            Thông tin sản phẩm
          </Typography>
          <Box component="p">{description}</Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component="div"
            sx={{
              bgcolor: "white",
              padding: "16px 24px",
              marginY: "20px",
              borderRadius: "6px",
              boxShadow: "1px 1px 1px rgba(0,0,0,0.4)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Cấu hình
            </Typography>
            <Box
              component="div"
              sx={{
                marginTop: "10px",
              }}
            >
              <ul>
                {specs.length > 0 &&
                  specs.slice(0, 4).map((item) => (
                    <li
                      key={item._id}
                      className="flex items-center px-3 py-4 bg-neutral-100"
                    >
                      <div className="flex-1 font-semibold">{item.k}</div>
                      <div className="flex-1">
                        {item.u} {item?.v}
                      </div>
                    </li>
                  ))}
              </ul>
              <div
                className="flex items-center justify-center my-2 text-[13px] hover:underline hover:text-blue-600 cursor-pointer"
                onClick={handleOpenModal}
              >
                <p>Xem thêm</p>
                <ArrowDropDown />
              </div>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              bgcolor: "white",
              padding: "16px 24px",
              marginY: "20px",
              borderRadius: "6px",
              boxShadow: "1px 1px 1px rgba(0,0,0,0.4)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Sản phẩm tương tự
            </Typography>
            <Box
              component="div"
              sx={{
                marginTop: "10px",
              }}
            >
              {isFetching ? (
                <SkeletonRelated />
              ) : (
                <ul>
                  {products &&
                    products
                      .filter((_, idx) => idx < 3)
                      .map((item) => (
                        <li key={item._id} className="flex items-center ">
                          <RelatedProduct product={item} key={item._id} />
                        </li>
                      ))}
                </ul>
              )}
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              bgcolor: "white",
              padding: "16px 24px",
              marginY: "20px",
              borderRadius: "6px",
              boxShadow: "1px 1px 1px rgba(0,0,0,0.4)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Tin tức về sản phẩm
            </Typography>
            <Box
              component="div"
              sx={{
                marginTop: "10px",
              }}
            >
              {isFetching ? (
                <SkeletonRelated />
              ) : (
                <ul>
                  {listNews &&
                    listNews
                      .filter((_, idx) => idx < 3)
                      .map((item) => (
                        <li key={item._id} className="flex items-center ">
                          <NewsItem news={item} key={item._id} />
                        </li>
                      ))}
                </ul>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Modal
        className="Slider-Modal"
        isOpen={isOpen}
        onClose={handleCloseModal}
        
        body={bodyContent}
        title="Thông số kĩ thuật"
      />
      <ProductFeedback name={name} />
    </>
  );
}

export default SingleProduct;
