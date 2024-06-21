import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  cartItems: [],
};
const addToCart = (cartItems, productToAdd, value) => {
  const existCartItems = cartItems.find(
    (cartItem) => cartItem._id === productToAdd._id
  );
  console.log("PRoduct", existCartItems);
  if (existCartItems) {
    return cartItems.map((cartItem) =>
      cartItem._id === productToAdd._id
        ? { ...cartItem, quantity: cartItem.quantity + value }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: value }];
};
const handleQuantityCart = (cartItems, itemId, newQuantity) => {
  return cartItems.map((item) =>
    item._id === itemId ? { ...item, quantity: newQuantity } : item
  );
};
const decreaseFromCart = (cartItems, productToDecrease, value) => {
  const existCartItems = cartItems.find(
    (cartItem) => cartItem._id === productToDecrease._id
  );
  if (!existCartItems) return cartItems;
  return cartItems.map((cartItem) =>
    cartItem._id === productToDecrease._id
      ? { ...cartItem, quantity: cartItem.quantity - value }
      : cartItem
  );
};

const clearFromCart = (cartItems, productToClear) => {
  console.log(productToClear);
  return cartItems.filter((cartItem) => cartItem._id !== productToClear._id);
};
const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      const { productToAdd, quantity } = action.payload;
      console.log("AS", productToAdd);
      state.cartItems = addToCart(state.cartItems, productToAdd, quantity);
    },
    handleQuantityItem(state, action) {
      const { itemId, quantity } = action.payload;
      state.cartItems = handleQuantityCart(state.cartItems, itemId, quantity);
    },
    removeItemFromCart(state, action) {
      const { productToDecrease, quantity } = action.payload;

      state.cartItems = decreaseFromCart(
        state.cartItems,
        productToDecrease,
        quantity
      );
    },
    clearItemFromCart(state, action) {
      state.cartItems = clearFromCart(state.cartItems, action.payload);
    },
    clearCartItems(state) {
      state.cartItems = [];
    },
  },
});
export const {
  addItemToCart,
  removeItemFromCart,
  handleQuantityItem,
  clearItemFromCart,
  clearCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
