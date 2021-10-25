import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Application header with switch button at initial state', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Share-now vehicles List/i);
  const switchButton = screen.getByText(/Switch to free mode/i);
  expect(linkElement).toBeInTheDocument();
  expect(switchButton).toBeInTheDocument();
});

test('renders updated Application header on click switch button', () => {
  render(<App />);
  const switchtoFreeButton = screen.getByText(/Switch to free mode/i);
  
  expect(screen.queryByText(/My Share-now vehicles List/i)).toBeInTheDocument();
  expect(switchtoFreeButton).toBeInTheDocument();

  fireEvent.click(switchtoFreeButton);
  expect(screen.queryByText(/Switch to free mode/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/My Share-now vehicles List/i)).not.toBeInTheDocument();

  expect(screen.getByText(/Switch to share mode/i)).toBeInTheDocument();
});
