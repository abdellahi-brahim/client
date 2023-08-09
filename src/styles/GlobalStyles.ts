import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f6f8;  // Soft gray background
    color: #333;  // Dark gray text
    font-size: 16px;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
