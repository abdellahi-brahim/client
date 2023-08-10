import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chat header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Chat with Bot/i);
  expect(headerElement).toBeInTheDocument();
});
