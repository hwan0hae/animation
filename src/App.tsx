import { useState } from "react";
import styled from "styled-components";
import AnimationBox from "./components/motionBox/AnimationBox";
import ClickBox from "./components/motionBox/ClickBox";
import DragBox from "./components/motionBox/DragBox";
import DragBox2 from "./components/motionBox/DragBox2";
import GesturesBox from "./components/motionBox/GesturesBox";
import ModalsBox from "./components/motionBox/ModalsBox";
import PathBox from "./components/motionBox/PathBox";
import ScrollBox from "./components/motionBox/ScrollBox";
import SlideBox from "./components/motionBox/SlideBox";
import VariantsBox from "./components/motionBox/VariantsBox";

import {
  Container,
  ContentContainer,
  Wrapper,
} from "./components/styled/styled";

function App() {
  const [refresh, setRefresh] = useState([0, 0, 0]);
  const onClickRefresh = (index: number) => {
    setRefresh((cur) => {
      const result = [...cur];
      result[index] = result[index] + 1;
      console.log(result);
      return result;
    });
  };
  return (
    <Wrapper>
      <Container>
        {/* Animation */}
        <AnimationBox onClickRefresh={onClickRefresh} refresh={refresh} />
        {/* Variants */}
        <VariantsBox onClickRefresh={onClickRefresh} refresh={refresh} />
        {/* Gestures */}
        <GesturesBox />
        {/* Drag */}
        <DragBox />
        {/* Drag2 */}
        <DragBox2 />
        {/* Scroll */}
        <ScrollBox />
        {/* Slide */}
        <SlideBox />
        {/* Path */}
        <PathBox onClickRefresh={onClickRefresh} refresh={refresh} />
        {/* Click */}
        <ClickBox />
        {/* Modal */}
        <ModalsBox />
      </Container>
    </Wrapper>
  );
}

export default App;
