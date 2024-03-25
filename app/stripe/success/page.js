import { MAIN } from "@/app/_ui/uiContainers";
import React from "react";
import {
  ContinueShopping,
  SuccessTitle,
  SuccessWrapper,
} from "./SuccessStyles";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function StripeSuccessPage() {
  return (
    <MAIN>
      <SuccessWrapper>
        <FaCheckCircle size={100} style={{ color: "green" }} />
        <SuccessTitle>Yay! Order Received..</SuccessTitle>
        <Link href={"/products"}>
          <ContinueShopping>Continue Shopping</ContinueShopping>
        </Link>
      </SuccessWrapper>
    </MAIN>
  );
}
