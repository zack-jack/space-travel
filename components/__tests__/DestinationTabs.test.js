import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DestinationTabs from '../DestinationTabs';

test('Default tab has active state', () => {
  render(<DestinationTabs />);

  const firstTab = screen.getAllByRole('tab')[0];

  expect(firstTab.parentElement).toHaveClass('active');
});

test('Tab selection sets active state', async () => {
  render(<DestinationTabs />);

  const secondTab = screen.getAllByRole('tab')[1];
  await fireEvent.click(secondTab);

  expect(secondTab.parentElement).toHaveClass('active');
});
