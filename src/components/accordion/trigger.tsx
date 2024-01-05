'use client';

import { useContext, FC, PropsWithChildren } from 'react';
import { AccordionContext } from './context';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

export type TriggerProps = PropsWithChildren<{}>;

export const Trigger: FC<TriggerProps> = ({ children }) => {
  const { open, setOpen } = useContext(AccordionContext);

  return (
    <button
      role='button'
      className='text-off-white w-5 h-5'
      onClick={() => setOpen(!open)}
    >
      {children}
      {open ? (
        <ChevronUpIcon className='w-full' />
      ) : (
        <ChevronDownIcon className='w-full' />
      )}
    </button>
  );
};
