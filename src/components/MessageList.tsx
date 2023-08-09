import styled from 'styled-components';

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

export default MessageList;
