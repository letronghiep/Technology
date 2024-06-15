import React from "react";
import CartItem from "~/components/cart/cart-item";
import Summary from "~/components/cart/summary";
import Layout from '~/components/layout/layout'
const Cart = () => {
  const items = [
    {
      image: "../../../assets/img//products/1.png",
      link: "../../../apps/e-commerce/landing/product-details.html",
      name: "Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)",
      color: "Glossy black",
      size: "XL",
      price: "$199",
      quantity: 2,
      total: "$398",
    },
    {
      image: "../../../assets/img//products/2.png",
      link: "../../../apps/e-commerce/landing/product-details.html",
      name: "iPhone 13 pro max-Pacific Blue-128GB storage",
      color: "Glossy black",
      size: "XL",
      price: "$150",
      quantity: 2,
      total: "$300",
    },
    {
      image: "../../../assets/img//products/3.png",
      link: "../../../apps/e-commerce/landing/product-details.html",
      name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
      color: "Glossy Golden",
      size: "34mm",
      price: "$65",
      quantity: 2,
      total: "$130",
    },
  ];

  return (
    <Layout>
      <div className="container-small cart">
        <nav className="mb-2" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#!">Page 1</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#!">Page 2</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Default
            </li>
          </ol>
        </nav>
        <h2 className="mb-6">Cart</h2>
        <div className="row gap-5">
          <div className="col-12 col-lg-8">
            <div id="cartTable">
              <div className="table-responsive scrollbar -mx-1 px-1">
                <table className="table text-xs mb-0 border-t border-gray-200">
                  <thead>
                    <tr>
                      <th className="align-middle text-xs" scope="col"></th>
                      <th
                        className="align-middle"
                        scope="col"
                        style={{ minWidth: "250px" }}
                      >
                        PRODUCTS
                      </th>
                      <th
                        className="align-middle"
                        scope="col"
                        style={{ width: "80px" }}
                      >
                        COLOR
                      </th>
                      <th
                        className="align-middle"
                        scope="col"
                        style={{ width: "150px" }}
                      >
                        SIZE
                      </th>
                      <th
                        className="align-middle text-right"
                        scope="col"
                        style={{ width: "300px" }}
                      >
                        PRICE
                      </th>
                      <th
                        className="align-middle pl-5"
                        scope="col"
                        style={{ width: "200px" }}
                      >
                        QUANTITY
                      </th>
                      <th
                        className="align-middle text-right"
                        scope="col"
                        style={{ width: "250px" }}
                      >
                        TOTAL
                      </th>
                      <th
                        className="align-middle text-right pr-0"
                        scope="col"
                      ></th>
                    </tr>
                  </thead>
                  <tbody id="cart-table-body">
                    {items.map((item, index) => (
                      <CartItem key={index} {...item} />
                    ))}
                    <tr className="cart-table-row">
                      <td
                        className="text-gray-800 font-semibold pl-0 text-xs"
                        colSpan="6"
                      >
                        Items subtotal :
                      </td>
                      <td
                        className="font-bold text-gray-700 text-right text-xs"
                        colSpan="2"
                      >
                        $828
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <Summary />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
