import styled from 'styled-components';

const TextInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  max-width: calc(100% - 100px);
  font-color: ${({ theme }) => theme.colors.textPrimary};

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.muted};
  }
`;

export default TextInput;
