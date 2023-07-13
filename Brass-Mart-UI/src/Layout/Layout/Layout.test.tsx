import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from './Layout';

const Children = () => {
  return (
  <div>Howdy!</div>
  )
}

describe('App tests', () => {
    it('should contains the heading 1', () => {
    render(<Layout ><Children /></Layout>);
        const heading = screen.getByText(/Howdy!/i);
        expect(heading).toBeInTheDocument()
    });
});