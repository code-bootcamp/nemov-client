import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { deepGreen } from "./colorPalettes";
import { mobile, tablet } from "./breakPoints";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Arita-Medium";
  }

  @media ${tablet} {
    html {
      font-size: 12px;
    }
  }

  @media ${mobile} {
    html {
      font-size: 10px;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  // bold
  @font-face {
    font-family: "Arita-Bold";
    src: url("/fonts/arita-dotum-Bold.woff");
  }

  // semi-bold
  @font-face {
    font-family: "Arita-SemiBold";
    src: url("/fonts/arita-dotum-SemiBold.woff");
  }

  // medium
  @font-face {
    font-family: "Arita-Medium";
    src: url("/fonts/arita-dotum-Medium.woff");
  }

  // light
  @font-face {
    font-family: "Arita-Light";
    src: url("/fonts/arita-dotum-Light.woff");
  }

  // thin
  @font-face {
    font-family: "Arita-Thin";
    src: url("/fonts/arita-dotum-Thin.woff");
  }
`;

// 글로벌 css
export const bold = css`
  font-family: "Arita-Bold";
`;

export const semiBold = css`
  font-family: "Arita-SemiBold";
`;

export const light = css`
  font-family: "Arita-Light";
`;

export const thin = css`
  font-family: "Arita-Thin";
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

// 글로벌 style
export const GlobalWrapper = styled.main`
  width: 100%;
  padding: 3%;
  max-width: 1200px;
`;
