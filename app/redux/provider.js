/*

client component to wrap everything for the root layout
*/

"use client";

import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyle } from "../_ui/globals";
import Navbar from "../components/navigation/Navbar";
import StyledComponentsRegistry from "../_lib/registry";
// library to handle cart and stripe
import { CartProvider } from "use-shopping-cart";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Navbar />
      <StyledComponentsRegistry>
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
          successUrl="http://localhost:3000/stripe/success"
          cancelUrl="http://localhost:3000/stripe/error"
          currency="USD"
          billingAddressCollection={true}
          shouldPersist={true}
          language="en-US"
        >
          {children}
        </CartProvider>
      </StyledComponentsRegistry>
    </Provider>
  );
}
