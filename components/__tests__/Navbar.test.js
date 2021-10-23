import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

it('Navigation link children are rendered', () => {
  render(
    <Navbar>
      <li>
        <a href="#">Test 1</a>
      </li>
      <li>
        <a href="#">Test 2</a>
      </li>
      <li>
        <a href="#">Test 3</a>
      </li>
    </Navbar>
  );

  const links = screen.getAllByText(/Test [0-9]/i);

  expect(links).toHaveLength(3);
});
