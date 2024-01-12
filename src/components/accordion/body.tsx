'use client';

import { FC, PropsWithChildren, useContext } from 'react';
import { AccordionContext } from './context';

export type BodyProps = PropsWithChildren<{}>;

export const Body: FC<BodyProps> = ({ children }) => {
  const { open } = useContext(AccordionContext);

  if (!open) {
    return null;
  }

  return (
    <div data-testid='accordion-body' className='py-2 bg-deep-blue'>
      {children}
    </div>
  );
};
