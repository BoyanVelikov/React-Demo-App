import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Composition from './Composition';

describe('<Composition />', () => {
  test('it should mount', () => {
    render(<Composition />);
    
    const composition = screen.getByTestId('Composition');

    expect(composition).toBeInTheDocument();
  });
});