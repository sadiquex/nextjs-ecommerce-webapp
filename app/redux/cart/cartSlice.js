import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  //   initial items in cart
  initialState: {
    itemsInCart: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    // add item to cart
    addProduct: (state, action) => {
      const existingProductIndex = state.itemsInCart.findIndex(
        (product) => product._id === action.payload._id
      );

      if (existingProductIndex !== -1) {
        // if the product is already in the cart, increment its quantity
        state.itemsInCart[existingProductIndex].quantity += 1;
      } else {
        // if the product is not in the cart, add it to the cart
        state.itemsInCart.push({
          ...action.payload,
          quantity: 1,
        });
      }

      state.quantity += 1;
      state.total += action.payload.price;
    },

    // // remove item from cart
    // removeProduct: (state, action) => {
    //   state.itemsInCart = state.itemsInCart.filter(
    //     (product) => product._id !== action.payload._id
    //   );
    //   state.quantity -= 1; // decrement quantity by 1
    //   // subtract the (price * quantity) from the total
    //   state.total -= action.payload.price * action.payload?.quantity;
    // },

    removeProduct: (state, action) => {
      const removedItem = state.itemsInCart.find(
        (product) => product._id === action.payload._id
      );

      if (removedItem) {
        // decrease total quantity by the quantity of the removed item
        state.quantity -= removedItem.quantity;
        // decrease total by (price * quantity) of the removed item
        state.total -= removedItem.price * removedItem.quantity;

        // Remove the item from the cart
        state.itemsInCart = state.itemsInCart.filter(
          (product) => product._id !== action.payload._id
        );
      }
    },

    // increase item quantity in cart
    increaseQuantity: (state, action) => {
      // find the item with the same index as the id of the payload
      const item = state.itemsInCart.findIndex(
        (product) => product._id === action.payload._id
      );
      // increment the item quantity
      state.itemsInCart[item].quantity += 1;
      state.total += action.payload.price;
    },
    // decrease item quantity in cart
    decreaseQuantity: (state, action) => {
      const index = state.itemsInCart.findIndex(
        (product) => product.stateId === action.payload.stateId
      );
      if (state.itemsInCart[index].quantity > 1) {
        state.itemsInCart[index].quantity -= 1;
        state.quantity -= 1;
        state.total -= action.payload.price;
      }
    },
    // clear cart items
    emptyCart: (state) => {
      state.quantity = 0;
      state.itemsInCart = [];
      state.total = 0;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
