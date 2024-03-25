"use client";
import { BTN } from "@/app/_ui/uiContainers";
import { styled } from "styled-components";

export const SuccessWrapper = styled.div`
  padding: 4rem 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

export const SuccessTitle = styled.h2`
  font-weight: 600;
  font-size: 2.4rem;
`;

export const ContinueShopping = styled(BTN)`
  background: transparent;
  color: green;
  border: 2px solid green;
  font-weight: 600;

  &:hover {
    background: green;
    color: #fff;
  }
`;
