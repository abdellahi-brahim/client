import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-12px);
  }
  60% {
    transform: translateY(-6px);
  }
`;

const TypingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 12px;
  background-color: rgba(240, 240, 240, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(45deg, #6200ea, #b74eff);
  margin: 0 7px;
  animation: ${bounce} 1s infinite;
  transition: all 0.3s ease;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const TypingText = styled.span`
  margin-left: 15px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 0.9em;
  font-weight: 500;
`;

const TypingAnimation: React.FC = () => (
  <TypingContainer>
    <Dot />
    <Dot />
    <Dot />
    <TypingText>Groot is typing...</TypingText>
  </TypingContainer>
);

export default TypingAnimation;
