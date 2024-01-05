import { render, screen,fireEvent } from '@testing-library/react';
import Counter from '../components/counter';

test('Count_test_Default', () => {
  render(<Counter />);
  const countElement = screen.getByText(/0/);
  expect(countElement).toBeInTheDocument();
});

test('Count_test_Increment', () => {
  render(<Counter />);
  const inc = screen.getByText('+');
  const countElement = screen.getByText(/0/);
  fireEvent.click(inc);
  expect(countElement).toHaveTextContent('1');
});

test('Count_test_Decrement', () => {
  render(<Counter />);
  const dec = screen.getByText('-');
  const countElement = screen.getByText(/0/);
  fireEvent.click(dec);
  expect(countElement).toHaveTextContent('-1');
});