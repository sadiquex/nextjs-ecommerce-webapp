"use client";

import { styled } from "styled-components";

export const ProductContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  padding: 3rem 0;

  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }
`;

export const ProductName = styled.h2`
  padding-top: 1rem;
  font-weight: 600;
  font-size: 2rem;
  width: 60%;
  text-align: center;

  @media (max-width: 768px) {
  }
`;
