import { render, screen } from '@testing-library/react';
import App from './App';

test('title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Translator/);
  expect(linkElement).toBeInTheDocument();
});
