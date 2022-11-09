import {
  Box,
  ContentContainer,
  ContentTitle,
  DragTarget,
} from "../styled/styled";
import { useRef } from "react";

function DragBox() {
  const boxRef = useRef<HTMLDivElement>(null);
  return (
    <ContentContainer bgColor="rgb(200,200,255),rgb(100,30,150)">
      <ContentTitle>Drag</ContentTitle>
      <Box style={{ backgroundColor: "rgba(255,255,255,0.15)" }} ref={boxRef}>
        <DragTarget
          drag
          dragElastic={0.2}
          dragConstraints={boxRef}
          whileDrag={{ backgroundColor: "rgb(100,80,150)" }}
        />
        {/* transition을 주려면 rgb(숫자)값으로 줘야함 */}
      </Box>
    </ContentContainer>
  );
}

export default DragBox;
