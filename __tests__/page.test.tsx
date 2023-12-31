import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);

    const test = screen.getByText(/Teste/i);

    expect(test).toBeInTheDocument();
  });
});