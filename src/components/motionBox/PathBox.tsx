import {
  Box,
  ContentContainer,
  ContentTitle,
  RefreshBtn,
} from "../styled/styled";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimationBoxProps as PathBoxProps } from "./AnimationBox";

const Svg = styled(motion.svg)`
  width: 70px;
  height: 70px;
  stroke: white;
  stroke-width: 10px;
`;

const pathVar = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
    transition: { default: { duration: 2 }, fill: { duration: 2, delay: 0.5 } },
  },
};

export default function PathBox({ onClickRefresh, refresh }: PathBoxProps) {
  return (
    <ContentContainer bgColor="rgb(100,200,200),rgb(0,200,80)">
      <ContentTitle>Path</ContentTitle>
      <Box style={{ backgroundColor: "rgba(255,255,255,0.3)" }}>
        <Svg viewBox="0 0 512 512" key={refresh[2]}>
          <motion.path
            variants={pathVar}
            initial="start"
            animate="end"
            d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
          />
        </Svg>
      </Box>

      <RefreshBtn onClick={() => onClickRefresh(2)}>
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
