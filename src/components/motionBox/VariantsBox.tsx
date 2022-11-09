import {
  Box,
  ContentContainer,
  ContentTitle,
  RefreshBtn,
} from "../styled/styled";
import { motion } from "framer-motion";
import styled from "styled-components";
import { AnimationBoxProps as VariantsBoxProps } from "./AnimationBox";

export const Circle = styled(motion.div)`
  background: white;
  width: 35px;
  height: 35px;
  border-radius: 25px;
`;

const variants2 = {
  start: { scale: 0, opacity: 0 },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const cicreVariants = {
  start: { opacity: 0, y: 10 },
  end: { opacity: 1, y: 0 },
};

function VariantsBox({ onClickRefresh, refresh }: VariantsBoxProps) {
  return (
    <ContentContainer bgColor="#e09, #d0e">
      <ContentTitle>Variants</ContentTitle>
      <Box
        isDisplay={true}
        style={{ background: "rgba(255,255,255,0.15)" }}
        variants={variants2}
        initial="start"
        animate="end"
        key={refresh[1]}
      >
        <Circle variants={cicreVariants} />
        <Circle variants={cicreVariants} />
        <Circle variants={cicreVariants} />
        <Circle variants={cicreVariants} />
      </Box>
      <RefreshBtn onClick={() => onClickRefresh(1)}>
        <svg
          width={"100%"}
          height={"100%"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill={"white"}
        >
          <path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" />
        </svg>
      </RefreshBtn>
    </ContentContainer>
  );
}

export default VariantsBox;
