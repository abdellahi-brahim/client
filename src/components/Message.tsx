import styled, { css } from 'styled-components';

const baseMessageStyle = css`
  margin: ${({ theme }) => theme.spacing.small} 0;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 8px;
`;

const UserMessage = styled.div`
  ${baseMessageStyle};
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.userMessage};
`;

const BotMessage = styled.div`
  ${baseMessageStyle};
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.botMessage};
`;

export { UserMessage, BotMessage };
