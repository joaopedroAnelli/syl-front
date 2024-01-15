import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CTAButton } from '@/components/cta';

describe('CTAButton', () => {
  it('renders a button', () => {
    render(<CTAButton href='/'>Test</CTAButton>);

    const button = screen.getByRole('link');

    expect(button).toBeInTheDocument();
  });

  it('should render with children content', () => {
    render(<CTAButton href='/'>Test</CTAButton>);

    const button = screen.getByRole('link');

    expect(button).toHaveTextContent('Test');
  });

  it('should render with properly style', () => {
    render(<CTAButton href='/'>Test</CTAButton>);

    const button = screen.getByRole('link');

    expect(button).toHaveClass(
      'px-6 py-3 font-bold rounded-md text-lg bg-off-white text-charcoal-grey-500'
    );

    expect(button).not.toHaveClass('bg-deep-blue text-off-white');
  });

  it('should render with properly style when buttonType is primary', () => {
    render(
      <CTAButton href='/' buttonType='primary'>
        Test
      </CTAButton>
    );

    const button = screen.getByRole('link');

    expect(button).toHaveClass(
      'px-6 py-3 font-bold rounded-md text-lg bg-deep-blue text-off-white'
    );
  });

  it('should render with properly style when buttonType is secondary', () => {
    render(
      <CTAButton href='/' buttonType='secondary'>
        Test
      </CTAButton>
    );

    const button = screen.getByRole('link');

    expect(button).toHaveClass(
      'px-6 py-3 font-bold rounded-md text-lg bg-gold text-deep-blue'
    );
  });

  it('should render with custom class', () => {
    render(
      <CTAButton href='/' className='custom-class'>
        Test
      </CTAButton>
    );

    const button = screen.getByRole('link');

    expect(button).toHaveClass('custom-class');
  });

  it('should render with custom class when buttonType is primary', () => {
    render(
      <CTAButton href='/' className='custom-class' buttonType='primary'>
        Test
      </CTAButton>
    );

    const button = screen.getByRole('link');

    expect(button).toHaveClass('bg-deep-blue text-off-white custom-class');
  });

  it('fluid button should take full width', () => {
    render(
      <CTAButton href='/' fluid>
        Test
      </CTAButton>
    );

    const button = screen.getByRole('link');

    expect(button).toHaveClass('w-full');
  });

  it('should run onClick function', () => {
    const onClick = jest.fn();

    render(
      <CTAButton href='/' onClick={onClick}>
        Test
      </CTAButton>
    );

    const button = screen.getByRole('link');

    button.click();

    expect(onClick).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const { container } = render(<CTAButton href='/'>Test</CTAButton>);

    expect(container).toMatchSnapshot();
  });
});
