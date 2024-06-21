import { useEffect, useState } from "react";
import AccountLayout from "./account-layout";
import { getAllOrderById } from "../../services/orders";
import no_cart from "../../assets/images/tk-shopping-img.png";
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
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
  return (
    <AccountLayout>
      {orders && orders.length > 0 ? (
        <></>
      ) : (
        <div className="flex items-center justify-center p-16 flex-col">
          <img src={no_cart} alt="no order" />
          <p className="text-center text-[14px] my-3">
            Bạn chưa có đơn hàng nào
          </p>
          <p className="text-center text-[14px] my-3">Vui lòng quay lại sau</p>
          <Link  to="/" className="bg-[#ed1b24] text-[14px] text-white py-3 px-8 hover:opacity-90">
            Tiếp tục mua sắm
          </Link>
        </div>
      )}
    </AccountLayout>
  );
}

export default AccountOrder;
