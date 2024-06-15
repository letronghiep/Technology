/* eslint-disable react/prop-types */
import { useState } from "react";
import { Textarea } from "@mui/joy";
import { Box, Button, Container, Rating, Typography } from "@mui/material";
import Modal from "../modal/index";
import ProgressBar from "./progress-bar";

function ProductFeedback({ name }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const bodyContent = (
    <>
      <div className="text-[13px] flex items-center gap-x-3 border-b pb-6">
        <b>Mức độ đánh giá*</b>
        <Rating />
      </div>
      <div className="text-[13px] border-b py-6 ">
        <b>Đánh giá</b>
        <Textarea
          minRows={3}
          sx={{
            fontSize: "13px",
          }}
          placeholder="Ví dụ: Tôi đã mua sản phẩm cách đây 1 tháng và cảm thấy rất hài lòng về sản phẩm"
        />
      </div>
      <div className="w-full mt-5 flex">
        <Button
          variant="contained"
          color="error"
          sx={{
            marginLeft: "auto",
          }}
        >
          Gửi đánh giá
        </Button>
      </div>
    </>
  );
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "white",
        borderRadius: "8px",
        paddingY: "24px",
      }}
    >
      <Typography variant="h5">Đánh giá và nhận xét {name}</Typography>
      <Box
        component="div"
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          columnGap: "30px",
          paddingY: "20px",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 className="text-red-500 font-bold text-3xl">0/5</h4>
          <Rating readOnly defaultValue={0} />
          <p>0 đánh giá và nhận xét</p>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            // flex: 1,
          }}
        >
          <ProgressBar stars={5} />
          <ProgressBar stars={4} />
          <ProgressBar stars={3} />
          <ProgressBar stars={2} />
          <ProgressBar stars={1} />
        </Box>
      </Box>
      <hr />
      <Box
        component="div"
        sx={{
          paddingY: "20px",
        }}
      >
        <Button
          onClick={handleOpenModal}
          sx={{
            paddingX: "60px",
          }}
          variant="contained"
        >
          Gửi đánh giá của bạn
        </Button>
      </Box>
      <Modal
        className="Slider-Modal"
        isOpen={isOpenModal}
        onCloseModal={handleCloseModal}
        actionLabel={`Đánh giá của bạn về ${name}`}
        bodyContent={bodyContent}
      />
    </Container>
  );
}

export default ProductFeedback;
