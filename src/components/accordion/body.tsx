'use client';

import { FC, HTMLAttributes, PropsWithChildren, useContext } from 'react';
import { AccordionContext } from './context';

export type BodyProps = PropsWithChildren<{}>;

export const Body: FC<BodyProps> = ({ children }) => {
  const { open } = useContext(AccordionContext);

  return (
    <div
      data-testid='accordion-body'
      className={`bg-deep-blue transition-all ease-in-out overflow-hidden ${
        open ? 'max-h-96 py-6 md:py-12' : 'invisible max-h-0 p-0'
      } `}
    >
      {children}
    </div>
  );
};
