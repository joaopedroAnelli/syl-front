import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import Accordion from '@/components/accordion';
import { useContext } from 'react';
import { AccordionContext } from '@/components/accordion/context';

describe('Accordion', () => {
  const loremIpsum =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.';

  const AccordionComponent = () => {
    return (
      <Accordion.Root>
        <Accordion.Header>
          <Accordion.Title>Accordion</Accordion.Title>
          <Accordion.Trigger />
        </Accordion.Header>

        <Accordion.Body>
          <Accordion.Description>{loremIpsum}</Accordion.Description>
        </Accordion.Body>
      </Accordion.Root>
    );
  };

  describe('testing functionality', () => {
    it('renders without crashing', () => {
      render(<AccordionComponent />);

      expect(screen.getByText('Accordion')).toBeVisible();

      expect(screen.queryByText(loremIpsum)).toBeNull();
    });

    it('renders with accordion open', () => {
      act(() => {
        render(<AccordionComponent />);
      });

      expect(screen.getByText('Accordion')).toBeVisible();

      expect(screen.queryByText(loremIpsum)).toBeNull();

      act(() => {
        screen.getByRole('button').click();
      });

      expect(screen.getByText(loremIpsum)).toBeVisible();
    });

    it('should close when clicking on the trigger and it is open', () => {
      act(() => {
        render(<AccordionComponent />);
      });

      expect(screen.getByText('Accordion')).toBeVisible();

      expect(screen.queryByText(loremIpsum)).toBeNull();

      act(() => {
        screen.getByRole('button').click();
      });

      expect(screen.getByText(loremIpsum)).toBeVisible();

      act(() => {
        screen.getByRole('button').click();
      });

      expect(screen.queryByText(loremIpsum)).toBeNull();
    });
  });

  describe('testing look', () => {
    it('should be good looking', () => {
      render(<AccordionComponent />);

      const container = screen.getByTestId('accordion-container');

      expect(container).toHaveClass(
        'border-t border-b border-charcoal-grey py-2 bg-deep-blue'
      );

      const title = screen.getByText('Accordion');

      expect(title).toHaveClass('mx-4 text-off-white');

      const trigger = screen.getByRole('button');

      expect(trigger).toHaveClass('text-off-white');
    });

    it('should be good looking when open', () => {
      act(() => {
        render(<AccordionComponent />);
      });

      act(() => {
        const trigger = screen.getByRole('button');
        trigger.click();
      });

      const body = screen.getByTestId('accordion-body');

      expect(body).toHaveClass('bg-deep-blue py-2');

      const description = screen.getByText(loremIpsum);

      expect(description).toHaveClass('mx-4 text-off-white');
    });
  });

  it('context should work fine outside a wrapper', () => {
    const FakeComponent = () => {
      const { open, setOpen } = useContext(AccordionContext);

      setOpen(true);

      return <div>{open ? 'open' : 'closed'}</div>;
    };

    render(<FakeComponent />);
  });
});
