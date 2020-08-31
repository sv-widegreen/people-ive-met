import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  const renderedAppComponent = render(<App />);
  expect(renderedAppComponent).toBeInTheDocument();
});
