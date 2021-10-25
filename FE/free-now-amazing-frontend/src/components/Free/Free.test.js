import { render, screen } from '@testing-library/react';
import Free from './Free';

test('renders a Free-now element', () => {
  render(<Free />);
  expect(screen.getByText(/Free-now/i)).toBeInTheDocument();
});

test('renders a Free-now element with its child', () => {
  render(<Free><p>This is a child</p></Free>);
  expect(screen.getByText(/This is a child/i)).toBeInTheDocument();
});

