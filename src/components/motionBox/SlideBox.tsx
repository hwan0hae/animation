import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Box,
  ContentContainer,
  ContentTitle,
  RefreshBtn,
} from "../styled/styled";
import styled from "styled-components";

const SlideNumber = styled.div`
  position: absolute;
  font-size: 26px;
  font-weight: 800;
  color: #fab1a0;
`;

const NextBtn = styled(RefreshBtn)`
  right: 10px;
  bottom: 50%;
  transform: translateY(50%);
`;

const PrevBtn = styled(NextBtn)`
  left: 10px;
`;

const slideVar = {
  center: {
    scale: 1,
    x: 0,
    transition: { duration: 1 },
  },
  entry: (next: boolean) => {
    return {
      x: next ? 100 : -100,
      scale: 0,
    };
  },
  exit: (next: boolean) => {
    return {
      x: next ? -100 : 100,
      scale: 0,
      transition: {
        duration: 1,
      },
    };
  },
};

export default function SlideBox() {
  const [showing, setShowing] = useState(0);
  const [next, setNext] = useState<Boolean>(true);
  const onClickArrowBtn = (next: boolean) => {
    setNext(next);
    setShowing((cur) => (next ? cur + 1 : cur - 1));
    console.log("Click! and nextState:", next);
  };
  return (
    <ContentContainer bgColor="rgb(255,255,255),rgb(250, 177, 160)">
      <ContentTitle>Slide</ContentTitle>
      <AnimatePresence custom={next}>
        <Box
          custom={next}
          style={{ position: "absolute" }}
          variants={slideVar}
          initial="entry"
          animate="center"
          exit="exit"
          key={showing}
        >
          <SlideNumber>{showing}</SlideNumber>
        </Box>
      </AnimatePresence>
      <NextBtn onClick={() => onClickArrowBtn(true)}>
        <svg
          width={"100%"}
          height={"100%"}
          fill={"white"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </NextBtn>
      <PrevBtn onClick={() => onClickArrowBtn(false)}>
        <svg
          width={"100%"}
          height={"100%"}
          fill={"white"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </PrevBtn>
    </ContentContainer>
  );
}
