"use client";
import { MAIN } from "@/app/_ui/uiContainers";
import { styled } from "styled-components";

export const PageLoadingWrapper = styled(MAIN)`
  height: 100vh;
`;

export const NewtonCradleLoader = styled.div`
  .cradle {
    display: flex;
    /* column-gap: 30px; */
    border-top: 10px solid #141415;
  }

  .cradle span {
    display: block;
    width: 3px;
    height: 160px;
    background: #141415;
    margin: 0 29px;
    position: relative;
    transform-origin: top;

    /* use circles as the before element of the span */
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 60px;
      height: 60px;
      background: #141415;
      border-radius: 50%;
      transform: translateX(-50%);
    }
  }
  /* left arm */
  .cradle span:nth-child(1) {
    animation: leftArm 2s ease-in infinite;
  }
  /* right arm */
  /* wait 1s before starting */
  .cradle span:nth-child(5) {
    animation: rightArm 2s ease-in infinite 1s;
  }
  @keyframes leftArm {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(60deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  /* wait for left arm to finish before starting */
  @keyframes rightArm {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-60deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
