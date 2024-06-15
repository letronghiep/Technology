import React from "react";

const Summary = () => (
  <div className="card">
    <div className="card-body">
      <div className="flex justify-between items-center mb-3">
        <h3 className="card-title mb-0">Summary</h3>
        <a className="btn btn-link p-0" href="#!">
          Edit cart
        </a>
      </div>
      <select className="form-select mb-3" aria-label="delivery type">
        <option value="cod">Cash on Delivery</option>
        <option value="card">Card</option>
        <option value="paypal">Paypal</option>
      </select>
      <div>
        <div className="flex justify-between">
          <p className="text-gray-600 font-semibold">Items subtotal :</p>
          <p className="text-gray-800 font-semibold">$691</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600 font-semibold">Discount :</p>
          <p className="text-red-500 font-semibold">-$59</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600 font-semibold">Tax :</p>
          <p className="text-gray-800 font-semibold">$126.20</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600 font-semibold">Subtotal :</p>
          <p className="text-gray-800 font-semibold">$665</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600 font-semibold">Shipping Cost :</p>
          <p className="text-gray-800 font-semibold">$30</p>
        </div>
      </div>
      <div className="input-group mb-3">
        <input className="form-control" type="text" placeholder="Voucher" />
        <button className="btn btn-primary px-5">Apply</button>
      </div>
      <div className="flex justify-between border-y border-dashed py-3 mb-4">
        <h4 className="mb-0">Total :</h4>
        <h4 className="mb-0">$695.20</h4>
      </div>
      <button className="btn btn-primary w-full">
        Proceed to check out
        <i className="fas fa-chevron-right ml-1 text-xs"></i>
      </button>
    </div>
  </div>
);

export default Summary;
