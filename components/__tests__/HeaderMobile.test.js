import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import HeaderMobile from '../HeaderMobile';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
    };
  },
}));

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

beforeEach(() => {
  useRouter.mockImplementation(() => ({
    route: '/test',
    pathname: '/test',
  }));
});

test('Mobile nav menu is hidden by default', async () => {
  render(<HeaderMobile />);

  const navMenu = screen.queryByRole('menu');

  expect(navMenu).not.toBeInTheDocument();
});

test('Clicking the hamburger button expands the nav menu', async () => {
  render(<HeaderMobile />);

  const hamburgerBtn = screen.getByText('Menu');
  await fireEvent.click(hamburgerBtn);

  const navMenu = screen.queryByRole('menu');

  expect(navMenu).toBeInTheDocument();
});
