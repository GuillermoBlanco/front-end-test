import { render, screen } from '@testing-library/react';
import Share from './Share';

// const freshList = ['The fast', 'The slow', 'The smooth'];

test('renders a Share-now element', () => {
  render(<Share />);
  expect(screen.getByText(/Share-now/i)).toBeInTheDocument();
});

test('renders a Share-now element with its child', () => {
  render(<Share><p>This is a child</p></Share>);
  expect(screen.getByText(/This is a child/i)).toBeInTheDocument();
});

