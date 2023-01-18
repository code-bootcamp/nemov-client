import { keyframes } from "@emotion/react";

export const SlideRight = keyframes`
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100px);
            transform: translateX(100px);
  }
`;

// animation: ${SlideRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

export const SlideTop = keyframes`
0% {
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
`;

// animation: ${SlideTop} 0.8s ease-in-out both;

export const SlideBottom = keyframes`
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`;

// animation: ${SlideBottom} 0.8s ease-in-out both;
