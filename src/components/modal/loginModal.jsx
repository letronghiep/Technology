import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { TextField } from "@mui/material";
import { toast } from "react-hot-toast";
import Modal from "./index";
import { useDispatch, useSelector } from "react-redux";
import { onCloseLogin } from "../../hooks/useLoginModal";
import { onOpenRegister } from "../../hooks/useRegisterModal";
import { login } from "../../services/auth";

function LoginModal() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.useLoginModal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const handleOnClose = () => {
    dispatch(onCloseLogin(true));
  };
  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const data = await login(formData);
      if (data) {
        dispatch(onCloseLogin(true));
        toast.success("Đăng nhập thành công!");
        localStorage.setItem("currentUser", JSON.stringify(data.metadata));
        location.reload();
      }
      setIsLoading(false);
    } catch (error) {
      toast(error);
    }
  };
  const toggleModal = useCallback(() => {
    dispatch(onCloseLogin(true));
    dispatch(onOpenRegister(true));
  }, [dispatch]);
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <TextField
        label="Username"
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
        label="Password"
        name="password"
        type="password"
        {...register("password")}
        variant="outlined"
        sx={{ width: "100%" }}
        error={!!errors.password}
        helperText={errors?.password?.message}
        size="small"
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex justify-center items-center gap-2">
          <p>Nếu là lần đầu truy cập?</p>
          <p
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={toggleModal}
          >
            Tạo một tài khoản
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={isOpen}
      disabled={isLoading}
      onClose={handleOnClose}
      title="Đăng nhập"
      actionLabel="Đăng nhập"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;
