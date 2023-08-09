import styled from 'styled-components';

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  font-size: 1.5em;
`;

export default Header;
