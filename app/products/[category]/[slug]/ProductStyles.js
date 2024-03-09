"use client";

import { styled } from "styled-components";

export const ProductContent = styled.div`
  border: 2px solid red;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;

  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }
`;

export const ProductName = styled.h2`
  /* padding: 1rem 0; */
  padding-top: 1rem;
  font-weight: 600;
  font-size: 2rem;
`;
