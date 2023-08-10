import styled from 'styled-components';

const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.small};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export default InputArea;
