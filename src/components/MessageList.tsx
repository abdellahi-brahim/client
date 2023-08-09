import styled from 'styled-components';

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export default MessageList;
