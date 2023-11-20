import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter"; // Make sure to import the correct path for your Counter component

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const cm = screen.getByText('Counter');
  expect(cm).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const ic = screen.getByTestId('count');
  expect(ic).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const ib = screen.getByText('+');
  const cd = screen.getByTestId('count');

  fireEvent.click(ib);
  expect(cd).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const db = screen.getByText('-');
  const cd = screen.getByTestId('count');

  fireEvent.click(db);
  expect(cd).toHaveTextContent('-1');
});
