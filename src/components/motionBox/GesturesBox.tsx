import { Box, ContentContainer, ContentTitle } from "../styled/styled";

const variants3 = {
  start: { scale: 1 },
  hover: { scale: 1.3, rotateZ: 90 },
  tap: { scale: 1, borderRadius: "50px" },
};

function GesturesBox() {
  return (
    <ContentContainer bgColor="rgb(100,200,300),rgb(300,200,100)">
      <ContentTitle>Gestures</ContentTitle>
      <Box
        variants={variants3}
        initial="start"
        whileHover="hover"
        whileTap="tap"
      />
    </ContentContainer>
  );
}

export default GesturesBox;
