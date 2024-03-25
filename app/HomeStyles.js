"use client";

import { styled } from "styled-components";

export const PageHeader = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #fff;
  position: relative;
  z-index: -10;
  background: url("https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-attachment: fixed;

  /* background-position: center;
  background-repeat: no-repeat;*/

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
`;

export const PageDescription = styled.h3`
  font-size: 1.5rem;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const StoryWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  gap: 3rem;
  align-items: center;
  height: 600px;
  width: 90%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: 4rem 1rem;
  }
`;

export const StoryImage = styled.div`
  position: relative;
  flex: 1;
  min-height: 100%;
  min-height: 600px;
  width: 100%;

  img {
    object-fit: cover;
  }
`;

export const StoryText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const StoryTitle = styled.h1`
  font-size: 2.5rem;
`;

export const StoryDescription = styled.p`
  line-height: 1.2;
  font-size: 1.1rem;
`;

export const OurStrongHold = styled.p`
  font-size: 2.6rem;
  line-height: 1.2;
  background: #2b2b2b;
  color: #fff;
  width: 90%;
  text-align: center;
  padding: 4rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    width: 100%;
  }
`;

export const OurValuesWrapper = styled.div`
  padding: 2rem 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  gap: 1rem;
`;

export const ValueCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    font-size: 1.4rem;
  }

  .description {
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
