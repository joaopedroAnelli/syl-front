'use client';

import { FC, PropsWithChildren, useContext } from 'react';
import { AccordionContext } from './context';
export type HeaderProps = PropsWithChildren<{}>;

export const Header: FC<HeaderProps> = ({ children }) => {
  const { setOpen } = useContext(AccordionContext);

  return (
    <button
      onClick={() => setOpen((current) => !current)}
      className='w-full flex h-16 items-center justify-between'
    >
      {children}
    </button>
  );
};
