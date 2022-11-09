import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  height: auto;
  width: 100vw;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 70px;
  gap: 25px;
  position: relative;
`;

export const ContentContainer = styled(motion.div)<{ bgColor?: string }>`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: linear-gradient(135deg, ${(props) => props.bgColor});
`;

export const Box = styled(motion.div)<{ isDisplay?: boolean }>`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: ${(props) => (props.isDisplay ? "grid" : "flex")};
  grid-template-columns: ${(props) =>
    props.isDisplay ? "repeat(2,1fr)" : "none"};
  place-items: center;
  justify-content: center;
`;

export const ContentTitle = styled.h1`
  color: white;
  z-index: 1000;
  position: absolute;
  left: 20px;
  bottom: 20px;
  font-size: 20px;
  font-weight: 800;
`;

export const RefreshBtn = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: none;
  border: none;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;

  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const DragTarget = styled(Box)`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
