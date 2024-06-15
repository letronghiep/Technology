import React from 'react';

const CartItem = ({ image, link, name, color, size, price, quantity, total }) => (
  <tr className="cart-table-row">
    <td className="align-middle whitespace-nowrap py-0">
      <a className="block border border-gray-200 rounded-2" href={link}>
        <img src={image} alt={name} width="53" />
      </a>
    </td>
    <td className="products align-middle">
      <a className="font-semibold mb-0 line-clamp-2" href={link}>{name}</a>
    </td>
    <td className="color align-middle whitespace-nowrap text-sm text-gray-600">{color}</td>
    <td className="size align-middle whitespace-nowrap text-gray-400 text-sm font-semibold">{size}</td>
    <td className="price align-middle text-gray-600 text-sm font-semibold text-right">{price}</td>
    <td className="quantity align-middle text-sm pl-5">
      <div className="input-group flex-nowrap">
        <button className="btn btn-sm px-2" data-type="minus">-</button>
        <input className="form-control text-center bg-transparent border-0 px-0" type="number" min="1" value={quantity} aria-label="Quantity" />
        <button className="btn btn-sm px-2" data-type="plus">+</button>
      </div>
    </td>
    <td className="total align-middle font-bold text-gray-700 text-right">{total}</td>
    <td className="align-middle whitespace-nowrap text-right pr-0 pl-3">
      <button className="btn btn-sm text-gray-400 hover:text-gray-600">
        <i className="fas fa-trash"></i>
      </button>
    </td>
  </tr>
);


export default CartItem;
