/*
client component to wrap everything
*/

"use client";

import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyle } from "../_ui/globals";
import Navbar from "../components/navigation/Navbar";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Navbar />
      {children}
    </Provider>
  );
}
