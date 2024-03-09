"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { styled } from "styled-components";

export default function CartDrawer() {
  const { quantity } = useSelector((state) => state.cart);

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 450 }}
      role="presentation"
      onClick={(event) => {
        event.stopPropagation(); // Prevent event from bubbling up
      }}
      onKeyDown={(event) => {
        event.stopPropagation(); // Prevent event from bubbling up
      }}
    >
      {/* cart */}
      <Cart />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>
        <CartIcon>
          <MdOutlineShoppingCart size={24} />
          <Qty>{quantity}</Qty>
        </CartIcon>
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}

const CartIcon = styled.div`
  position: relative;
  color: #000 !important;
  font-weight: 600;
`;

const Qty = styled.span`
  color: #000 !important;
  position: absolute;
  right: -0.8rem;
  top: -1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;
