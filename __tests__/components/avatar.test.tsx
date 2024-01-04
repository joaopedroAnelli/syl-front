import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Avatar } from '@/components/avatar';

describe('Avatar', () => {
  it('renders an image', () => {
    render(<Avatar src='/avatar.jpg' alt='avatar' />);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });

  it('should render with properly style', () => {
    render(<Avatar src='/avatar.jpg' alt='avatar' />);

    const image = screen.getByRole('img');

    expect(image).toHaveClass('rounded-full');
  });

  it('should render with custom class', () => {
    render(<Avatar className='custom-class' src='/avatar.jpg' alt='avatar' />);

    const image = screen.getByRole('img');

    expect(image).toHaveClass('custom-class');
  });
});
