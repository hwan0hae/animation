import { Box, ContentContainer, ContentTitle } from "../styled/styled";
import styled from "styled-components";
import { Circle as ClickCircle } from "./VariantsBox";
import { useState } from "react";
import { motion } from "framer-motion";

const Circle = styled(ClickCircle)`
  position: absolute;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default function ClickBox() {
  const [isClick, setIsClick] = useState(false);
  const onClick = () => setIsClick((cur) => !cur);
  return (
    <ContentContainer
      bgColor="rgb(0,0,0),rgb(255,255,255)"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <ContentTitle>Click</ContentTitle>
      {isClick ? (
        <Circle
          layoutId="circle"
          transition={{ duration: 1 }}
          style={{
            left: "20px",
          }}
        />
      ) : null}
      {!isClick ? (
        <Circle
          layoutId="circle"
          transition={{ duration: 1 }}
          style={{
            right: "20px",
          }}
        />
      ) : null}
    </ContentContainer>
  );
}
