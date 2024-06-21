import { ArrowBackIos, Home } from "@mui/icons-material";
import { Breadcrumbs, Container, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "~/components/cart/cart-item";
import Layout from "~/components/layout/layout";
import { clearItemFromCart, handleQuantityItem } from "../store/cart/cartSlice";
import qr from "~/assets/images/image.png";
import { createCheckout } from "../services/checkout";
const STEP = {
  CART: 1,
  CHECKOUT: 2,
};
function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemoveItem = (productToClear) => {
    dispatch(clearItemFromCart(productToClear));
  };
  const [step, setStep] = useState(STEP.CART);
  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(handleQuantityItem(itemId, newQuantity));
  };
  const [shippingCost] = useState(40000);
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      carts: cartItems,
      full_name: "",
      phone_number: "",
      province: "",
      district: "",
      ward: "",
      address: "",
    },
  });
  const [selectedOption, setSelectedOption] = useState("cash");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const onSubmit = async (data) => {
    const res = await createCheckout('NCB', 450000);
    console.log(res);

  };
  let bodyContent = (
    <>
      <Breadcrumbs
        className=""
        sx={{
          fontSize: "14px",
          padding: "10px 0px",
        }}
      >
        <Link
          underline="none"
          className="flex items-center gap-x-2 cursor-pointer text-blue-500 hover:decoration-current"
          to="/"
        >
          <Home />
          <span>Trang chủ</span>
        </Link>
        <Link
          underline="none"
          className="flex items-center gap-x-2 cursor-pointer "
          to="#"
        >
          Giỏ hàng
        </Link>
      </Breadcrumbs>
      <div className="grid grid-cols-12  p-4  gap-x-3 h-full">
        <div className="col-span-8 bg-white h-[100vh] rounded-md shadow-sm">
          <h2 className="text-2xl font-bold mb-4 p-4">Giỏ hàng</h2>
          <div>
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                onRemove={handleRemoveItem}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>
        </div>
        <div className="col-span-4 bg-white p-4 rounded-md shadow-sm h-fit">
          <div className="flex items-center gap-x-2 text-[14px]">
            <TextField
              label="Mã giảm giá/ Quà tặng"
              name="voucher"
              type="text"
              variant="outlined"
              sx={{ width: "100%", fontSize: "13px" }}
              size="small"
              inputProps={{ style: { fontSize: "14px" } }} // font size of input text
              InputLabelProps={{ style: { fontSize: "14px" } }}
            />
            <button className="bg-[#3b82f6] text-white w-[160px] h-[40px] rounded-md hover:bg-blue-600">
              Áp dụng
            </button>
          </div>
          <div className="mt-4 border border-gray-200 rounded-md p-4 text-[14px]">
            <div className="flex justify-between mb-2">
              <span className="font-bold">Tạm tính</span>
              <span className="font-bold">
                {calculateTotal().toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>

            <div className="flex justify-between mb-2">
              <span className="font-bold">Giảm giá</span>
              <span className="font-bold">0đ</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold">Thành tiền</span>
              <span className="font-bold">
                {calculateTotal().toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>
          </div>

          <div className="my-4 flex w-full justify-center items-center text-[14px]">
            <button
              onClick={() => setStep((step) => step + 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Tiến hành đặt hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
  if (step === STEP.CHECKOUT) {
    bodyContent = (
      <>
        <div
          className="flex items-center gap-x-2 text-[14px] hover:underline hover:text-blue-500 cursor-pointer w-fit"
          onClick={() => setStep((step) => step - 1)}
        >
          <ArrowBackIos
            sx={{
              fontSize: "14px",
            }}
          />
          Trở về
        </div>
        <div className="my-3 grid grid-cols-12 gap-x-3">
          <div className="col-span-8">
            <h3 className="font-bold">2. Địa chỉ giao hàng</h3>
            <div className="">
              <div className="flex justify-center flex-col items-center gap-y-3 border border-gray-300 p-4 rounded-sm bg-white text-[14px] my-3">
                <TextField
                  label="Họ và tên"
                  name="full_name"
                  type="text"
                  {...register("full_name", {
                    required: "Nhập họ tên người nhận",
                  })}
                  variant="outlined"
                  sx={{ width: "80%", fontSize: "14px" }}
                  error={!!errors.full_name}
                  helperText={errors?.full_name?.message}
                  size="small"
                  inputProps={{ style: { fontSize: "14px" } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: "14px" } }} // font size of input label
                />
                <TextField
                  label="Số điện thoại"
                  name="phone_number"
                  type="text"
                  {...register("phone_number", {
                    required: "Nhập số điện thoại người nhận",
                  })}
                  variant="outlined"
                  sx={{ width: "80%" }}
                  error={!!errors.phone_number}
                  helperText={errors?.phone_number?.message}
                  size="small"
                  inputProps={{ style: { fontSize: "14px" } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                />
                <TextField
                  label="Tỉnh/Thành phố"
                  name="province"
                  type="text"
                  {...register("province", { required: "Nhập tỉnh thành phố" })}
                  variant="outlined"
                  sx={{ width: "80%" }}
                  error={!!errors.province}
                  helperText={errors?.province?.message}
                  size="small"
                  inputProps={{ style: { fontSize: "14px" } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                />
                <TextField
                  label="Quận/huyện"
                  name="district"
                  type="text"
                  {...register("district", { required: "Nhập quận/huyện" })}
                  variant="outlined"
                  sx={{ width: "80%" }}
                  error={!!errors.district}
                  helperText={errors?.district?.message}
                  size="small"
                  inputProps={{ style: { fontSize: "14px" } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                />
                <TextField
                  label="Phường/xã"
                  name="ward"
                  type="text"
                  {...register("ward", { required: "Nhập Phường/xã" })}
                  variant="outlined"
                  sx={{ width: "80%" }}
                  error={!!errors.ward}
                  helperText={errors?.ward?.message}
                  size="small"
                  inputProps={{ style: { fontSize: "14px" } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                />
                <TextField
                  label="Địa chỉ"
                  name="address"
                  type="text"
                  {...register("address")}
                  variant="outlined"
                  sx={{ width: "80%" }}
                  error={!!errors.address}
                  helperText={errors?.address?.message}
                  size="small"
                  inputProps={{ style: { fontSize: "14px" } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                />
              </div>
              <div className="my-3">
                <h3 className="font-bold">3. Hình thức giao hàng</h3>
                <div className="border border-gray-300 p-4 rounded-sm bg-white text-[14px]">
                  <div className="flex items-center gap-x-2">
                    <input type="radio" readOnly checked />
                    <label>Giao hàng tiêu chuẩn</label>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item._id}
                        className="flex gap-x-3 p-2 shadow-sm shadow-slate-300"
                      >
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-12 h-12 object-contain rounded-md"
                        />
                        <div>
                          <h6 className="">{item.name}</h6>
                          <p className="text-gray-500">x{item.quantity}</p>
                        </div>
                        <p className="ml-auto">
                          {item.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="px-2 py-3 text-[14px]">
              <h3 className="font-bold">Chọn hình thức thanh toán</h3>
              <div className="border p-2 rounded-sm bg-white border-slate-300">
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={selectedOption === "cash"}
                      onChange={handleOptionChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">Thanh toán khi nhận hàng</span>
                  </label>
                </div>
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="bank_transfer"
                      checked={selectedOption === "bank_transfer"}
                      onChange={handleOptionChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">Thanh toán bằng chuyển khoản</span>
                  </label>
                </div>
              </div>
              {selectedOption === "bank_transfer" && (
                <div className="border border-slate-300 p-4 bg-white text-[14px] my-3">
                  <h4>VUI LÒNG QUÉT MÃ BÊN DƯỚI ĐỂ THANH TOÁN CHUYỂN KHOẢN</h4>
                  <div className="flex items-center justify-center">
                    <img src={qr} />
                  </div>
                </div>
              )}
              <div className="my-3 border border-slate-300 p-4 bg-white">
                {selectedOption === "bank_transfer" ? (
                  <>
                    <div className="flex items-center justify-between text-[14px]">
                      <h4 className="text-[16px] font-semibold">Thành tiền</h4>
                      <p>
                        {calculateTotal().toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between text-[14px]">
                      <h4 className="text-[16px] font-semibold">
                        Phí giao hàng
                      </h4>
                      <p>
                        {shippingCost.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <h4 className="text-[16px] font-semibold">Thành tiền</h4>
                      <p>
                        {(
                          calculateTotal() + parseInt(shippingCost)
                        ).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="my-3">
                <button
                  onClick={handleSubmit(onSubmit)}
                  className="bg-[#ed1b24] text-white py-3 w-full font-semibold hover:opacity-90"
                >
                  ĐẶT HÀNG
                </button>
                <button className="bg-[#fea23b] text-white py-3 w-full font-semibold hover:opacity-90 mt-3">
                  CHỌN THÊM SẢN PHẨM
                </button>
                <button className="bg-[#277cea] text-white py-3 w-full font-semibold hover:opacity-90 mt-3">
                  ĐẶT CỌC
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <Layout>
      <Container sx={{ marginBottom: "auto" }}>{bodyContent}</Container>
    </Layout>
  );
}

export default Cart;
