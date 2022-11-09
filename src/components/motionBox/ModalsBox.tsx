import { Box, ContentContainer, ContentTitle } from "../styled/styled";
import styled from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const ModalContainer = styled.div`
  width: 70vw;
  height: 600px;
  position: relative;
  background: linear-gradient(135deg, rgb(0, 120, 220), rgb(205, 150, 205));
  border-radius: 20px;
  padding: 40px;
`;

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const ModalBox = styled(Box)`
  width: auto;
  height: auto;

  cursor: pointer;
`;

const Overay = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

export default function ModalsBox() {
  const [id, setId] = useState<null | string>(null);
  return (
    <ModalContainer>
      <ContentTitle style={{ bottom: 10 }}>Modal</ContentTitle>
      <AnimatePresence>
        <Grid>
          {[1, 2, 3, 4].map((n) => (
            <ModalBox onClick={() => setId(n + "")} key={n} layoutId={n + ""} />
          ))}
        </Grid>
      </AnimatePresence>

      {id ? (
        <Overay
          onClick={() => setId(null)}
          variants={overlay}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Box style={{ width: 400, height: 200 }} layoutId={id} />
        </Overay>
      ) : null}
    </ModalContainer>
  );
}
