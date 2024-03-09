"use client";

import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cart/cartSlice";

export default function AddToCart({ product }) {
  const dispatch = useDispatch();

  //   dispatch a function to add received prop(product) to the cart
  const handleAddToCart = () => {
    dispatch(addProduct({ ...product }));
  };

  return <button onClick={handleAddToCart}>Add To Cart</button>;
}
