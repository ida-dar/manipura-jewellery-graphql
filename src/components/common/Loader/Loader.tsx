import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  100% {
    transform: translate(-50%,-50%) rotate(-360deg) scale(1.4,1.4);
  }
`;

const shuffle = keyframes`
  50% {
    transform: scale(0.4,0.4) rotate(-90deg);
    border-radius: 50%;
  }
`;

const Figure = styled.figure`
  margin: 72px auto;
  border-radius: 150px;
  max-height: 150px;
  max-width: 150px;
  box-sizing: border-box;
  transform: translate(-50%, -50%) rotate(0deg) scale(1.4, 1.4);
  animation: ${rotation} 20s infinite linear;
`;

const Div = styled.div`
  &::after {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    box-sizing: border-box;
    left: 20px;
    top: 20px;
    animation: ${shuffle} 2s infinite;
  }

  &:nth-child(1) {
    transform: rotate(0deg);
  }
  &:nth-child(1)::after {
    animation-delay: -0.5s;
  }
  &:nth-child(2) {
    transform: rotate(45deg);
  }
  &:nth-child(2)::after {
    animation-delay: -1s;
  }
  &:nth-child(3) {
    transform: rotate(90deg);
  }
  &:nth-child(3)::after {
    animation-delay: -1.5s;
  }
  &:nth-child(4) {
    transform: rotate(135deg);
  }
  &:nth-child(4)::after {
    animation-delay: -2s;
  }
  &:nth-child(5) {
    transform: rotate(180deg);
  }
  &:nth-child(5)::after {
    animation-delay: -2.5s;
  }
  &:nth-child(6) {
    transform: rotate(225deg);
  }
  &:nth-child(6)::after {
    animation-delay: -3s;
  }
  &:nth-child(7) {
    transform: rotate(270deg);
  }
  &:nth-child(7)::after {
    animation-delay: -3.5s;
  }
  &:nth-child(8) {
    transform: rotate(315deg);
  }
  &:nth-child(8)::after {
    animation-delay: -4;
  }
`;

const Loader = () => {
  return (
    <Figure>
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
    </Figure>
  );
};

export default Loader;
