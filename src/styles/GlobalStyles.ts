import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.fontSize};
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
