import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpeachText } from './index';

describe('SpeachText component', () => {
  it('renders without crashing', () => {
    render(<SpeachText speachText="test text" />);
  });

  it('renders the correct text', () => {
    render(<SpeachText speachText="test text" />);
    expect(screen.getByText('test text')).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    render(<SpeachText speachText="test text" />);
    expect(screen.getByText('test text')).toHaveClass('speachTextContainer');
  });
});
