import styled from 'styled-components';

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  font-size: calc(${({ theme }) => theme.typography.fontSize} * 1.5);
`;

export default Header;
