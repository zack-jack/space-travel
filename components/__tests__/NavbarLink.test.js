import React from 'react';
import { render } from '@testing-library/react';
import NavbarLink from '../NavbarLink';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
    };
  },
}));

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('Navigation link active state is true when href matches current path', () => {
  useRouter.mockImplementation(() => ({
    route: '/test',
    pathname: '/test',
  }));
  const { container } = render(
    <NavbarLink
      href="/test"
      index={0}
      title="unit test"
    />,
  );

  expect(container.firstChild).toHaveClass('active');
});

test('Navigation link active state is false when href does not match current path', () => {
  useRouter.mockImplementation(() => ({
    route: '/unit-test',
    pathname: '/unit-test',
  }));
  const { container } = render(
    <NavbarLink
      href="/test"
      index={0}
      title="unit test"
    />,
  );

  expect(container.firstChild).not.toHaveClass('active');
});

test('Navigation link active state is true when passed active prop', () => {
  useRouter.mockImplementation(() => ({
    route: '/test',
    pathname: '/test',
  }));
  const { container } = render(
    <NavbarLink
      active
      href="/test"
      index={0}
      title="unit test"
    />,
  );

  expect(container.firstChild).toHaveClass('active');
});

test('Navigation link active state is false when href does not match current path and active prop is false', () => {
  useRouter.mockImplementation(() => ({
    route: '/unit-test',
    pathname: '/unit-test',
  }));
  const { container } = render(
    <NavbarLink
      active={false}
      href="/test"
      index={0}
      title="unit test"
    />,
  );

  expect(container.firstChild).not.toHaveClass('active');
});
