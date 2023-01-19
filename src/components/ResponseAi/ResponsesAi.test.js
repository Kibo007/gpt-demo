import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResponseAi } from './index';

describe('ResponseAi component', () => {
  it('renders without crashing', () => {
    render(<ResponseAi response="test response" loading={false} />);
  });

  it('renders the correct response', () => {
    render(<ResponseAi response="test response" loading={false} />);
    expect(screen.getByText('test response')).toBeInTheDocument();
  });

  it('renders the loading text when loading is true', () => {
    render(<ResponseAi response="" loading={true} />);
    expect(screen.getByText('loading ...')).toBeInTheDocument();
  });

  it('does not render the response when loading is true', () => {
    render(<ResponseAi response="test response" loading={true} />);
    expect(screen.queryByText('test response')).toBeNull();
  });

  it('has the correct class name', () => {
    render(<ResponseAi response="test response" loading={false} />);
    expect(screen.getByText('test response')).toHaveClass('responseContainer');
  });
});
