import { ArrowForwardIos } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import no_cart from "../../assets/images/tk-shopping-img.png";
import { formatDate } from "../../libs/convertNumber";
import { getAllOrderById } from "../../services/orders";
import SkeletonProduct from "../loading/skeleton-product";
import AccountLayout from "./account-layout";
function AccountOrder() {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchedData() {
      setLoading(true);
      const data = await getAllOrderById();
      // console.log(data)

      if (data) {
        setOrders(data.metadata);
      }
      setLoading(false);
    }
    fetchedData();
  }, []);
  console.log(orders);
  if (loading) return <SkeletonProduct />;
  return (
    <AccountLayout>
      {orders && orders.length > 0 ? (
        <div className="flex flex-col gap-2">
          {orders.map((item) => (
            <div className="border pb-3 rounded-md" key={item._id}>
              <p className="px-4 py-3 border-b bg-slate-100">
                Đơn hàng: #{item._id}
              </p>
              <div className="px-4 py-3">
                <p>
                  Ngày đặt hàng: <span>{formatDate(item.createdAt)}</span>
                </p>
                <p>Tổng tiền: {item.total_price}</p>
              </div>
              <Link
                to={`/taikhoan?view=account-order/${item._id}`}
                className="flex items-center gap-x-2 text-[14px] px-4 py-3 hover:underline hover:text-blue-500"
              >
                Xem chi tiết đơn hàng{" "}
                <ArrowForwardIos sx={{ fontSize: "13px" }} />{" "}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center p-16 flex-col">
          <img src={no_cart} alt="no order" />
          <p className="text-center text-[14px] my-3">
            Bạn chưa có đơn hàng nào
          </p>
          <p className="text-center text-[14px] my-3">Vui lòng quay lại sau</p>
          <Link
            to="/"
            className="bg-[#ed1b24] text-[14px] text-white py-3 px-8 hover:opacity-90"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      )}
    </AccountLayout>
  );
}

export default AccountOrder;
