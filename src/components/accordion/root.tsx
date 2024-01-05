import { FC, PropsWithChildren } from 'react';
import { AccordionProvider } from './context';

export type RootProps = PropsWithChildren<{}>;

export const Root: FC<RootProps> = ({ children }) => {
  return (
    <AccordionProvider>
      <div
        data-testid='accordion-container'
        className='border-t border-b border-charcoal-grey py-2 bg-deep-blue'
      >
        {children}
      </div>
    </AccordionProvider>
  );
};
