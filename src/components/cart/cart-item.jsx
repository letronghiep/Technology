import { Add, Delete, Remove } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "../../store/cart/cartSlice";

function CartItem({ item, onRemove, onQuantityChange }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
    onQuantityChange(item.id, parseInt(event.target.value));
  };
  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    console.log(item);
    dispatch(addItemToCart({ productToAdd: item, quantity: 1 }));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(removeItemFromCart({ productToDecrease: item, quantity: 1 }));
    }
  };

  const handleRemove = () => {
    onRemove(item);
  };

  return (
    <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
      <div className="flex items-center">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-12 h-12 object-contain rounded-md"
        />
        <div className="ml-4">
          <Link
            to={`/products/${item.slug}`}
            className="font-medium  text-[14px]"
          >
            {item.name}
          </Link>
        </div>
      </div>

      <div className="flex items-center text-[14px]">
        <div className="flex items-center gap-x-2">
          <button
            onClick={handleDecrease}
            className="px-2 py-1"
            disabled={quantity <= 1}
          >
            <Remove />
          </button>
          <input
            className="border border-gray-300 px-2 py-1 rounded-md text-center w-10 text-[14px]"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button onClick={handleIncrease} className="px-2 py-1">
            <Add />
          </button>
        </div>

        <div className="ml-4 font-bold">
          {item.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </div>

        <button
          onClick={handleRemove}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          <Delete />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
