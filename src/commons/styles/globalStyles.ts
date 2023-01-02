import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { deepGreen } from "./colorPalettes";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Arita-dotum-Medium";
  }

  @media (max-width: 1300px) {
    html {
      font-size: 14px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
  }

  ul,
  li,
  p {
    margin: 0;
    padding: 0;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid ${deepGreen};
  }

  button {
    text-align: center;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }

  img {
    object-fit: cover;
  }

  @font-face {
    font-family: "Arita-dotum-Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Arita-dotum-Medium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT-Bold";
    src: url("/fonts/SUIT-Bold.ttf");
  }

  @font-face {
    font-family: "SUIT-ExtraBold";
    src: url("/fonts/SUIT-ExtraBold.ttf");
  }

  @font-face {
    font-family: "SUIT-ExtraLight";
    src: url("/fonts/SUIT-ExtraLight.ttf");
  }

  @font-face {
    font-family: "SUIT-Heavy";
    src: url("/fonts/SUIT-Heavy.ttf");
  }

  @font-face {
    font-family: "SUIT-Light";
    src: url("/fonts/SUIT-Light.ttf");
  }

  @font-face {
    font-family: "SUIT-Medium";
    src: url("/fonts/SUIT-Medium.ttf");
  }

  @font-face {
    font-family: "SUIT-Regular";
    src: url("/fonts/SUIT-Regular.ttf");
  }

  @font-face {
    font-family: "SUIT-SemiBold";
    src: url("/fonts/SUIT-SemiBold.ttf");
  }

  @font-face {
    font-family: "SUIT-Thin";
    src: url("/fonts/SUIT-Thin.ttf");
  }
`;

export const GlobalWrapper = styled.main`
  width: 100%;
  padding: 3%;
  max-width: 1300px;
`;

export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
