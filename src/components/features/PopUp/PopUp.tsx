import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styled from 'styled-components';

const StyledPopup = styled(Popup)`
  &-content {
    width: 50vw;
    text-align: center;
    padding: 64px 24px 32px 24px;
  }
`;

const Button = styled.button`
  letter-spacing: 0.45em;
  line-height: 2.4rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  background: none;
  border: none;
  margin: 24px;
`;

const PopUp = ({ content, open, closeModal }: any) => {
  return (
    <StyledPopup open={open} modal lockScroll nested>
      <div>
        <div>{content}</div>
        <Button onClick={closeModal}>close</Button>
      </div>
    </StyledPopup>
  );
};

export default PopUp;
