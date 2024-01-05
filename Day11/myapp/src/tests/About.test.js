import { render, screen } from '@testing-library/react';
import About from '../pages/about';

test('About_test_1', () => {
  render(<About />);
  const linkElement1 = screen.getByText(/SRINIVASAN R/i);
  expect(linkElement1).toBeInTheDocument();
});
test('About_test_2', () => {
  render(<About />);
  const linkElement2 = screen.getByText(/727822TUCS233/i);
  expect(linkElement2).toBeInTheDocument();
});