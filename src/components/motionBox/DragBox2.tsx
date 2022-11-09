import {
  Box,
  ContentContainer,
  ContentTitle,
  DragTarget,
} from "../styled/styled";
import { useRef } from "react";
import { useMotionValue, useTransform } from "framer-motion";

export default function DragBox2() {
  const boxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateZ = useTransform(x, [-50, 50], [-360, 360]);
  const boxBgColor = useTransform(
    y,
    [-50, 0, 50],
    ["rgba(100,20,220,1)", "rgba(255,255,255,0.3)", "rgba(255,192,203,1)"]
  );
  return (
    <ContentContainer bgColor="rgb(255,200,50),rgb(235,185,100)">
      <ContentTitle>Drag2</ContentTitle>
      <Box style={{ backgroundColor: boxBgColor }} ref={boxRef}>
        <DragTarget
          drag
          dragSnapToOrigin
          dragElastic={0.1}
          dragConstraints={boxRef}
          style={{ x, y, rotateZ, backgroundColor: "rgb(255,255,255)" }}
        />
        {/* transition을 주려면 rgb(숫자)값으로 줘야함 */}
      </Box>
    </ContentContainer>
  );
}
