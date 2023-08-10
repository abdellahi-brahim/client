import styled from 'styled-components';

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  margin-left: ${({ theme }) => theme.spacing.small};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.muted};
    &:hover {
      background-color: ${({ theme }) => theme.colors.muted};
    }
  }
`;

export default SendButton;
