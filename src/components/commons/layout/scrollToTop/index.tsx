import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const ScrollWrap = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  z-index: 1;
`;

const TopBtn = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: 600;
  outline: none;
  border: none;
  transition: background-color 0.2s;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  :hover {
    background-color: #436f59;
    color: #fff;
  }
`;

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <>
      {showButton && (
        <ScrollWrap>
          <TopBtn onClick={scrollToTop} type="button">
            TOP
          </TopBtn>
        </ScrollWrap>
      )}
    </>
  );
}
