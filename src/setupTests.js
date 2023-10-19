// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Section2 from './components/Section2';

test('renders the Memory Game component', () => {
  const { getByText } = render(<Section2 />);
  const gameTitle = getByText('Number Memory Game');
  expect(gameTitle).toBeInTheDocument();
});