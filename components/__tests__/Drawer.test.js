import React from 'react';
import { render, screen } from '@testing-library/react';
import Drawer from '../Drawer';

test('Drawer children are hidden by default', async () => {
  render(
    <Drawer
      show={false}
      alignment="right"
    >
      <p>Drawer content</p>
    </Drawer>,
  );

  const drawer = screen.queryByTestId('c-drawer');

  expect(drawer).not.toHaveStyle('left: 0px');
  expect(drawer).toHaveStyle('left: 1024px');
});

test('Drawer content is hidden when trigger is toggled to close', async () => {
  render(
    <Drawer
      show
      alignment="right"
    >
      <p>Drawer content</p>
    </Drawer>,
  );

  const drawer = screen.queryByTestId('c-drawer');

  expect(drawer).toHaveStyle('left: 0px');
});

test('Drawer with left alignment', async () => {
  render(
    <Drawer
      show
      alignment="left"
    >
      <p>Drawer content</p>
    </Drawer>,
  );

  const drawer = screen.queryByTestId('c-drawer');

  expect(drawer).not.toHaveClass('justify-end');
});

test('Drawer with right alignment', async () => {
  render(
    <Drawer
      show
      alignment="right"
    >
      <p>Drawer content</p>
    </Drawer>,
  );

  const drawer = screen.queryByTestId('c-drawer');

  expect(drawer).toHaveClass('flex justify-end');
});
