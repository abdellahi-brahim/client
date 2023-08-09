import styled from 'styled-components';

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  margin-left: ${({ theme }) => theme.spacing.small};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4a00d1;
  }
`;

export default SendButton;
