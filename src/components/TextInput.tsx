import styled from 'styled-components';

const TextInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  max-width: calc(100% - 100px);

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #f2f2f2;
  }
`;

export default TextInput;
