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
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 1rem 0;
`;

export const CategoryTitle = styled.div`
  font-weight: 600;
  text-transform: uppercase;
`;

export const ProductsCardsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductCard = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  color: inherit;
  border: 2px solid #cbcbcb;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border: 2px solid #141415;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin: 0 auto;

  img {
    object-fit: contain;
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
