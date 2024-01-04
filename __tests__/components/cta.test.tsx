import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CTAButton } from '@/components/cta';

describe('CTAButton', () => {
  it('renders a button', () => {
    render(<CTAButton>Test</CTAButton>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should render with children content', () => {
    render(<CTAButton>Test</CTAButton>);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Test');
  });

  it('should render with properly style', () => {
    render(<CTAButton>Test</CTAButton>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass(
      'px-4 py-2 font-bold rounded-md text-lg bg-off-white text-charcoal-grey-500'
    );

    expect(button).not.toHaveClass('bg-deep-blue text-off-white');
  });

  it('should render with properly style when buttonType is primary', () => {
    render(<CTAButton buttonType='primary'>Test</CTAButton>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass(
      'px-4 py-2 font-bold rounded-md text-lg bg-deep-blue text-off-white'
    );
  });

  it('should render with properly style when buttonType is secondary', () => {
    render(<CTAButton buttonType='secondary'>Test</CTAButton>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass(
      'px-4 py-2 font-bold rounded-md text-lg bg-gold text-off-white'
    );
  });

  it('should render with custom class', () => {
    render(<CTAButton className='custom-class'>Test</CTAButton>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('custom-class');
  });

  it('should render with custom class when buttonType is primary', () => {
    render(
      <CTAButton className='custom-class' buttonType='primary'>
        Test
      </CTAButton>
    );

    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-deep-blue text-off-white custom-class');
  });

  it('fluid button should take full width', () => {
    render(<CTAButton fluid>Test</CTAButton>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('w-full');
  });

  it('should run onClick function', () => {
    const onClick = jest.fn();

    render(<CTAButton onClick={onClick}>Test</CTAButton>);

    const button = screen.getByRole('button');

    button.click();

    expect(onClick).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const { container } = render(<CTAButton>Test</CTAButton>);

    expect(container).toMatchSnapshot();
  });
});
