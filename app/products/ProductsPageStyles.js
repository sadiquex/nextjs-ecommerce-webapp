"use client";
import Link from "next/link";
import { styled } from "styled-components";

// styling for all products' page

export const CategoriesContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
`;

export const CategoryTitleAndArrows = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 4px;
  }
`;

export const CategoriesCardsContainer = styled.div`
  padding: 0px 1rem;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  gap: 20px;

  // hide the scrolbars
  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export const CategoryCard = styled(Link)`
  position: relative;
  height: 400px;
  min-width: 280px;
  text-decoration: none;
  font-family: inherit;
  color: inherit;

  &:hover button {
    text-decoration: underline;
  }

  background-image: ${({ bgimage }) => `url(${bgimage})`};
  background-position: center;
  background-size: cover;
  overflow: hidden;

  &:before {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  &:hover:before {
    opacity: 1;
  }
`;

export const CategoryName = styled.button`
  padding: 0.5rem 2rem;
  background: #fff;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.4rem;
`;
