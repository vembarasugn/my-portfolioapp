import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders blog link', () => {
  render(<Footer/>);
  const linkElement = screen.getByText(/Blog/i);
  expect(linkElement).toBeInTheDocument();
});

