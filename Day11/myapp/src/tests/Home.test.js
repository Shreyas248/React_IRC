import { render, screen } from '@testing-library/react';
import Home from '../pages/home';

test('Home_test_1', () => {
  render(<Home />);
  const linkElement1 = screen.getByText(/Sri Krishna College Of Technology/i);
  expect(linkElement1).toBeInTheDocument();
});
test('Home_test_2', () => {
  render(<Home />);
  const linkElement2 = screen.getByText(/React/i);
  expect(linkElement2).toBeInTheDocument();
});