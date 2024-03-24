"use client";
import { styled } from "styled-components";

// This is a page most external container.
export const MAIN = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  /* border: 2px solid blue; */
`;

// Sections UI
export const SECTION_FULLVP = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  /* padding-top: 5rem; */
`;

// Buttons
export const BTN = styled.button`
  border: none;
  outline: 0;
  padding: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 1px solid #000;
`;
