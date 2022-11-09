import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Box, ContentContainer, ContentTitle } from "../styled/styled";

function ScrollBox() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.2]);
  // useEffect(() => {
  //   scrollYProgress.onChange(() => console.log(scrollYProgress.get()));
  // }, [scrollYProgress]);
  return (
    <ContentContainer bgColor="rgb(10,20,200),rgb(125,125,250)">
      <ContentTitle>Scroll</ContentTitle>
      <Box style={{ scale, backgroundColor: "rgba(255,255,255,0.1)" }}>
        <Box style={{ scaleY: scrollYProgress, transformOrigin: "bottom" }} />
      </Box>
    </ContentContainer>
  );
}

export default ScrollBox;
