import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('cheking the value of P tag',()=>{
  render(<App/>);
  const tagPValue = screen.getByRole('heading',{name:/Our first react app/i});
  expect(tagPValue).toBeInTheDocument();
});