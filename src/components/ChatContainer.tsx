import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px; 
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
`;

export default ChatContainer;
