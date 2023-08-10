const theme = {
  light: {
    colors: {
      background: '#FFFFFF',   // Pure white
      foreground: '#F2F2F2',  // A very light gray for elements like buttons or headers
      accent: '#BDBDBD',      // A medium gray for accent purposes
      muted: '#E5E5E5',       // A light gray for tertiary backgrounds or borders
      textPrimary: '#333333', // Almost black for main text
      textSecondary: '#7F7F7F', // Medium gray for secondary text
      userMessageBg: '#F9F9F9', // A slightly off-white for user messages
      botMessageBg: '#D6D6D6',  // A light gray for bot messages
      border: '#E0E0E0',       // A soft border color
    },
    spacing: {
      small: '8px',
      medium: '16px',
      large: '32px',
    },
    typography: {
      fontSize: '16px',
      fontFamily: "'Roboto', sans-serif",
    },
  },
  dark: {
    colors: {
      background: '#2C2C2C',   // Almost black
      foreground: '#3F3F3F',   // A very dark gray for elements like buttons or headers
      accent: '#6E6E6E',       // A medium-dark gray for accent purposes
      muted: '#4C4C4C',        // A darker gray for tertiary backgrounds or borders
      textPrimary: '#EAEDED',  // Off-white for main text in dark mode
      textSecondary: '#B5B5B5', // A lighter gray for secondary text in dark mode
      userMessageBg: '#363636', // A very dark gray for user messages in dark mode
      botMessageBg: '#505050',  // A neutral gray for bot messages in dark mode
      border: '#5A5A5A',        // A border color that complements the dark theme
    },
    spacing: {
      small: '8px',
      medium: '16px',
      large: '32px',
    },
    typography: {
      fontSize: '16px',
      fontFamily: "'Poppins', sans-serif",
    },
  },
};

export default theme;
