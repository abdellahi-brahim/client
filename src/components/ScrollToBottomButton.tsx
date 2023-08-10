import React from 'react';
import styled from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';

interface ScrollToBottomButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

const StyledButton = styled.button<ScrollToBottomButtonProps>`
  position: fixed;
  bottom: 80px;
  right: 35px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5); 
  color: white;
  border: none;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const ScrollToBottomButton: React.FC<ScrollToBottomButtonProps> = ({ onClick, isVisible }) => {
  return (
    <StyledButton onClick={onClick} isVisible={isVisible}>
      <FaArrowDown />
    </StyledButton>
  );
};

export default ScrollToBottomButton;
