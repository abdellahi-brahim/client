import styled from 'styled-components';

const TextInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

export default TextInput;