import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/layout";
import { getOrderById } from "../services/orders";
import SkeletonProduct from "../components/loading/skeleton-product";
import { convertPrice, formatDate } from "../libs/convertNumber";
import { getShippingById } from "../services/shipping";

function OrderDetail({ id }) {
  const [orderDetail, setOrderDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const getShippingId = async (id) => {
    const response = await getShippingById(id);
    return response;
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await getOrderById(id);
      if (data) {
        const { shipping_id } = data.metadata;
        const [details] = await Promise.all([getShippingId(shipping_id)]);
        setOrderDetail({
          ...data.metadata,
          shipping_address: details.metadata.address,
        });

        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  console.log(orderDetail);
  if (isLoading || !orderDetail) return <SkeletonProduct />;
  return (
    <Layout>
      <Container>
        <div className="max-w-4xl mx-auto p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Chi Tiết Đơn Hàng</h2>
            <div className="mb-4">
              <p>
                <strong>Ngày Đặt Hàng:</strong>{" "}
                {formatDate(orderDetail?.order_date)}
              </p>
              <p>
                <strong>Tổng tiền:</strong>{" "}
                {convertPrice(orderDetail.total_price)}
              </p>
              <p>
                <strong>Trạng thái đơn hàng:</strong> {orderDetail.order_status}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Chi tiết sản phẩm</h3>
              <table className="min-w-full bg-white border">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">STT</th>
                    <th className="px-4 py-2 border">Sản phẩm</th>
                    <th className="px-4 py-2 border">Số lượng</th>
                    <th className="px-4 py-2 border">Đơn giá</th>
                    <th className="px-4 py-2 border">Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetail.products.map((item) => (
                    <tr key={item._id}>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border"># {item._id}</td>
                      <td className="px-4 py-2 border">2</td>
                      <td className="px-4 py-2 border">
                        {convertPrice(item.price)}
                      </td>
                      <td className="px-4 py-2 border">
                        {convertPrice(item.total)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">
                Thông tin thanh toán
              </h3>
              <p>
                <strong>Phí giao hàng:</strong> {orderDetail.shipping_costs}
              </p>
              <p>
                <strong>Địa chỉ giao hàng:</strong>{" "}
                {orderDetail.shipping_address}
              </p>
            </div>
            <div className="mt-4">
              <Link
                to="/"
                className="text-[14px] hover:text-blue-700 hover:underline"
              >
                Quay lại trang chủ
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default OrderDetail;
