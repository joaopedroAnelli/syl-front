import { FC, PropsWithChildren } from 'react';
import { AccordionProvider } from './context';

export type RootProps = PropsWithChildren<{}>;

export const Root: FC<RootProps> = ({ children }) => {
  return (
    <AccordionProvider>
      <div
        data-testid='accordion-container'
        className='border-b border-slate-500 bg-deep-blue'
      >
        {children}
      </div>
    </AccordionProvider>
  );
};
