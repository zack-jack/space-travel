import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tabs from '../Tabs';

it('Default tab has active state', () => {
  render(
    <Tabs
      label="Test"
      tabs={[{ title: 'Tab 1' }, { title: 'Tab 2' }, { title: 'Tab 3' }]}
    />,
  );

  const firstTab = screen.getByText(/Tab 1/i);

  expect(firstTab.parentElement).toHaveClass('active');
});

it('Tab selection sets active state', () => {
  render(
    <Tabs
      label="Test"
      tabs={[{ title: 'Tab 1' }, { title: 'Tab 2' }, { title: 'Tab 3' }]}
    />,
  );

  const secondTab = screen.getByText(/Tab 2/i);
  fireEvent.click(secondTab);

  expect(secondTab.parentElement).toHaveClass('active');
});
