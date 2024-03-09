"use client";
import Link from "next/link";
import { styled } from "styled-components";

/*

styles for products in a particular category

*/

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid green;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryTitle = styled.div`
  font-weight: 600;
  text-transform: uppercase;
`;

export const ProductsCardsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  border: 2px solid red;
`;

export const ProductCard = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  color: inherit;
  border: 2px solid #cbcbcb;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border: 2px solid #141415;
  }
`;

export const ProductImage = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;

  img {
    object-fit: cover;
  }
`;

export const ProductName = styled.h3`
  color: #595959;
`;

export const ProductPrice = styled.h2`
  color: #141415;
  font-weight: 600;
  font-size: 1.4rem;
`;
