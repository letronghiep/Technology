import { TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AccountLayout from "./account-layout";
import toast from "react-hot-toast";
import { updateUserInfo } from "../../services/user";

function AccountProfile() {
  // Get user from localStorage
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user).user);
    }
  }, []);
  //   Handle UserProfile
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      full_name: "",
      phone_number: "",
      email: "",
    },
  });
  //   handle setvalue
  const setValueofFormData = useCallback(() => {
    setValue("full_name", currentUser?.full_name ?? "");
    setValue("phone_number", currentUser?.phone_number ?? "");
    setValue("email", currentUser?.email ?? "");
  }, [currentUser, setValue]);
  useEffect(() => {
    if (currentUser) setValueofFormData();
  }, [currentUser, setValueofFormData]);
  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const data = await updateUserInfo(currentUser._id, formData);
      if (data) {
        toast("Cập nhật thông tin thành công");
        setCurrentUser(data.metadata);
        localStorage.setItem("currentUser", JSON.stringify(data.metadata));
      }
      setIsLoading(false);
    } catch (error) {
      toast(error);
    }
  };
  if (isLoading) return <div>...</div>;
  return (
    <AccountLayout>
      <div className="mb-auto h-[100vh]">
        <h3 className="text-[20px] my-1">Thông tin tài khoản</h3>
        <div className="flex flex-col items-center justify-center gap-3 px-10 py-6">
          <div className="flex items-center justify-between w-full">
            <label className="text-[13px]">Họ và tên</label>
            <TextField
              placeholder="Nguyễn Văn A"
              name="full_name"
              type="text"
              variant="outlined"
              {...register("full_name")}
              sx={{ width: "80%", fontSize: "13px" }}
              size="small"
              inputProps={{ style: { fontSize: "14px" } }} // font size of input text
              InputLabelProps={{ style: { fontSize: "14px" } }}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <label className="text-[13px]">Số điện thoại</label>
            <TextField
              placeholder="0123923723"
              name="phone_number"
              type="text"
              variant="outlined"
              {...register("phone_number")}
              sx={{ width: "80%", fontSize: "13px" }}
              size="small"
              inputProps={{ style: { fontSize: "14px" } }} // font size of input text
              InputLabelProps={{ style: { fontSize: "14px" } }}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <label className="text-[13px]">Email</label>
            <TextField
              placeholder="nguyenvana@gmail.com"
              name="email"
              type="email"
              variant="outlined"
              {...register("email")}
              sx={{ width: "80%", fontSize: "13px" }}
              size="small"
              inputProps={{ style: { fontSize: "14px" } }} // font size of input text
              InputLabelProps={{ style: { fontSize: "14px" } }}
            />
          </div>
        </div>
        <button
          className="px-4 py-3 bg-[#ed1b24] text-white flex items-center mx-auto mb-5 justify-center hover:opacity-90"
          onClick={handleSubmit(onSubmit)}
        >
          Chỉnh sửa thông tin
        </button>
      </div>
    </AccountLayout>
  );
}

export default AccountProfile;
