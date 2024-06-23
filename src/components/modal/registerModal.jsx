import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { TextField } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { onOpenLogin } from "../../hooks/useLoginModal";
import { onCloseRegister } from "../../hooks/useRegisterModal";
import { registerUser } from "../../services/auth";
import Modal from "./index";

function RegisterModal() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isOpenRegister } = useSelector((state) => state.useRegisterModal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      full_name: "",
      phone_number: "",
      email: "",
      password: "",
    },
  });
  const handleOnClose = () => {
    dispatch(onCloseRegister(true));
  };
  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      if (formData.password === formData.confirm_password) {
        const data = await registerUser(formData);
        if (data) {
          dispatch(onCloseRegister(true));
          toast.success("Đăng ký thành công!");
          localStorage.setItem("currentUser", JSON.stringify(data.metadata));
          location.reload();
        }
      } else {
        errors.confirm_password = "Mật khẩu không khớp";
      }
      setIsLoading(false);
    } catch (error) {
      toast(error);
    }
  };
  const toggleModal = useCallback(() => {
    dispatch(onCloseRegister(true));
    dispatch(onOpenLogin(true));
  }, [dispatch]);
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <TextField
        label="Tài khoản"
        name="username"
        type="text"
        {...register("username")}
        variant="outlined"
        sx={{ width: "100%" }}
        error={!!errors.username}
        helperText={errors?.username?.message}
        size="small"
      />
      <TextField
        label="Họ tên"
        name="full_name"
        type="text"
        {...register("full_name")}
        variant="outlined"
        sx={{ width: "100%" }}
        error={!!errors.full_name}
        helperText={errors?.full_name?.message}
        size="small"
      />
      <TextField
        label="Số điện thoại"
        name="phone_number"
        type="text"
        {...register("phone_number")}
        variant="outlined"
        sx={{ width: "100%" }}
        error={!!errors.phone_number}
        helperText={errors?.phone_number?.message}
        size="small"
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        {...register("email")}
        variant="outlined"
        sx={{ width: "100%" }}
        error={!!errors.email}
        helperText={errors?.email?.message}
        size="small"
      />
      <TextField
        label="Mật khẩu"
        name="password"
        type="password"
        {...register("password")}
        variant="outlined"
        sx={{ width: "100%" }}
        error={!!errors.password}
        helperText={errors?.password?.message}
        size="small"
      />
      <TextField
        label="Xác nhận mật khẩu"
        name="password"
        type="password"
        variant="outlined"
        sx={{ width: "100%" }}
        error={!!errors.confirm_password}
        helperText={errors?.confirm_password?.message}
        size="small"
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex justify-center items-center gap-2">
          <p>Bạn đã có tài khoản</p>
          <p
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={toggleModal}
          >
            Đăng nhập
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={isOpenRegister}
      disabled={isLoading}
      onClose={handleOnClose}
      title="Đăng ký"
      actionLabel="Đăng ký"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;
