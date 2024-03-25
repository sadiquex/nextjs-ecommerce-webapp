import { MAIN } from "@/app/_ui/uiContainers";
import React from "react";
import {
  ContinueShopping,
  SuccessTitle,
  SuccessWrapper,
} from "../success/SuccessStyles";
import Link from "next/link";
import { MdCancel } from "react-icons/md";

export default function StripeErrorPage() {
  return (
    <MAIN>
      <SuccessWrapper>
        <MdCancel size={100} style={{ color: "red" }} />
        <SuccessTitle>Oops! An error occured...</SuccessTitle>
        <Link href={"/products"}>
          <ContinueShopping>Continue Shopping</ContinueShopping>
        </Link>
      </SuccessWrapper>
    </MAIN>
  );
}
