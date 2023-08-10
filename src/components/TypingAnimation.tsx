import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const TypingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: gray;
  margin: 0 5px;
  animation: ${bounce} 1s infinite;
`;

const TypingText = styled.span`
  margin-left: 10px;
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
