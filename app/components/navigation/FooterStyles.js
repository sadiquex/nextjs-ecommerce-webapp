"use client";

import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  background: #2b2b2b;
  color: #fff;
  padding: 3rem 0;
  margin-top: auto;

  width: 100%;
`;

export const FooterContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 16px;

  & > * {
    cursor: pointer;
    :hover {
      color: pink;
      transform: scale(1.2);
    }
  }
`;

export const Copyright = styled.p`
  font-size: 12px;
  color: #ccc;
`;
