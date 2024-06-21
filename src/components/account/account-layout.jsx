import {
  Home,
  Logout,
  Person2Outlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Avatar, Breadcrumbs, Container } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../layout/layout";

function AccountLayout({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user).user);
    }
  }, []);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const options = [
    {
      idx: 0,
      icon: Person2Outlined,
      label: "Tài khoản",
      view: "account-profile",
    },
    {
      idx: 1,
      icon: ShoppingBagOutlined,
      label: "Đơn hàng của tôi",
      view: "account-order",
    },
    { idx: 3, icon: Logout, label: "Đăng xuất", view: "/" },
  ];
  useEffect(() => {
    const view = searchParams.get("view");
    if (view) {
      const optionIdx = options.findIndex((option) => option.view === view);
      setSelectedOption(optionIdx);
    }
  }, [searchParams]);

  const handleOptionClick = (idx, view) => {
    setSelectedOption(idx);
    if (view === "/") {
      // Perform logout logic if necessary
      localStorage.removeItem("currentUser");
      navigate(view);
    } else {
      setSearchParams({ view });
    }
  };

  return (
    <Layout>
      <Container
        sx={{
          height: "100%",
        }}
      >
        <Breadcrumbs
          className=""
          sx={{
            fontSize: "14px",
            padding: "10px 0px",
          }}
        >
          <Link
            underline="none"
            className="flex items-center gap-x-2 cursor-pointer"
            to="/"
          >
            <Home />
            <span>Trang chủ</span>
          </Link>
          <Link
            underline="none"
            className="flex items-center gap-x-2 cursor-pointer"
            to="/taikhoan"
          >
            Tài khoản
          </Link>
        </Breadcrumbs>
        <div className="grid grid-cols-12 rounded-sm my-5">
          <div className="col-span-4 p-3 shadow-sm bg-white border-r">
            <div className="flex items-center gap-x-3">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                {currentUser?.full_name[0]}
              </Avatar>
              <div className="">
                <p className="text-[14px]">Tài khoản của</p>
                <h2 className="font-semibold mt-1 text-[20px]">
                  {currentUser?.full_name}
                </h2>
              </div>
            </div>
            <div>
              {options.map((item) => (
                <div
                  key={item.idx}
                  //   to={item.href}
                  className={`flex items-center gap-x-2 cursor-pointer px-2 py-4 text-[14px] ${
                    selectedOption === item.idx ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleOptionClick(item.idx, item.view)}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-8 p-3 shadow-sm bg-white">{children}</div>
        </div>
      </Container>
    </Layout>
  );
}

export default AccountLayout;
