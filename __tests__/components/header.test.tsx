import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/header';

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

describe('Header', () => {
  it('renders a h1', () => {
    render(<Header as='h1'>Test</Header>);

    const h1 = screen.getByRole('heading');

    expect(h1).toBeInTheDocument();
  });

  it('should render with children content', () => {
    render(<Header>Test</Header>);

    const h1 = screen.getByRole('heading');

    expect(h1).toHaveTextContent('Test');
  });

  it('should render with properly style', () => {
    render(
      <Header as='h1' size='lg' color='default'>
        Test
      </Header>
    );

    const h1 = screen.getByRole('heading');

    expect(h1).toHaveClass(
      'font-serif tracking-tight font-bold text-5xl md:text-6xl lg:text-7xl text-off-white'
    );
  });

  it('should render with custom class', () => {
    render(<Header className='custom-class'>Test</Header>);

    const h1 = screen.getByRole('heading');

    expect(h1).toHaveClass(
      'font-serif tracking-tight font-bold text-5xl md:text-6xl lg:text-7xl text-off-white custom-class'
    );
  });

  it('should override color', () => {
    render(<Header color='gold'>Test</Header>);

    const h1 = screen.getByRole('heading');

    expect(h1).toHaveClass(
      'font-serif font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-gold'
    );
  });

  it('should match snapshot', () => {
    const { container } = render(<Header>Test</Header>);

    expect(container).toMatchSnapshot();
  });

  // it('should be bigger in desktop', () => {
  //   resizeWindow(1024, 768);

  //   render(<Header size='lg'>Test</Header>);

  //   const h1 = screen.getByRole('heading');

  //   expect(h1).toHaveStyle('font-size: 4.5rem');
  // });
});
